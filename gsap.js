let tl = gsap.timeline();
tl
.to("#blackScreen",{
    height: 0,
    duration: 2,
    ease: Expo.easeInOut
})
.to("#greenScreen",{
    height: "100%",
    delay: -2,
    duration: 2,
    ease: Expo.easeInOut
})
.to("#whiteScreen",{
    height: "100%",
    delay: -1.68,
    duration: 2,
    ease: Expo.easeInOut
})

