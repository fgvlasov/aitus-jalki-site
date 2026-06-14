document.addEventListener('DOMContentLoaded', () => {
	if (!document.querySelector('.gallery-photos')) return;
	GLightbox({
		selector: '.gallery-photos a',
		touchNavigation: true,
		loop: true,
		keyboardNavigation: true,
		closeButton: true
	});
});
