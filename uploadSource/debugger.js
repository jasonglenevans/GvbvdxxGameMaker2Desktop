var debugconsole = {
	debugWindow: null,
	open:() => {
		var debugConsole = window.open("about:blank",20,20);
		debugConsole.document.body.style.background = "black";
		debugconsole.debugWindow = debugConsole;
		return debugConsole; //if they want the window.
	},
	log:(text) => {
		if (debugconsole.debugWindow) {
			var p = document.createElement("p");
			p.style.color = "white";
			p.innerHTML = text;
			var debugConsole = debugconsole.debugWindow;
			debugConsole.document.body.appendChild(p);
		}
	}
};
module.exports = debugconsole;