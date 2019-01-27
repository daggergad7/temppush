var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    flash        = require("connect-flash"),
    session = require("express-session");
    var favicon = require('serve-favicon');

    var land    = require("./routes/land");

    app.use(favicon(__dirname + '/public/images/favicon.ico'));

    app.set("view engine", "ejs");
    app.use(express.static(__dirname + "/public"));


    app.use("/", land);

    app.listen(3000 || process.env.PORT, process.env.IP, function(){
        console.log("The klavona Server Has Started!");
     });