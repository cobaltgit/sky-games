function pressLeft() {
	menus[menu].left();
}
function pressRight() {
	menus[menu].right();
}
function pressUp() {
	menus[menu].up();
}
function pressDown() {
	menus[menu].down();
}


function pressRed() {
	let controls = document.getElementById("controls");
	controls.style.display = controls.style.display ? null : "none";
}



function pressBlue() {
	window.location = "/sky-games";
}



Array.from(document.getElementsByClassName("game")).forEach(g => {


	g.addEventListener("click", e => {
		e.preventDefault();

		loadingGame = {
			splash: splash(image_prefix + (g.dataset.splash || g.dataset.image)),
			timeout: setTimeout(() => {
				window.location.href = g.dataset.portal||g.dataset.url;
			}, 5000)
		};
	});
});



SkyRemote.createSkyRemote({
	pressRed, pressGreen, pressYellow, pressBack, pressBlue, pressSelect, pressLeft, pressRight, pressUp, pressDown
});


window.addEventListener("click", () => {
	if (!musicplayed) toggleMusic();
});


document.addEventListener("keyup", event => {
	if (!musicplayed) toggleMusic();
});
