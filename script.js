
gsap.from("#imgOne", {zIndex:-1, y: -1000, opacity: 0, duration: 2.5, delay: 0.3, ease: "power2.inOut"});
gsap.from("#imgTwo", {zIndex:-1, y: 1000, opacity: 0, duration: 2.5, delay: 0.3, ease: "power2.inOut"});

gsap.from("h1", {duration: 2, delay: 1, opacity:0, rotate: 360});
gsap.from(".link", {duration: 3, delay: 1, opacity:0, stagger:.7});