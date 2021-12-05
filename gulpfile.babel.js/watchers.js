import {watch} from 'gulp';

import {
  buildPages,
  buildStyles,
  buildApiScripts,
  buildVendorScripts,
  buildScriptsBundle,
  buildOther,
  buildFonts,
  buildVideo,
  buildFavicons,
  buildImages
} from './build';


const watchers = [
  [
    [
      'src/pages/**/*.pug',
      'src/blocks/**/*.pug',
      'src/blocks/**/*.js',
      'src/vueComponents/**/*.pug'
    ],
    buildPages
  ],
  [
    [
      'src/styles/**/*.scss',
      'src/blocks/**/*.scss',
      'src/vueComponents/**/*.scss'
    ],
    buildStyles
  ],
  [
    [
      'src/scripts/**/*.js',
      '!src/scripts/vendor/**/*.js',
      '!src/scripts/api.js',
      'src/blocks/**/*.js',
      'src/vueComponents/**/*.js'
    ],
    buildScriptsBundle
  ],
  [['src/scripts/vendor/**/*.js'], buildVendorScripts],
  [['src/scripts/api.js'], buildApiScripts],
  [['src/assets/img/**/*.*'], buildImages],
  [['src/assets/favicon/**/*.*'], buildFavicons],
  [['src/assets/video/**/*.*'], buildVideo],
  [['src/assets/fonts/**/*.*'], buildFonts],
  [['src/assets/other/**/*.*'], buildOther]
];


export function watchSrc(cb) {
  watchers.forEach(watcher => {
    watch(watcher[0], watcher[1]);
  });

  cb();
}