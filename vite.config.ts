import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   // 别名配置
   resolve: {
    alias: {
      '@': '/src',
      // 添加其他别名
      // 例如：'@components': '/src/components'
    },
  },
  // Less 预处理器配置
  css: {
    preprocessorOptions: {
      less: {
        // 全局变量等配置
        // 例如：modifyVars: { '@primary-color': '#1DA57A' }
      },
    },
  },
  // 代理跨域配置
  server: {
    proxy: {
      // // 将请求 `/api` 转发到目标地址
      // '/api': {
      //   target: 'http://api.example.com',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api/, ''),
      // },
      // // 添加其他需要代理的路由
    },
  },
})
