const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');

hamburger.addEventListener('click', () => {
	menu.classList.toggle('close');
	hamburger.classList.toggle('x');
	overlay.classList.toggle('overlay-hidden');
});
