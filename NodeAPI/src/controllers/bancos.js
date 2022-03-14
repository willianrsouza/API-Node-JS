module.exports.index = function(application, req, res) {
    var bancosModel = new application.src.models.bancos();
  
    bancosModel.getBanco(function(err, result) {
      res.render("index", {bancos : result});
    });
  }
  