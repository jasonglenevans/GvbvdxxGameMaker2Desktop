window.variables = {
	vm:window.vm,
	/*newVarDiv: function (x,y,opts) {
		var divout = document.createElement("div");
		this.vars.push(divout);
		if (opts) {
			if (opts.dragable) {
				this.dragdiv(divout);
			}
		}
		var boundingRect = this.vm.renderer.canvas.getBoundingClientRect();
		divout.style.top = boundingRect.top+x+"px";
		divout.style.left = boundingRect.left+y+"px";
		divout.style.position = "fixed";
		var jsonDiv = {
			inside:divout,
			x:0,
			y:0
		};
		return jsonDiv;
	},
	vars: [],
dragdiv:function (elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (false) {
    // if present, the header is where you move the DIV from:
    elmnt.onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.body.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.body.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
	var boundingRect = window.variables.vm.renderer.canvas.getBoundingClientRect();
    // set the element's new position:
	if (boundingRect.top > (elmnt.offsetTop - pos2)) {
		elmnt.style.top = elmnt.offsetTop + boundingRect.top;
	}
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.body.onmouseup = null;
    document.body.onmousemove = null;
  }
}*/
};
