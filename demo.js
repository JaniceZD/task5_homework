#!/usr/bin/env node

var fs = require('fs')

var dirName = process.argv[2] // 传的参数是从第 2 个开始的

var checkDir = fs.existsSync("./" + dirName);  //判断文件是否存在
if(console.log(checkDir)){        //若存在，则退出
  process.exit(1)
}
  
else{            //若不存在，则进行以下操作 
fs.mkdirSync("./" + dirName) // mkdir $1
process.chdir("./" + dirName) // cd $1
fs.mkdirSync('css') // mkdir css
fs.mkdirSync('js') // mkdir js

fs.writeFileSync("./index.html", "<!DOCTYPE>\r\n")
fs.appendFileSync("./index.html","<title>Hello</title>\r\n")
fs.appendFileSync("./index.html","<h1>Hi</h1>")
fs.writeFileSync("css/style.css", "h1{color: red;}")
fs.writeFileSync("./js/main.js", "var string = \"Hello World\"\r\n")
fs.appendFileSync("./js/main.js","alert(string)")
}
process.exit(0)