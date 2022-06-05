//note - for pepole, you have to go to the pages folder,
//i combined the desktop source with the page source.
//please go there if you want to modify the source of the game maker.





//require modules.
var electron = require("electron"); //main module - does all the work for running the desktop app, WE NEED THIS!
var app = electron.app; //tell when its ready - if we run it as soon as it runs the code, it will throw an error.
var Menu = electron.Menu; //to remove the electron template menu.
var BrowserWindow = electron.BrowserWindow //to do all the window, and loading the game maker.

//init program

//allow logs to go into the electron console (for devlopers)
app.console = console;

//tell where the app is at, good for telling where is the example folder
app.rootPath = __dirname

//where the gvbvdxx game maker 2 can do desktop app stuff, like dialogs and that stuff.
require('@electron/remote/main').initialize();

//remove the menu options
Menu.setApplicationMenu(Menu.buildFromTemplate([]));

//make window when ready
function makePlainWindow() {
	var window = new BrowserWindow({
		title:"Gvbvdxx Game Maker 2 Desktop",
		icon:"./icon.png",
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false
		},
		width:1000,
		height:500
	});
	//load the page.
	window.loadFile("./pages/index.html");
	//enable the contents to be able to do desktop stuff
	require('@electron/remote/main').enable(window.webContents);
	//enable this if your editing the game maker, so you can test stuff without restarting.
	//window.openDevTools();
}
//run as soon as the app is ready to load the window.
app.on('ready',makePlainWindow);