/// <reference types="vitest" />
/// <reference types="vite/client" />
import { fileURLToPath, URL } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import packageJson from './package.json';

const isLibraryMode = !process.env.DISABLE_LIBRARY_MODE;

const getPath = (filePath: string) => {
  return fileURLToPath(new URL(filePath, import.meta.url));
};

const { devDependencies = {}, peerDependencies = {} } = packageJson;

const externalDependencies = Object.keys({
  ...devDependencies,
  ...peerDependencies,
});

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig({
  resolve: {
    alias: {
      '#src': getPath('src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
    css: true,
    coverage: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
  build: isLibraryMode
    ? {
        minify: true,
        lib: {
          entry: getPath('src/index.ts'),
          name: 'TsReactViteNpmLibTemplate',
          formats: ['es', 'umd'],
          fileName: (format, entry) => {
            return `${entry}.${format === 'es' ? 'esm' : format}.js`;
          },
        },
        rollupOptions: {
          external: externalDependencies,
          output: {
            globals: {
              react: 'React',
            },
          },
        },
      }
    : { chunkSizeWarningLimit: 1600 },
  plugins: isLibraryMode
    ? [
        react(),
        dts({
          insertTypesEntry: true,
          exclude: [
            'node_modules',
            'setupTests.ts',
            'vite.config.ts',
            '**/*.test.ts',
            '**/*.test.tsx',
            '**/*.spec.ts',
            '**/*.spec.tsx',
            '**/*.stories.ts',
            '**/*.stories.tsx',
          ],
        }),
      ]
    : [react()],
});
