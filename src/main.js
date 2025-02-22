const { app, BrowserWindow, autoUpdater } = require('electron');
const path = require('path');

let feedURL;

if (process.platform === 'darwin') { // macOS
  feedURL = 'https://ex.devserver.host/share/voxport/mac/latest.json';
} else if (process.platform === 'win32') { // Windows
  feedURL = 'https://ex.devserver.host/share/voxport/win/latest.json';
} else if (process.platform === 'linux') { // Linux
  feedURL = 'https://ex.devserver.host/share/voxport/linux/latest.json';
}

autoUpdater.setFeedURL({ url: feedURL });

autoUpdater.on('checking-for-update', () => {
  console.log('Проверка обновлений...');
});

autoUpdater.on('update-available', (info) => {
  console.log('Обновление доступно');
});

autoUpdater.on('update-not-available', () => {
  console.log('Обновление не доступно');
});

autoUpdater.on('error', (err) => {
  console.log('Ошибка при обновлении:', err);
});

autoUpdater.on('download-progress', (progressObj) => {
  console.log('Скачивание обновления...', progressObj);
});

autoUpdater.on('update-downloaded', (info) => {
  console.log('Обновление загружено');
  // Автоматическое обновление после скачивания
  autoUpdater.quitAndInstall();
});

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1400,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  mainWindow.loadFile(path.join(__dirname, 'renderer/index.html'));

  mainWindow.webContents.openDevTools();
};

app.on('ready', () => {
  createWindow();
  autoUpdater.checkForUpdates();  // Начинаем проверку обновлений при запуске
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
