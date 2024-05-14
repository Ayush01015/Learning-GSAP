//move from initial to final position
gsap.to("#box1",{
    x:1000,
    duration:2,
    delay:1,
    rotate:360,
    backgroundColor:"#DC143C"
})

//move from final to final initial
gsap.from("#box2",{
    x:1000,
    duration:2,
    delay:1,
    rotate:360,
    backgroundColor:"#DC143C"
})