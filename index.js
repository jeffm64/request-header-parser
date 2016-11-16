var express = require("express");
var app = express();

app.get("/", function (req, res) {
    
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var lang = req.headers["accept-language"].split(",")[0];
    var os = req.headers["user-agent"].match(/\((.*?)\)/)[1]
    
    res.json({
        ipaddress: ip,
        language: lang,
        software: os
  });                                                
});

app.listen(8080, function () {
  console.log("App listening on port 8080!");
});
