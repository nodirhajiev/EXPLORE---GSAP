var btn = document.querySelector('a');

btn.addEventListener('click', function () {
    let tl = gsap.timeline();
        tl.to('a', 1, {
            y: "-100%",
            opacity: 0,
            ease: "Expo.easeIn"
        })
        tl.to('.bg_text',1.5, {
            delay: 1.5,
            y: "-100%",
            ease: "Expo.easeIn"
        })
        tl.to('.layer_blue',1, {
            y: "-100%",
            ease: "Expo.easeInOut"
        },"-=0.2")
        tl.to('.layer_white',1, {
            y: "-200%",
            ease: "Expo.easeInOut"
        },"-=0.9")
        tl.to('.layer_white h1, p',2, {
            delay: 1.5,
            stagger: 0.3,
            opacity: 1,
            ease: "Expo.easeInOut"
        },"-=1.8")
    

})