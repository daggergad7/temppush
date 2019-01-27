var express     = require("express"),
    app         = express();
    var favicon = require('serve-favicon');

    var land    = require("./routes/land");

    app.use(favicon(__dirname + '/public/images/favicon.ico'));

    app.set("view engine", "ejs");
    app.use(express.static(__dirname + "/public"));


    app.use("/", land);

    const PORT = process.env.PORT || 5000;

    app.listen(PORT);