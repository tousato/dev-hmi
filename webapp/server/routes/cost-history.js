var express = require('express');
var router = express.Router();
var mizuho = require( '../../server/cost-history/mizuho');

// 共通のルート・パス定義
router.get('/cost-history/mizuho', mizuho);

module.exports = router;
