
const button = document.querySelector(".btn");
button.addEventListener ("click", reservation);
function reservation() {
document.location.assign("file:///Users/dariakukk/Desktop/Animation/Restaurant/reservation/reservation.html");
}



gsap.from(".foodOne", {x: -500, duration: 2.5, delay: 0.3, opacity:0, ease: "power2.inOut"});
gsap.from(".foodTwo", {y: -500, duration: 2.5, delay: 0.3, opacity:0, ease: "power2.inOut"});
gsap.from(".listMenu", {y: 500, duration: 2.5, delay: 0.3, opacity:0, ease: "power2.inOut"});
gsap.from (".btn", {duration: 2.5, delay: 0.3, opacity:0})

const listMenu = document.querySelector(".listMenu");
listMenu.addEventListener ("mouseover", startScale);
listMenu.addEventListener ("mouseout", endScale);

function startScale()  {
    gsap.to(".listMenu", {scale:1.2,duration:2, x:-60, y:-150})
}
function endScale()  {
    gsap.to(".listMenu", {scale:1, duration:2, x: 0, y:0})
}

