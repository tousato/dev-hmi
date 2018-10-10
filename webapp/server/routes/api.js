
const express = require('express');
const router = express.Router();
var async = require('async');

var pg = require('pg');

var conString = "postgres://msato:m-sato@hha-postgres/hha";
var resultName = "";
var client = new pg.Client(conString);

function getMasaru(date, callback, getMasaru2){
  client.connect(function(err) {
    if(err) {
        return console.error('could not connect to postgres', err);
    }
    var sql = 'select * from mizuho where date in (' + date + ');';
    //var sql = 'select * from mizuho where date=' + date + ';';
    console.log("sql:",sql);
    client.query( sql, function(err, result) {
        if(err) {
            return console.error('error running query', err);
        }
        console.log(result.rows[0].date);
        console.log(result.rows[0].memo);
        console.log(result.rows[0].amount);
        resultName = result.rows[0].date;
        client.end();
        getMasaru2(result.rows, callback);
    });
  });
}

function getMasaru2(result, callback){

  console.log("getMasaru2:", result);  
  callback(null, result.rows);
}

router.get('/api', (req, res) => {

  console.log("-- Waterfall test start ----------");

    async.waterfall([
        function (callback) {
            console.log("1");
            //setTimeout(function() {
            //    console.log("1 done");
            //    callback(null, 1);
            //}, 100);
            var date = [ '\'2017-05-10\'', '\'2016-07-27\'' ]
//            getMasaru(date, callback, getMasaru2);
        },
        function (arg, callback) {
            console.log("from:" + arg);
            console.log("2");
            setTimeout(function() {
                console.log("2 done");
                callback("exit!", 2);
            }, 100);
        },
        function (arg, callback) {
            console.log("3");
            setTimeout(function() {
                console.log("3 done");
                callback(null, 1);
            }, 100);
        }
    ], function (err, results) {
        if (err) {
            console.log("err[" + err + "]");
        }
        console.log("- Waterfall test done [" + results + "] ----------");
    });
    console.log("Waterfall test end of line");

  res.header('Content-Type', 'text/plain;charset=utf-8');
  res.status(200).json({data: {sei: "sato", mei:"masaru"}});
});

module.exports = router;
