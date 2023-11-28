document.addEventListener("DOMContentLoaded", function () {
	const starsContainer = document.querySelector(".stars");

	for (let i = 0; i < 100; i++) {
		const star = document.createElement("div");
		star.className = "star";
		star.style.top = `${Math.random() * 100}vh`;
		star.style.left = `${Math.random() * 100}vw`;
		star.style.animationDuration = `${Math.random() * 3 + 2}s`; /* twinkle */
		star.style.animationDelay = `-${Math.random() * 2}s`;

		starsContainer.appendChild(star);
	}
});

function toggleMenu() {
	const menuBar = document.querySelector(".menu-bar");
	menuBar.classList.toggle("open");

	const dropdown = document.querySelector(".dropdown");
	dropdown.style.display = menuBar.classList.contains("open") ? "block" : "none";
}