import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig({
  base:'./',
  server:{
    port: 3333,
    host: true,
  },
  resolve:{
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src') }
    ]
  },
  plugins: [
    vue({
      template:{
        compilerOptions:{
          isCustomElement:tag => tag.includes('pixi-')
        }
      }      
    }),
    Components({
      resolvers: [VantResolver()],
    }),  
  ],
  css:{
    preprocessorOptions:{
      scss:{
        additionalData: '@import "@/assets/css/globalVar.scss";',
      }
    }
  },
  build:{
    rollupOptions:{
      output:{
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: assetsInfo => {
          let info = assetsInfo.name.split(',')
          let extType = info[info.length - 1]
          if(/\.(png|jpe?g|gif|svg)(\?.*)?$/.test(assetsInfo.name)){
            extType = 'images'
          }else if(/\.(woff2?|eot|ttf|otf)(\?.*)?$/.test(assetsInfo.name)){
            extType = 'font'
          }else if(/\.(css)(\?.*)?$/.test(assetsInfo.name)){
            extType = 'css'
          }else {
            extType = 'images'
          }
          return `assets/${extType}/[name][extname]`
        }
      }
    }
  } 
})
