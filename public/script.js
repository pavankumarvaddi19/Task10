// Wait for page to load
document.addEventListener("DOMContentLoaded", () => {
    // Animate Typography
    gsap.to(".animated-text", { duration: 1, opacity: 1, y: 0, ease: "power2.out" });
    gsap.to(".subtext", { duration: 1.5, opacity: 1, delay: 0.5 });
    gsap.to(".geometric", { duration: 2, opacity: 1, x: 200, y: 100, rotation: 360, delay: 1 });

    // Parallax Effect
    window.addEventListener("scroll", () => {
        let scrollPos = window.scrollY;
        gsap.to(".scroll-text", { opacity: 1, y: scrollPos * 0.5 });
    });
});
