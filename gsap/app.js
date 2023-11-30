var tl = gsap.timeline();
tl.from("h4", {
  y: -50,
  duration: 1,
  delay: 0.3,
  opacity: 0,
  stagger: 0.3,
});

tl.from("h1", {
  x: -500,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
});

tl.from("img", {
  x: 100,
  rotate: 45,
  opacity: 0.5,
  duration: 0.5,
  stagger: 0.5,
});
