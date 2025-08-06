const canvas = document.getElementById('fireworks-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let fireworks = [];
let particles = [];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function Firework() {
  this.x = random(canvas.width * 0.2, canvas.width * 0.8);
  this.y = canvas.height;
  this.targetY = random(canvas.height * 0.2, canvas.height * 0.5);
  this.speed = random(3, 6);
  this.color = `hsl(${Math.floor(random(0, 360))},100%,50%)`;
}

function Particle(x, y, color) {
  this.x = x;
  this.y = y;
  this.speedX = random(-3, 3);
  this.speedY = random(-3, 3);
  this.gravity = 0.05;
  this.alpha = 1;
  this.color = color;
}

function createParticles(x, y, color) {
  for (let i = 0; i < 30; i++) {
    particles.push(new Particle(x, y, color));
  }
}

function animate() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  fireworks.forEach((f, i) => {
    ctx.beginPath();
    ctx.arc(f.x, f.y, 3, 0, Math.PI * 2);
    ctx.fillStyle = f.color;
    ctx.fill();

    f.y -= f.speed;

    if (f.y <= f.targetY) {
      createParticles(f.x, f.y, f.color);
      fireworks.splice(i, 1);
    }
  });

  particles.forEach((p, i) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.globalAlpha = p.alpha;
    ctx.fill();
    ctx.globalAlpha = 1;

    p.x += p.speedX;
    p.y += p.speedY + p.gravity;
    p.alpha -= 0.02;

    if (p.alpha <= 0) {
      particles.splice(i, 1);
    }
  });

  requestAnimationFrame(animat
