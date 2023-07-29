import { gsap } from 'gsap';


window.onload = () => {
    gsap.from(".animate", {
        duration: 1,
        opacity: 0,
        y: 30,
        ease: "power3.out"
    })
    
}