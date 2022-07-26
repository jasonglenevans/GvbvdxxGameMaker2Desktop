var exec = require("node:child_process").exec;
var fs = require("fs");
var path = require("path");
var files = [];
var directories = [];
try{
fs.rmSync("./.git", { recursive: true, force: true });
}catch(e){}
try{
fs.rmSync("./uploadSource", { recursive: true, force: true });
}catch(e){}
try{
	fs.mkdirSync("./uploadSource");
}catch(e){}
function getFiles(dir,extraPath) {
	fs.readdirSync(dir).forEach((f) => {
		var real = path.join(dir,f);
		var otherReal = extraPath;
		if (fs.statSync(real).isDirectory()) {
			//console.log(f+" is directory");
			directories.push({real:real,dir:f,from:otherReal});
			console.log(otherReal);
			var addPath = "./";
			if (otherReal) {
				addPath = otherReal;
			}
			try{
				if (
				!(f.toLocaleString() == ".git") &&
				!(f.toLocaleString() == "node_modules") &&
				!(f.toLocaleString() == "dist") &&
				!(f.toLocaleString() == "uploadSource")
				) {
					fs.mkdirSync(path.join("./uploadSource",addPath,f))
				}
			}catch(e){}
			getFiles(real,path.join(addPath,f));
		} else {
			console.log(real);
			files.push({real:real,dir:f,from:otherReal});
			var addPath = "./";
			if (otherReal) {
				addPath = otherReal;
			}
			try{
				fs.writeFileSync(path.join("./uploadSource",addPath,f),fs.readFileSync(real));
			}catch(e){}
		}
	})
}
getFiles("./")

console.log("attempting to upload source...");