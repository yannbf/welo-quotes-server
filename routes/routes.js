var appRouter = function(app){
    app.get("/randomQuote", function(req, res) {
        var fileUtil = require("../utils/fileUtil.js");
        fileUtil.getRandomFile().then((result) =>{
            res.send(result);
        });
    });
}

module.exports = appRouter;