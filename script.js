Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hover-media", {videos: ["/web.mp4", "/web2.mp4"]} 

);




gsap.to("#fleftelm", {
    scrollTrigger: {
        trigger: "#fimages",
        pin: true,
        start: "top top",
        end: "bottom bottom",
        endTrigger: ".last",
        scrub: 1,
    },
    y: "-300%",
    ease: Power1
})

Shery.imageEffect(".images", {
    style: 5,
    slideStyle: (setScroll) => {
        selections.forEach(function (section) {
            // Assuming `setScroll` is a function that needs to be called for each section
            ScrollTrigger.create({
                trigger: section,       // Trigger on each section
                start: "top top",       // Scroll start
                scrub: 1,               // Smooth scrolling
                onUpdate: function (prog) {
                    console.log(prog);   // Log progress on update
                }
            });
        });
    },
});






const names = ["Maja", "Kaja", "Luka", "Nina", "Eva", "Jan", "Ana"];

names.forEach(function(value){
    console.log(value);
});