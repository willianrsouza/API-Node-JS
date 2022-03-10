module.exports.index = function(application, req, res) {
    var bancoModel = new application.src.models.bancos();
  
    bancoModel.getBanco(function(err, result) {
      res.render("bancos/index", {bancoModel : result});
    });
  }
  