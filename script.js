var crsr=document.querySelector("#cursor")
var blur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"


})
document.addEventListener("mousemove",function(dets){
    blur.style.left=dets.x-250+"px"
    blur.style.top=dets.y-250+"px"


})




gsap.to("#nav",{
    backgroundColor:"#000",
    height:"90px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -15%",
        end:"top -16%",
        scrub:2
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -20%",
        end:"top -100%",
        scrub:2
       
    }
})