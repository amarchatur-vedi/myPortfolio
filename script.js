function sliderClose(){
	document.querySelector(".navigationMenu").style.marginLeft = "-200%";
	document.querySelector("#navbarToggleButton").checked = false;
}

function sliderOpen(){
	if(document.querySelector(".navigationMenu").style.marginLeft === "-200%"){
		document.querySelector(".navigationMenu").style.marginLeft = "0px";
	}
	else if(document.querySelector(".navigationMenu").style.marginLeft === "0px"){
		document.querySelector(".navigationMenu").style.marginLeft = "-200%";
	}
}
