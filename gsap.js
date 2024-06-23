const revealToSpan = () => {
  document.querySelectorAll(".reveal")
    .forEach((elem) => {
      let parentSpan = document.createElement("span");
      let childSpan = document.createElement("span");
      parentSpan.classList.add("parent");
      childSpan.classList.add("child");
      childSpan.innerHTML = elem.innerHTML;
      elem.innerHTML = "";
      parentSpan.appendChild(childSpan);
      elem.appendChild(parentSpan);
    });
};
revealToSpan();
var tl = gsap.timeline();
tl.to(".child span", {
  x: "-2%",
  stagger: 0.1,
  duration: 0.5,
  delay: 0.2,
});
tl.to(".parent .child", {
  y: "-100%",
  duration: 0.80,
  delay: 1,
  ease: Circ.easeInOut,
});
tl.to("#loader", {
  height: 0,
  duration: 1,
  ease: Expo.easeInOut,
})
  tl.to("#green", {
    height: 0,
    delay: -.3,
    duration: 1,
  });
  tl.to("#row #h1 h1",{
    opacity: 100,
    duration: 5,
    stagger: 0.2
})
