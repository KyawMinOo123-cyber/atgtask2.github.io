
const dom = (className) => {
   return document.querySelector(className)
}

const container = dom(".wrapContainer")

gsap.registerPlugin(ScrollTrigger);


const sections = gsap.utils.toArray('.wrapContainer section')

 const scrollTween = gsap.to(sections,{
    xPercent:-100 * (sections.length - 1),
    ease:"none",
    scrollTrigger:{
        trigger:".wrapContainer",
        pin:true,
        scrub:1,
        end: "+=3000"
    }
})



gsap.from(".left-img-one",{
    y:50,
    opacity:0,
    duration:1,
})
gsap.from(".right-img-one",{
    y:50,
    opacity:0,
    duration:1,
})


 gsap.from(".container-first-element",{
     y:50,
     opacity:0,
     duration:1,
 })


gsap.to(".container-first-element",{
    y:-200,
    duration:1,
    scrollTrigger:{
        trigger:".left-img-one",
        start:"right center",
        scrub:1,
    }
})
gsap.to(".container-second-element",{
    y:-200,
    duration:1,
    opacity:1,
   
    scrollTrigger:{
        trigger:".left-img-one",
        start:"right center",

       toggleActions:"play reverse play reverse",
    }
})

gsap.to(".container-third-element",{
    y:-430,
    duration:1,
    opacity:1,
    scrollTrigger:{
        trigger:".left-img-three",
        start:"right center",
        toggleActions:"reverse restart reverse none",
        onLeave:()=>{
            document.querySelector('.transrgwht').style=`stroke-dasharray: 280, 1000;`
            document.querySelector('.dotsstro3').style = `fill: rgb(8, 210, 255); stroke: fill: rgb(255, 255, 255);`
            document.querySelector('.circle').style = `background-color:rgb(13, 13, 59);`
        },
        onEnterBack:()=>{
            document.querySelector('.transrgwht').style=`stroke-dasharray: 130, 1000;`
            document.querySelector('.dotsstro3').style = `fill: none; stroke: fill: rgb(255, 255, 255,0.5);`
            document.querySelector('.circle').style = `background-color:blue;`
        }
    }
})

document.querySelector(".dotOne").style = ` background-color:lightgreen;`
let num = 0;
container.addEventListener('wheel',(e)=>{
    num += e.deltaY
    if(num <= 300){
        document.querySelector(".dotOne").style = ` background-color:lightgreen; `
        document.querySelector(".dotTwo").style = `background:none; `
    }
    if( num >= 300 && num <= 600){
        document.querySelector(".dotOne").style = `background:none;`
        document.querySelector(".dotTwo").style = ` background-color:lightgreen; `
    }
    if(num >=700 && num <=1000){
        document.querySelector(".dotTwo").style = `background:none; `
        document.querySelector(".dotThree").style = ` background-color:lightgreen; `
    }
    if(num > 500 && num < 700)
    {
        document.querySelector(".dotThree").style = `background:none;`
    }
    if(num >= 1200 && num<= 1500){
        document.querySelector(".dotFour").style = ` background-color:lightgreen; `
        document.querySelector(".dotThree").style = `background:none;`
    }
    if(num < 1300){
        document.querySelector(".dotFour").style = `background:none;`
    }
    if(num >= 1600 && num <= 2000){
        document.querySelector(".dotFour").style = `background:none;`
        document.querySelector(".dotFive").style = ` background-color:lightgreen; `
    }
    if(num < 1900) {
        document.querySelector(".dotFive").style = `background:none;`
    }
    if(num >= 2200 && num <= 2500){
        document.querySelector(".dotFive").style = `background:none;`
        document.querySelector(".dotSix").style = ` background-color:lightgreen; `
    }
    if(num < 2300){
        document.querySelector(".dotSix").style = `background:none;`
    }
    if(num >= 2600  && num <= 3000){
        document.querySelector(".dotSix").style = `background:none;`
        document.querySelector(".dotSeven").style = ` background-color:lightgreen; `
    }
    if(num < 2800){
        document.querySelector(".dotSeven").style = `background:none; `
    }
    if(num <= 0)  num = 0;
    if(num >= 3000) num = 3000;
    console.log(num)
    
    if(num > 1000 && num <= 1600){
        gsap.to(".leftFour",{
            opacity:1,
        })
        gsap.to(".rightFour",{
            opacity:1,
        })
        gsap.to(".container-third-element",{
            y:-400,
            duration:1,
            opacity:0,
        })
        gsap.to(".container-four-element",{
            y:-630,
            opacity:1,
            duration:1
        })
        gsap.to(".left-img-four",{
            y:50,
            duration:3,
        })
        gsap.to(".right-img-four",{
            y:-50,
            duration:3,
        })
        document.querySelector('.circle').style = `background-color:rgb(37, 47, 65);`
        document.querySelector('.transrgwht').style=`stroke-dasharray: 420, 1000;`
        document.querySelector('.dotsstro4').style = `fill: rgb(8, 210, 255); stroke: fill: rgb(255, 255, 255);`

    }else if(num <= 1200 && num >= 700){
        gsap.to(".container-third-element",{
            //y:400,
            duration:1,
            opacity:1,
        })
        gsap.to(".container-four-element",{
            y:630,
            opacity:0,
            duration:1
        })
        document.querySelector('.circle').style = `background-color:rgb(13, 13, 59);`
        document.querySelector('.transrgwht').style=`stroke-dasharray: 280, 1000;`
        document.querySelector('.dotsstro4').style = `fill: none; stroke: fill: rgb(255, 255, 255,0.5);`
    }
    else if(num >= 1600)
    {
        gsap.to(".leftFour",{
            opacity:0,
        })
        gsap.to(".rightFour",{
            opacity:0,
        })
    }
    if(num >= 1900 && num <= 2000){
        gsap.to(".leftFive",{
            opacity:1,
            duration:0.5
        })
        gsap.to(".rightFive",{
            opacity:1,
            duration:0.5
        })
        gsap.to(".container-five-element",{
            y:-830,
            opacity:1,
            duration:1,
        })
        gsap.to(".left-img-five",{
            y:50,
            duration:3,
        })
        gsap.to(".right-img-five",{
            y:-50,
            duration:3,
        })
        document.querySelector('.circle').style = `background-color:rgb(6, 99, 175);`
        document.querySelector('.transrgwht').style=`stroke-dasharray: 540, 1000;`
        document.querySelector('.dotsstro5').style = `fill: rgb(8, 210, 255); stroke: fill: rgb(255, 255, 255);`
    }
    if(num < 1900){
        document.querySelector('.dotsstro5').style = `fill:none; stroke: fill: rgb(255, 255, 255);`
        gsap.to(".container-five-element",{
            y:100,
            opacity:0,
            duration:1,
        })
    }
    if(num > 1700){
        gsap.to(".container-four-element",{
            y:-550,
            opacity:0,
            duration:1,
        })
    }
    if(num < 1000 && num > 500){
        document.querySelector('.circle').style = `background-color:blue;`
    }

    if(num >= 2200 && num <=2500){
        gsap.to(".leftSix",{
            opacity:1,
            duration:0.5,
        })
        gsap.to(".rightSix",{
            opacity:1,
            duration:0.5,
        })
        gsap.to(".container-six-element",{
            y:-1050,
            opacity:1,
            duration:1
        })
        document.querySelector('.circle').style = ` background-color:darkblue;`
        document.querySelector('.transrgwht').style=`stroke-dasharray: 680, 1000;`
        document.querySelector('.dotsstro6').style = `fill: rgb(8, 210, 255); stroke: fill: rgb(255, 255, 255);`
    }
    if(num <= 2400){
        document.querySelector('.dotsstro6').style = `fill:none; stroke: fill: rgb(255, 255, 255);`
        gsap.to(".container-six-element",{
            y:100,
            opacity:0,
            duration:1,
        })
    }
    if(num > 2200){
        gsap.to(".container-five-element",{
            y:-500,
            opacity:0,
            duration:1,
        })
    }
    if(num > 2600){
        gsap.to(".container-six-element",{
            y:-500,
            opacity:0,
            duration:1,
        })
    }
    if(num >= 2600 && num <= 3000){
        gsap.to(".leftSeven",{
            opacity:1,
            duration:1,
        })
        gsap.to(".rightSeven",{
            opacity:1,
            duration:1,
        })
        gsap.to(".container-seven-element",{
            y:-1200,
            opacity:1,
            duration:1,
        })
        gsap.to(".awardSeven",{
            x:50,
            duration:3,
        })
        gsap.to(".right-img-seven",{
            y:50,
            duration:3,
        })
        gsap.to(".sevenImgOne",{
            y:-50,
            duration:3,
        })
        document.querySelector(".circle").style = `background-color:rgb(81, 157, 81);`
        document.querySelector('.transrgwht').style=`stroke-dasharray: 820, 1000;`
        document.querySelector('.dotsstro7').style = `fill: rgb(8, 210, 255); stroke: fill: rgb(255, 255, 255);`
    }
    if(num < 2900){
        document.querySelector('.dotsstro7').style = `fill: none; stroke: fill: rgb(255, 255, 255);`
        gsap.to(".container-seven-element",{
            y:100,
            opacity:0,
            duration:1,
        })
    }

})

gsap.to(".left-img-one",{
    y:1100,
    duration:1,
    scrollTrigger:{
        trigger:".left-img-one",
        scrub:1,
        start:"right center",
        toggleActions:"play none reverse reverse",
        onEnter:()=>{ 
            document.querySelector('.transrgwht').style=`stroke-dasharray: 130, 1000;`
            document.querySelector('.dotsstro2').style = `fill: rgb(8, 210, 255); stroke: fill: rgb(255, 255, 255);`     
    },
        onLeaveBack:()=>{ 
            document.querySelector('.transrgwht').style=`stroke-dasharray: 0, 1000;`
            document.querySelector('.dotsstro2').style = `  fill: none;  stroke: rgb(255, 255, 255,0.5);`     
    },        
    },
})
gsap.to(".right-img-one",{
    y:1100,
    duration:1,
    scrollTrigger:{
        trigger:".left-img-one",
        scrub:1,
        start:"right center",
    }
})


gsap.to(".secondOne",{
    y:1100,
    duration:2,
    scrollTrigger:{
        trigger:".left-img-one",
        scrub:1,
        start:"right center",
    }
})

gsap.to(".award",{
    y:-1100,
    duration:2,
    scrollTrigger:{
        trigger:".left-img-one",
        scrub:1,
        start:"right center",
    }
})

// //   style="fill:none; stroke: rgb(255, 255, 255); stroke-width: 2; stroke-miterlimit: 10; stroke-dasharray: 0, 1000;"
// //   const path = document.querySelector('.transrgwht').style=`stroke-dasharray: 130, 1000;`




gsap.from(".right-img",{ 
    y:-300,
    opacity:0,
    duration:1.5,
    scrollTrigger:{
        trigger:".left-img",
        start:"left center",
        toggleActions:"restart reverse restart reverse",
        onEnter:()=>{ document.querySelector(".leftTwo").style = `opacity:1;`
                        document.querySelector('.rightTwo').style = `opacity:1;`
                        document.querySelector('.circle').style = `background-color:blue;`
                    },
        onLeaveBack:()=>{
            document.querySelector(".leftTwo").style = `opacity:0;`
            document.querySelector(".rightTwo").style = `opacity:0;`
            document.querySelector('.circle').style = `background-color: rgb(98, 0, 150);`
        },
    }
})

gsap.from(".left-img",{
    y:0,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".two",
        start:"left center",
        toggleActions:"restart reverse restart reverse",
    }
})


gsap.to(".right-img-three",{
    y:110,
    duration:1.5,
    scrollTrigger:{
        trigger:".left-img-three",
        start:"right left",
        end:"bottom top",
        toggleActions:"play restart none none",
        onEnter:()=>{
            document.querySelector(".leftThree").style =` opacity:1;`
            document.querySelector(".rightThree").style =` opacity:1;`
        },
        onEnterBack:()=>{
            document.querySelector('.leftThree').style =` opacity:0;`
            document.querySelector(".rightThree").style =` opacity:0;`
        }
    }
})

gsap.to(".left-img-three",{
    y:50,
    duration:1.5,
    scrollTirgger:{
        trigger:".left-img-four",
        start:"right center",
    }
})
