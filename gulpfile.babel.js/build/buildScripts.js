import {src, dest, parallel}  from 'gulp';
import babel                  from 'gulp-babel';
import uglify                 from 'gulp-uglify';
import {getDir, isProduction} from '../helpers/gets';
import cached                 from 'gulp-cached';
import webpack                from 'webpack-stream';
import {webpackConfig}        from '../webpack/webpack.config';

/**
 * Собирает бандлы
 *
 * @param cb  —  callback
 */
export function buildScriptsBundle(cb) {
  let stream = src('./src/scripts/main.js');

  webpackConfig.mode = process.env.NODE_ENV || 'development';

  stream = stream
    .pipe(webpack(webpackConfig)
      .on('error', e => console.log(e)));

  if (isProduction()) {
    stream
      .pipe(babel({presets: ['@babel/env']}))
      .pipe(uglify({mangle: false}));
  }

  stream.pipe(dest(`${getDir()}/scripts/`));

  cb ? cb() : 0;
}

/**
 * Копирует сторонние скрипты в билд
 *
 * @param cb  —  callback
 */
export function buildVendorScripts(cb) {
  src('./src/scripts/vendor/**/*.js')
    .pipe(cached('scriptsVendor'))
    .pipe(dest(`${getDir()}/scripts/vendor/`));

  cb ? cb() : 0;
}

exports.buildScripts = parallel(
  buildScriptsBundle,
  buildVendorScripts,
);