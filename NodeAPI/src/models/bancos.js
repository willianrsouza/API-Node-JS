var fs = require('fs');

function banco() {}

banco.prototype.getBanco = function(callback) 
{
  fs.readFile('./data/bancos.json', 'utf8', function (err, result) {
    var data = [];

    if (!err) {
      var obj = JSON.parse(result);

      if (obj.bancos.length > 40) {
        var i = 30;
      } else {
        var i = (obj.bancos.length - 1);
      }

      obj.bancos.forEach(function (banco) {
        if (i >= 0) {
          data[i] = banco;
          i--;
        }
      });
    }
    callback(err, data);
  });
};


module.exports = function(){
  return banco;
}