// close the logo menu on an outside click or the escape key
var menu = document.getElementById("menu");

document.addEventListener("click", function (e) {
	if (!menu.contains(e.target)) {
		menu.open = false;
	}
});

document.addEventListener("keydown", function (e) {
	if (e.key === "Escape") {
		menu.open = false;
	}
});
