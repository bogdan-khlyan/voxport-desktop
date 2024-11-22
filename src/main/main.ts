import {app, BrowserWindow, ipcMain, session} from 'electron';
import {join} from 'path';

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 1400,
    height: 800,
    webPreferences: {
      preload: join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    }
  });

  session.defaultSession.setPermissionRequestHandler((webContents, permission, callback) => {
    if (permission === 'media') {
      // Разрешить использование камеры и микрофона
      callback(true);
    } else {
      callback(false);
    }
  });

  if (process.env.NODE_ENV === 'development') {
    const rendererPort = process.argv[2];
    mainWindow.loadURL(`http://localhost:${rendererPort}`);
  }
  else {
    mainWindow.loadFile(join(app.getAppPath(), 'renderer', 'index.html'));
  }

  mainWindow.webContents.openDevTools();

}

app.whenReady().then(() => {
  createWindow();

  session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
    callback({
      responseHeaders: {
        ...details.responseHeaders,
        'Content-Security-Policy': "" // Отключаем CSP

        // 'Content-Security-Policy': [
        //   "default-src 'self'; " +
        //   "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://jitsi.mc.devserver.host http://localhost; " +
        //   "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
        //   "font-src 'self' https://fonts.gstatic.com; " +
        //   "connect-src 'self' ws://localhost:1337 http://localhost:1337; " + // Добавляем ws:// для WebSocket
        //   "frame-src 'self' https://jitsi.mc.devserver.host;" // Разрешаем загрузку фреймов с jitsi.mc.devserver.host
        // ]
      }
    });
  });





  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
});

ipcMain.on('message', (event, message) => {
  console.log(message);
})