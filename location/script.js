gsap.from(".imgOne", {x: 200, duration: 2.5, delay: 0.3, opacity:0, ease: "power2.inOut"});
gsap.from(".imgTwo", {x: -200, duration: 2.5, delay: 0.3, opacity:0, ease: "power2.inOut"});

gsap.to (".one",{
    text: "Our spacious windows and beautiful surroundings with a view of the sea create an unforgettable and romantic atmosphere for any special occasion, appointment, or business meeting.",
    duration: 6,
    delay:1,
    ease: "power1.in",  
}
)
gsap.from (".two", {opacity:0, duration: 2.5, delay: 2, ease: "power1.in", delay:3 })