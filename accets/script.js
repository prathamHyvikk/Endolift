// document.querySelector('.side-nav-tog').addEventListener('click', () => {
//     document.querySelector('.side-nav').style.right = "0%"
//     document.querySelector('.mask').style.display = "block"
// })


// document.querySelector('.mask').addEventListener('click', () => {
//     document.querySelector('.side-nav').style.right = "-100%"
//     document.querySelector('.mask').style.display = "none"
// })

// document.querySelector('.side-nav-close').addEventListener('click', () => {
//     document.querySelector('.side-nav').style.right = "-100%"
//     document.querySelector('.mask').style.display = "none"
// })

document.querySelector(".side-nav-tog").addEventListener('click', () => {
  document.querySelector(".side-nav").style.right = 0;
   document.querySelector(".mask").style.display = "block";
})


document.querySelector('.mask').addEventListener('click', () => {
    document.querySelector('.side-nav').style.right = "-100%"
    document.querySelector('.mask').style.display = "none"
})

document.querySelector(".menu_close").addEventListener("click", () => {
  document.querySelector(".side-nav").style.right = "-100%";
   document.querySelector('.mask').style.display = "none"
});


// count user etc
document.addEventListener("DOMContentLoaded", function () {
  const statNumbers = document.querySelectorAll(".stat-number");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          statNumbers.forEach((stat) => {
            const target = parseInt(stat.getAttribute("data-count"));
            const duration = 1500;
            const start = 0;
            const increment = target / (duration / 16);

            let current = start;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                clearInterval(timer);
                current = target;
              }
              stat.textContent = Math.floor(current);
              stat.style.animation = "fadeIn 0.6s ease-out forwards";
            }, 16);
          });
          observer.disconnect();
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(document.querySelector(".premium-stats"));
});


// Before-after section
document.addEventListener("DOMContentLoaded", function () {
  // Initialize all sliders
  const containers = document.querySelectorAll(".image-container");

  containers.forEach((container) => {
    const slider = container.querySelector(".slider");

    // Set initial position
    container.style.setProperty("--position", "50%");

    // Add input event listener
    slider.addEventListener("input", (e) => {
      const position = `${e.target.value}%`;
      container.style.setProperty("--position", position);
    });

    // Add touch support for mobile
    slider.addEventListener("touchmove", (e) => {
      const position = `${e.target.value}%`;
      container.style.setProperty("--position", position);
    });
  });
});


// Fetured marqee
class LogosMarquee {
  constructor({
    containerSelector = ".marquee__ctn",
    trackSelector = ".marquee__track",
    speed = 60, // pixels per second
  } = {}) {
    this.container = document.querySelector(containerSelector);
    this.track = document.querySelector(trackSelector);
    this.speed = speed;

    if (!this.container || !this.track) {
      console.warn("Marquee: éléments introuvables.");
      return;
    }

    this.trackWidth = this.track.getBoundingClientRect().width;
    this.pos = 0;
    this.start = null;
    this.rafId = null;

    this.setup();
    this.animate = this.animate.bind(this); // Bind pour requestAnimationFrame
    requestAnimationFrame(this.animate);
  }

  setup() {
    // Étendre la largeur du container
    this.container.style.width = `${this.trackWidth}px`;

    // Dupliquer le contenu pour boucler visuellement
    this.clone = this.track.cloneNode(true);
    this.container.appendChild(this.clone);

    // Optimisation mobile
    this.container.style.willChange = "transform";
  }

  animate(timestamp) {
    if (!this.start) this.start = timestamp;

    const elapsed = timestamp - this.start;
    this.pos = -(elapsed / 1000) * this.speed;

    if (Math.abs(this.pos) >= this.trackWidth) {
      this.start = timestamp;
      this.pos = 0;
    }

    this.container.style.transform = `translateX(${this.pos}px)`;

    this.rafId = requestAnimationFrame(this.animate);
  }

  destroy() {
    cancelAnimationFrame(this.rafId);
    if (this.clone) this.clone.remove();
    this.container.style.transform = "";
    this.container.style.willChange = "";
  }
}

window.addEventListener("load", () => {
  const marquee = new LogosMarquee({
    containerSelector: ".marquee__ctn",
    trackSelector: ".marquee__track",
    speed: 80,
  });

  // Si besoin, tu peux le détruire plus tard :
  // marquee.destroy();
});
