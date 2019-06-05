const http = require('http');
const fs = require('fs');
var stream = fs.createWriteStream("fileslog.json", {flags:'a'});
const util = require('util')

//create a server object:
http.createServer(function (req, res) {
  var d = "";
  req.on('data', function (data) {
    d += data;
  });
  req.on('end', function () {
    now = new Date();
//    fs.writeFile("test.txt",("%s: %s", now, JSON.stringify(JSON.parse(d), null, 1)), function(err) {
//        if(err) {
//	    return console.log(err);
 //       }
    stream.write(util.format("\"%s\": %s,", now.toJSON(), JSON.stringify(JSON.parse(d), null, 1)));
    console.log("The file was saved!");
//    });
    //console.log("%s: %s", now, JSON.stringify(JSON.parse(d), null, 1));
    
    res.end();
  });
}).listen(3000);
