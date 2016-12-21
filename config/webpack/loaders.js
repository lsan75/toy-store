exports.assets = {
  test: /\.(woff|woff2|ttf|eot|svg|otf|gif|jpg|jpeg|png|ico)(\?]?.*)?$/,
  loader: 'file-loader?name=res/[name].[ext]?[hash]'
}

exports.styles = {
  test: /\.(css|less)$/,
  loader: 'style-loader!css-loader!less-loader'
}

exports.json = {
  test: /\.json$/,
  loader: 'json-loader'
}

exports.scripts = {
  test: /\.ts$/,
  loader: 'awesome-typescript-loader!angular2-template-loader'
}

exports.html = {
  test: /\.html$/,
  loader: 'raw-loader'
}

exports.scriptslint = {
  test: /\.ts$/,
  loader: 'tslint'
}

exports.scriptsTestReport = {
  test: /\.(js|ts)$/,
  loader: 'sourcemap-istanbul-instrumenter-loader',
  enforce: 'post',
  exclude: [
    /\.(e2e|spec)\.ts$/,
    /node_modules/
  ],
  query: { 'force-sourcemap': true }
}