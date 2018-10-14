// 使用するライブラリの読み込み
const express = require('express');
const path = require('path');
const http = require('http');
var log4js = require('log4js');
//config
log4js.configure({
    appenders: {
      system: { type: 'file', filename: 'system.log', maxLogSize: 10485760, numBackups: 3 },
      access: { type: 'dateFile', filename: 'access.log', pattern: '-yyyy-MM-dd' } //追加
    },
    categories: {
        default: {appenders:['system'], level: 'debug'},
        web: {appenders: ['access'], level: 'info'} //追加
    }
});



//logger
var systemLogger = log4js.getLogger(); 
var accessLogger = log4js.getLogger('web'); //追加



// api.js(サーバサイドの処理スクリプト)の読み込み
const api = require('./server/routes/api');
const hha = require('./server/routes/cost-history');

// expressの初期化
const app = express();
//bind access log
app.use(log4js.connectLogger(accessLogger));


// 静的ファイルパスの設定
// ビルド後のAngularのパスを設定する
app.use(express.static(path.join(__dirname, 'dist')));

// /apiでアクセスしたときはapi.jsを表示
app.use('/api', api);
app.use('/', hha);

// 任意のURLでアクセスしたときはdist/index.html(Angularのindex.html)を表示
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/webapp/index.html'));
});

/**
 * ポート設定
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * HTTPサーバの作成
 */
const server = http.createServer(app);

/**
 * ポート監視を開始する
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));

//system log
systemLogger.info("Express start");

