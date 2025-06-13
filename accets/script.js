document.querySelector('.side-nav-tog').addEventListener('click', () => {
    document.querySelector('.side-nav').style.right = 0
    document.querySelector('.mask').style.display = "block"
})


document.querySelector('.mask').addEventListener('click', () => {
    document.querySelector('.side-nav').style.right = "-100%"
    document.querySelector('.mask').style.display = "none"
})

document.querySelector('.side-nav-close').addEventListener('click', () => {
    document.querySelector('.side-nav').style.right = "-100%"
    document.querySelector('.mask').style.display = "none"
})
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