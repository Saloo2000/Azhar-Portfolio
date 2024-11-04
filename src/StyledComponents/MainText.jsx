import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react"

// const arr=["","VISULIZATION","EXTREM","SKILLS"]


function MainText() {
  const mainText = useRef();
  // gsap.registerPlugin(ScrollTrigger)
  // useGSAP(()=>{
  //   // const tl=gsap.timeline()

  //   // gsap.to(".sal-1", {x:"-300px" ,duration:1,ease:"power3.inOut",
  //   //   scrollTrigger:{
  //   //     markers: true,
  //   //     // pin:true,
  //   //     trigger:".sal-1",
  //   //     scrub:true,
  //   //     pin:true,
  //   //     start:"center center",}
  //   //   })

  //   gsap.from(".main-text h2", {duration:1,
  //     scrollTrigger:{
  //       markers: true,
  //       // pin:true,
  //       trigger:".main-text",
  //       // scrub:true,
  //       // start:"center center",
  //       pin:true
  //     }
  //     })

  //   gsap.from(".main-text1 h2", {duration:1,
  //     scrollTrigger:{
  //       markers: true,
  //       // pin:true,
  //       trigger:".main-text1",
  //       // scrub:true,
  //       start:"center center",
  //       pin:true
  //     }
  //     })

     
  // },mainText)
  return (
    <div className="my-[16vw] overflow-hidden" ref={mainText}>
      <div className="sal-1">

<div className="main-text"> <h2 className="text-9xl font-black italic text-center">ENHANCE</h2> </div>
<div className="main-text1"> <h2 className="text-9xl font-black italic text-center">VISULIZATION</h2> </div>
<div className="main-text2"> <h2 className="text-9xl font-black italic text-center">EXTREM</h2> </div>
<div className="main-text3"> <h2 className="text-9xl font-black italic text-center">SKILLS</h2> </div>
      </div>
    </div>
  )
}

export default MainText