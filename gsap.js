let tl2 = gsap.timeline()
tl2.to("#greenScreen",{
    height: "100%",
    duration: 1,
    ease: Expo.easeInOut
})
tl2.to("#whiteScreen",{
    height: "100%",
    delay: -0.65,
    duration: 1,
    ease: Expo.easeInOut
})
tl2.from(".reveal",{
    y: 200,
    delay: -0.10,
    duration: 1,
    ease: Expo.easeInOut
})
