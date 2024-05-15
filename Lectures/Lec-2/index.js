
gsap.from(".page1 #box",{
    scale:0,
    duration:2,
    delay:1,
    rotate:360
})

// gsap.from(".page2 #box",{
//     scale:0,
//     duration:2,
//     delay:4,
//     rotate:360
// })

//Now problem with this code is that both animations are getting executed at exact time. So we are not able to see the page2 animation becuase it already got executed when we were on page1. If you are thining of adding delay then it can be a solution but it's not accurate. What if user watched our page1 for longer duration than we expected. In that case again animation will get executed. So we don't know how much time user is going to take to reach page2. Solution for this problem is scrollTrigger(GSAP). Animate with Scoll, Let's understand how ScrollTrigger Works...

gsap.from(".page2 #box",{
    scale:0,
    duration:2,
    delay:0.4,
    rotate:360,
    // scrollTrigger:".page2 #box" //basic
    scrollTrigger:{ //advance features
        trigger:".page2 #box",
        scroller:"body",
        markers:true,
        start:"top 60%", //moving markers
    },
})
