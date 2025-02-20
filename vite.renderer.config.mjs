import { defineConfig } from 'vite';
import path from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  root: 'src/renderer',  // Папка с исходными файлами
  build: {
    outDir: path.resolve('.temp'),  // Путь для готовых файлов после копирования
    emptyOutDir: false,  // Не очищать папку перед копированием
    // Здесь не указываем input или другие параметры сборки
    rollupOptions: {
      // Включаем только опции для копирования статических файлов
      input: null,
    },
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: path.resolve('src/renderer'),  // Копируем все из папки assets
          dest: path.resolve('.vite/build/renderer'),  // Путь в папке назначения
        },
      ],
    }),
  ],
});
