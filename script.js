// Create petals dynamically with random sizes and animation delays
const hero = document.querySelector('.hero');

for (let i = 0; i < 30; i++) {
  const petal = document.createElement('div');
  petal.classList.add('petal');
  petal.style.left = `${Math.random() * 100}%`;
  petal.style.top = `${-30 - Math.random() * 100}px`;
  petal.style.animationDelay = `${Math.random() * 12}s`;
  petal.style.animationDuration = `${10 + Math.random() * 10}s`;
  const size = 20 + Math.random() * 15;
  petal.style.width = petal.style.height = `${size}px`;
  petal.style.opacity = 0.5 + Math.random() * 0.5;
  hero.appendChild(petal);
}

// Interactive petal sway effect based on mouse horizontal movement
document.addEventListener('mousemove', (e) => {
  const petals = document.querySelectorAll('.petal');
  const windowWidth = window.innerWidth;
  const mouseXPercent = e.clientX / windowWidth - 0.5; // -0.5 to 0.5

  petals.forEach((petal, i) => {
    // Each petal gets a sway offset based on mouseXPercent and petal index for variety
    const sway = mouseXPercent * 20 * (1 + (i % 3) * 0.5);
    petal.style.transform = `translateX(${sway}px) translateY(calc(var(--translateY, 0))) rotate(calc(var(--rotate, 0deg))) scale(calc(var(--scale, 1)))`;
  });
});
