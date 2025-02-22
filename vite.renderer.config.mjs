// import { defineConfig } from 'vite';
// import path from 'path';
// import { viteStaticCopy } from 'vite-plugin-static-copy';
//
// export default defineConfig({
//   root: 'src/renderer',  // Папка с исходными файлами
//   build: {
//     outDir: path.resolve('.temp'),  // Путь для готовых файлов после копирования
//     emptyOutDir: false,  // Не очищать папку перед копированием
//     // Здесь не указываем input или другие параметры сборки
//     rollupOptions: {
//       // Включаем только опции для копирования статических файлов
//       input: null,
//     },
//   },
//   plugins: [
//     viteStaticCopy({
//       targets: [
//         {
//           src: path.resolve('src/renderer'),  // Копируем все из папки assets
//           dest: path.resolve('.vite/build/renderer'),  // Путь в папке назначения
//         },
//       ],
//     }),
//   ],
// });
import { defineConfig } from 'vite';
import path from 'path';
import { execSync } from 'child_process';

// Функция для копирования файлов
function copyStaticFiles() {
  const sourceDir = path.resolve('src', 'renderer');
  const destDir = path.resolve('.vite', 'build', 'renderer');

  // Если директория назначения не существует, создаем ее (для Windows)
  execSync(`mkdir "${destDir}"`);

  // Копируем файлы с помощью команды xcopy для Windows
  execSync(`xcopy /E /I "${sourceDir}" "${destDir}"`);
}

export default defineConfig({
  root: 'src/renderer',
  build: {
    outDir: path.resolve('.ssstemp'),
    emptyOutDir: false,
    rollupOptions: {
      input: null,  // Убираем input
    },
  },
  plugins: [
    {
      name: 'copy-static-files',
      buildEnd() {
        copyStaticFiles();  // Копируем файлы по завершении сборки
      },
    },
  ],
});
