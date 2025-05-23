/// <reference types="vitest/config" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import chalk from 'chalk';

// 引入多页面配置文件
const project = require("./scripts/multiProjects.json") as any;
// 获取npm run dev后缀参数 --page=xxx
const npm_config_page = process.env.npm_config_page || '';
// 命令行报错提示
const errorLog = (error:string) => console.log(chalk.red(`${error}`));
/**
 * 获取指定单页面入口
 */
const getEnterPages = () => {
  if (!npm_config_page) {
    errorLog("⚠ 警告 —— 请在命令行后以 '--page=页面名称' 格式指定页面名称！");
  }
  const filterArr = project.filter(
    (item:any) => item.chunk.toLowerCase() === npm_config_page.toLowerCase()
  );
  if (!filterArr.length) {
    console.log("⚠ 警告 —— 未找到指定页面，请检查页面名称是否正确！");
  }

  return {
    [npm_config_page]: path.resolve(
      __dirname,
      `src/projects/${npm_config_page}/index.html`
    )
  }
}

// 打包提示
const buildEndFn = (name:string) => {
  console.log(`🚀🚀🚀 ${chalk.green.bold('项目构建')} ➡️   ${chalk.white.bgGreen.bold(` ${name} `)} 🇨🇳`)
}

// https://vitejs.dev/config/
export default defineConfig({
  root: path.resolve(__dirname, `./src/projects/${npm_config_page}`), // 项目根目录（index.html 文件所在的位置）
  base: './',
  envDir: path.resolve(__dirname), // 环境变量目录
  plugins: [
    react(),
    svgr(),
    tsconfigPaths(),
    tailwindcss(),
    vanillaExtractPlugin({
    })
  ],
  server: {
    host: 'localhost',
    port: 8880,
    hmr: true, // 热更新
    open: true, // 自动打开浏览器
  },
  resolve: {
    alias: {
      '~': path.join(__dirname, "./"),
      '@': path.join(__dirname, "./src"),
      '#': path.join(__dirname, "./src/types"),
      '@project': path.join(__dirname, "./src/projects")
    }
  },
  build: {
    outDir: path.resolve(__dirname, `dist/${npm_config_page}`), // 指定输出路径
    assetsInlineLimit: 4096, // 小于此阈值的导入或引用资源将内联为 base64 编码
    emptyOutDir: false, // 每次构建前清空该目录
    terserOptions: {
      compress: {
        keep_infinity: true, // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
        drop_console: true, // 生产环境去除 console
        drop_debugger: true // 生产环境去除 debugger
      },
      format: {
        comments: false // 删除注释comments
      }
    },
    rollupOptions: {
      input: getEnterPages(), // 多页面配置
      buildEnd: buildEndFn(npm_config_page),
      output: {
        assetFileNames: '[ext]/[name]-[hash].[ext]', //静态文件输出的文件夹名称
        chunkFileNames: 'js/[name]-[hash].js',  //chunk包输出的文件夹名称
        entryFileNames: 'js/[name]-[hash].js',  //入口文件输出的文件夹名称
        compact: true,
        manualChunks: (id):any => {
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString() // 拆分多个vendors
          }
        }
      }
    },
  },
  test: {
    includeSource: ['src/**/*.{ts,tsx}'],
    globals: true,
    environment: "jsdom",
    /* coverage: {
      enabled: true,
      provider: "v8",
      cleanOnRerun: true,
      reporter: ["text", "json", "html"]
    } */
  }
})
