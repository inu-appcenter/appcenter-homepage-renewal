import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    host: true, // ← 0.0.0.0으로 바인딩되어 같은 네트워크 기기에서 접속 가능
    port: 5173
  }
});
