var fs = require("fs");
var exe = "";
var dir = fs.readdirSync("./dist");
for (var i in dir) {
	if (dir[i].split(".").pop().toLowerCase() == "exe") {
		exe = dir[i];
	}
}
console.log(exe);
var packageJSON = JSON.parse(fs.readFileSync("./package.json",{encoding:"UTF-8"}));
var version = packageJSON.version;
var spawn = require("node:child_process").spawn;
console.log("attempting to release app...");
const ls = spawn(`gh`, [`release`,`create`,`v${version}`,`./dist/${exe}`]);

ls.stdout.on('data', (data) => {
  console.log(`${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`err: ${data}`);
});

ls.on('close', (code) => {
  console.log(`done!
child process exited with code ${code}`);
	exec("./upload.sh",function (a,b,c,d) {})
});