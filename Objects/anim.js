const letters = document.querySelectorAll('.boc span');
const ligne = document.querySelector('.line');

const Tletters = gsap.timeline();

Tletters
.from(ligne, {width: '0%', opacity: 0, duration: 3, ease: "power1.in"})
.from(letters, {opacity: 0, top: gsap.utils.wrap([100,-100]), stagger: 0.1, ease: "power2.out"})
.set(ligne, {width: '85vw'})