
###webpack项目中基于postCss插件安装对应的postcss-loader,有待下次单独配置验证
```
{
  loader: require.resolve('postcss-loader'),
  options: {
    // Necessary for external CSS imports to work
    // https://github.com/facebookincubator/create-react-app/issues/2677
    ident: 'postcss',
    plugins: () => [
      //require('postcss-flexbugs-fixes'),
      autoprefixer({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9', // React doesn't support IE8 anyway
        ],
        flexbox: 'no-2009',
      }),
      //加入vw 配置
      postcssAspectRatioMini({}),
      postcssPxToViewport({ 
        viewportWidth: 750, // (Number) The width of the viewport. 
        viewportHeight: 1334, // (Number) The height of the viewport. 
        unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to. 
        viewportUnit: 'vw', // (String) Expected units. 
        selectorBlackList: ['.ignore', '.hairlines'], // (Array) The selectors to ignore and leave as px. 
        minPixelValue: 1, // (Number) Set the minimum pixel value to replace. 
        mediaQuery: false // (Boolean) Allow px to be converted in media queries. 
      }),
      postcssWriteSvg({
        utf8: false
      }),
      postcssCssnext({}),
      postcssViewportUnits({}),
      cssnano({
        preset: "advanced",
        autoprefixer: false,
        "postcss-zindex": false
      })
    ],
  },
},
```

### 项目构建

- 基于create-react-app

  crette-react-app projectName

- 暴露配置配置项

  npm run eject

- 安装依赖需要的插件postCss

```
npm i --save postcss-aspect-ratio-mini
postcss-px-to-viewport
postcss-write-svg
postcss-cssnext
postcss-viewport-units
cssnano
```

- 项目配置项中添加配置config/webpack.config.dev.js

```
// 添加 vw 配置
const postcssAspectRatioMini = require('postcss-aspect-ratio-mini');
const postcssPxToViewport = require('postcss-px-to-viewport');
const postcssWriteSvg = require('postcss-write-svg');
const postcssCssnext = require('postcss-cssnext');
const postcssViewportUnits = require('postcss-viewport-units');
const cssnano = require('cssnano');
//添加 vw 配置end


// loader: require.resolve('postcss-loader') --> options.plugins添加如下插件
//加入vw 配置
postcssAspectRatioMini({}),
postcssPxToViewport({ 
  viewportWidth: 750, // (Number) The width of the viewport. 
  viewportHeight: 1334, // (Number) The height of the viewport. 
  unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to. 
  viewportUnit: 'vw', // (String) Expected units. 
  selectorBlackList: ['.ignore', '.hairlines'], // (Array) The selectors to ignore and leave as px. 
  minPixelValue: 1, // (Number) Set the minimum pixel value to replace. 
  mediaQuery: false // (Boolean) Allow px to be converted in media queries. 
}),
postcssWriteSvg({
  utf8: false
}),
postcssCssnext({}),
postcssViewportUnits({}),
cssnano({
  preset: "advanced", 
  autoprefixer: false, 
  "postcss-zindex": false 
})
```