var pg = require('pg');

function getMizuho(req, res){

  var conString = "postgres://hoge:hoge@hha-postgres/hha";
  var resultName = "";
  var client = new pg.Client(conString);

  client.connect(function(err) {
    if(err) {
        return console.error('could not connect to postgres', err);
    }
    var sql = 'select * from mizuho where date in (\'2017-05-10\');';
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
        res.status(200).json({data: result.rows });
    });
  });
}
module.exports = getMizuho;
