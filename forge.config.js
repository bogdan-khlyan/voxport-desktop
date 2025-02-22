module.exports = {
  packagerConfig: {
    executableName: 'voxport', // Укажите имя exe файла
    ignore: [
      'node_modules',
        '.temp',
        '.idea',
        'public',
        'src'
    ],
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      platforms: ['win32'],
      config: {
        name: 'voxport',           // имя вашего приложения
        authors: 'Bogdan Khlyan',   // автор
        exe: 'voxport.exe',         // имя .exe файла (оно должно совпадать с именем собранного исполнимого файла)
        setupExe: 'voxport-installer.exe', // имя установщика
        noMsi: true,                // отключение MSI установщика
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
    // Добавляем maker для DMG
    {
      name: '@electron-forge/maker-dmg',
      config: {
        // Здесь можно указать дополнительные параметры конфигурации, если нужно
        overwrite: true,  // Если хотите перезаписывать DMG, если файл уже существует
        title: 'voxport',  // Здесь укажите короткое имя
      },
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-vite',
      config: {
        build: [
          {
            entry: 'src/main.js',
            config: 'vite.main.config.mjs',
          },
          {
            entry: 'src/preload.js',
            config: 'vite.preload.config.mjs',
          },
        ],
        renderer: [
          {
            name: 'main_window',
            config: 'vite.renderer.config.mjs',
            html: 'renderer/index.html',  // Указываем путь к готовому index.html
          },
        ],
      },
    },
  ],
};
