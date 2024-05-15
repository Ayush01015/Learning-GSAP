function Animate(){
    //move from initial to final position
gsap.to("#box1",{
    x:1000,
    duration:5,
    delay:1,
    rotate:360,
    backgroundColor:"#DC143C",
    borderRadius:"50%",
    scale:0.4,
    // stagger:0.3,
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
    // color:"red",
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
    // stagger:0.3,
    repeat:-1,
    yoyo:true, //returns back in same direction   
})
}

Animate();