var express = require("express");

var app = express();

app.set("view engine", "jade");

app.get("/", function(req, res){
	res.render("home",{title:'Mi primera pagina con jade'});
});

app.listen(8010, function(){
	console.log("Ejemplo escuchando el puerto 8010");
});