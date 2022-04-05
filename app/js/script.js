// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem("darkMode");
const Toggle = document.querySelector(".toggle");

const enableDarkMode = () => {
	// 1. Add the class to the body
	document.body.classList.add("dark_mode");
	// 2. Update darkMode in localStorage
	localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
	// 1. Remove the class from the body
	document.body.classList.remove("dark_mode");
	// 2. Update darkMode in localStorage
	localStorage.setItem("darkMode", null);
};

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === "enabled") {
	enableDarkMode();
}

// When someone clicks the button
Toggle.addEventListener("click", () => {
	// get their darkMode setting
	darkMode = localStorage.getItem("darkMode");

	// if it not current enabled, enable it
	if (darkMode !== "enabled") {
		enableDarkMode();
		// if it has been enabled, turn it off
	} else {
		disableDarkMode();
	}
});

// preloader
window.addEventListener("load", () => {
	const loader = document.querySelector(".preloader");

	loader.classList.add("preloader--hidden");

	loader.addEventListener("transitionend", () => {
		document.body.removeChild(preloader);
	});
});
