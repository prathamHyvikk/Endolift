gsap.from(".banner-text", {
    y: 30,
    delay: 0.3,
    duration: 2,
    opacity: 0,
    stagger: 0.4
})

gsap.from('.banner-image, .Banner-btn', {
    x: 50,
    opacity: 0,
    duration: 2,
    delay: 0.3
})


// gsap.from('nav a', {
//     y: -30,
//     // delay: 1,
//     opacity: 0,
   
// })
// gsap.to("nav a", {
//   y: 0,
//   // delay: 1,
//   opacity: 1,

// });

gsap.fromTo(
  "nav a",
  {
    y: -30,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    ease: "power3.out",
  }
);
  


gsap.from(".count", {
    textContent: 0,
    duration: 5,
    snap: { textContent: 1 },
    scrollTrigger: {
        trigger: ".count",
        scroller: "body",
        // markers: true,
        start: "top 75%",
    },
})

gsap.utils.toArray(".FadeUp").forEach((element) => {
    gsap.from(element, {
        y: 30,
        duration: 1,
        delay: 0.2,
        opacity: 0,
        id: "example",
        stagger: 5,
        scrollTrigger: {
            trigger: element,
            scroller: "body",
            // markers: true,
            // start: "top 65%",
        },
    });
});