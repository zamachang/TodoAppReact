module.exports = {
  tabWidth: 4, //インデントのスペース数
  singleQuote: true, //シングルクォートに統一
  trailingComma: 'es5', //末尾のカンマをどうするか: es5に準拠させる。
  extends: ['eslint:recommended', 'plugin:prettier/recommended'], // ESLintの推奨設定をベースにする
  plugins: ['react'], // React関係のルールを指定するのに必要
  parser: 'babel-eslint', // JSXとかでエラー出るのを回避。env の es6:true もこれにより不要になる
  parserOptions: {
      sourceType: 'module', // import などを使うときに必要
      ecmaFeatures: {
          experimentalObjectRestSpread: true, // 非推奨項目も注意してくれる？（あんまよくわかってない）
          jsx: true,  //JSX を使うときに必要（ reactプラグインいれてるからいらないかも...？ ）
      },
  }
};