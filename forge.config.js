module.exports = {
  packagerConfig: {
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
      platforms: ['win32'],  // Указываем платформу для Windows
      config: {
        // Для создания .exe инсталлятора
        name: 'voxport',
        authors: 'Bogdan Khlyan',  // Здесь укажите автора или организацию
        // icon: './path/to/icon.ico',  // Укажите путь к .ico иконке для установщика
        // setupIcon: './path/to/icon.ico',  // Можно указать иконку для установщика
        exe: 'voxport.exe',  // Указываем имя конечного .exe файла
        noMsi: true,  // Отключение MSI инсталлятора
        setupExe: 'voxport-installer.exe',  // Указание имени установщика
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
