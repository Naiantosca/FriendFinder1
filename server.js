    var express = require('express');
    var app = express();
    var bodyParser = require('body-parser');
    var PORT = process.env.PORT || 8080;

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(express.static("./public"));

    require("./routing/apiRoutes")(app);
    require("./routing/htmlRoutes")(app);

    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
    