export const webpackConfig = {
  mode:   process.env.NODE_ENV || 'development',
  entry:  {
    main:  './src/scripts/main.js',
    vueGameLoss:  './src/scripts/vueGameLoss.js',
    vueGameSprinter:  './src/scripts/vueGameSprinter.js',
    vueGameSprinterStart:  './src/scripts/vueGameSprinterStart.js',
    vueGameFinds:  './src/scripts/vueGameFinds.js',
    vueGameIKnow:  './src/scripts/vueGameIKnow.js',
    vueGameIKnowQuestion:  './src/scripts/vueGameIKnowQuestion.js',
    vueGameBlitz:  './src/scripts/vueGameBlitz.js',
    vueGameWayHome:  './src/scripts/vueGameWayHome.js',
    vueGameWayHomeStart:  './src/scripts/vueGameWayHomeStart.js',
    vuePlayers:  './src/scripts/vuePlayers.js',
    vueResult:  './src/scripts/vueResult.js'
  },
  output: {
    filename: '[name].bundle.js'
  }
};