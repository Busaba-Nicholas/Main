//footerOffset = 260;
font = 1;
//game = 1;

/*document.getElementById('gamePause').addEventListener("click", () => {
	if (game == 0) {
    document.getElementById("unityContainer").style.setProperty('visibility', 'hidden');
    game = 1;
  } else {
    document.getElementById("unityContainer").style.setProperty('visibility', 'visible');
    game = 0;
  }
});*/

document.getElementById('fontBox').addEventListener("click", () => {
	if (font == 0) {
    document.documentElement.style.setProperty('--Font', 'Times new Roman');
    font = 1;
  } else {
    document.documentElement.style.setProperty('--Font', 'Binary');
    font = 0;
  }
});

document.getElementById('fotter').addEventListener("click", () => {
	window.scrollTo(0,0)
});

/*function footerplacement() {
  if (document.documentElement.clientHeight > document.body.clientHeight + footerOffset) {
    footerOffset = 260;
    //document.getElementById("fot").style.position = 'fixed';
    document.documentElement.style.setProperty('--Fotter-position', 'fixed');
  } else {
    footerOffset = 0;
    //document.getElementById("fot").style.position = 'relative';
    document.documentElement.style.setProperty('--Fotter-position', 'relative');
  }
}

footerplacement();
window.addEventListener("resize", footerplacement);*/