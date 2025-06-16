import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [
      react(),
      tsconfigPaths(),
      svgrPlugin(),
    ],
    build: {
      outDir: 'build',
    },
    server: {
      open: true,
      port: env.PORT ? parseInt(env.PORT) : undefined,
    }
  }
});
