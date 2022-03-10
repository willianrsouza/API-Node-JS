var fs = require('fs');

function banco() {}

banco.prototype.getBanco = function(callback) {
  fs.readFile('../data/bancosDB.json', 'utf8', function(err, result) {
    var data = [];

    if (!err) {
      
      var obj = JSON.parse(result);
      var i = 0;

      obj.bancos.forEach(function(db) {
        if (i >=  0) {
          data[i] = db;
	      i++;
        }
      });
    }	   
    callback(err, data);
  });
};

module.exports = function(){
  return banco;
}