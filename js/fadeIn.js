const animateFade = (entries, obs) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.animate(
				{
					opacity: [0, 1],
					filter: ['blur(1rem)', 'blur(0)'],
					translate: ['0 50px', 0],
				},
				{
					duration: 800,
					delay: 150,
					easing: 'ease-out',
					fill: 'forwards',
				}
			);
			obs.unobserve(entry.target);
		}
	});
};

const options = {
	threshold: 0,
};

const fadeObserver = new IntersectionObserver(animateFade, options);
const fadeObserverSP = new IntersectionObserver(animateFade);

const fadeElements = document.querySelectorAll('.fadein');
fadeElements.forEach((fadeElement) => {
	fadeObserver.observe(fadeElement);
});
const fadeElementsSP = document.querySelectorAll('.fadein._sp-top');
fadeElementsSP.forEach((fadeElementSP) => {
	fadeObserverSP.observe(fadeElementSP);
});