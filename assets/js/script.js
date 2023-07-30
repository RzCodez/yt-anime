import { gsap } from 'gsap';
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);


window.onload = () => {

    const black = document.querySelector(".black");
    black.style.display = "none";
    let tl = gsap.timeline();

    tl.to(".copyright", {
        duration: 1,
        text: {
            value: "ANIMECODE© 2023",
        }
    })
    tl.from(".img-container", {
        duration: 1.7,
        clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
        ease: "expo.inOut",
        
    })

    .from(".images", {
        duration: 1.7,
        transform: "translateX(-20%) scale(1.5)",
        ease: "expo.inOut",
    }, 1)


    .from(".picture", {
        duration: 3,
        "--opacity": 0,
        "--scale": 0,
        ease: "power1.inOut",
    }, 1.4)

    .from(".source", {
        duration: 1,
        x: 30,
        opacity: 0,
        ease: "expo.out",
    }, 2)

    .from(".wip", {
        duration: 1,
        x: -30,
        opacity: 0,
        ease: "expo.out",
        stagger: 0.2,
    }, 2)

    .from(".menu", {
        duration: 1,
        y: 10,
        opacity: 0,
        ease: "expo.out",
        stagger: 0.2,
    }, 2)


    
}