function AnimatePage1(){
//move from initial to final position
gsap.to("#box1",{
    x:1000,
    duration:5,
    delay:1,
    rotate:360,
    backgroundColor:"#DC143C",
    borderRadius:"50%",
    scale:0.4,
    repeat:-1,
    yoyo:true,
    
})

//move from final to final initial
gsap.from("#box2",{
    x:1000,
    duration:5,
    delay:1,
    rotate:360,
    backgroundColor:"#DC143C",
    borderRadius:"50%",
    scale:0.8,
    repeat:-1,
    yoyo:true,
})


gsap.from("h3",{
    duration:1,
    delay:1,
    opacity:0,
    stagger:-1,
})

gsap.from("#box3",{
    x:-1000,
    duration:5,
    delay:1,
    rotate:360,
    backgroundColor:"#DC143C",
    borderRadius:"50%",
    scale:0.8,
    repeat:-1,
    yoyo:true,
})

gsap.to("#box4",{
    x:-1000,
    duration:5,
    delay:1,
    rotate:360,
    backgroundColor:"#DC143C",
    borderRadius:"50%",
    scale:0.4,
    repeat:-1,
    yoyo:true, //returns back in same direction   
})
}

function AnimatePage2(){
    const timeline = gsap.timeline();

    timeline.from("nav a h2",{
        opacity:0,
        duration:0.3,
        delay:0.5,
        y:-20,
    })

    timeline.from("h4",{
        opacity:0,
        duration:1,
        y:-20,
        stagger:0.3,
    })

    timeline.from(".timeline",{
        opacity:0,
        scale:0,
        duration:0.7,
        delay:0.1,
    })
}

AnimatePage1();
AnimatePage2();