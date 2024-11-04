import { useRef, useState } from "react"
import Sclupt from "./Sclupt"
import ScrollImages from "./ScrollImages"
import ScrollIndictor from "./ScrollIndictor"
// import ScrollText from './ScrollText'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
// import Shery from "sheryjs"



const headtText=[
  {
   num:"01",
   productName:"Digital 3D Clock",
   softwear:"3Ds Max 2024",
   description:"Lets Bring Your Thoughts To The Table Always.",
   btn:{
    contBtn:"Contact",
    portfolio:"Check Behance"
   }
  },
  {
    num:"02",
    productName:"Premium Microphones",
    softwear:"Plastic City",
    description:"Take Deep Look With Us 3D Meta World.",
    btn:{
      contBtn:"About Me",
      portfolio:"Check Facebook"
     }
   },

]


function Gallery() { 
  const [textIndictor,setTextIndicator] = useState(headtText[0])
  gsap.registerPlugin(ScrollTrigger)
  const galleryAnim=useRef()

  const handleIndicaor = () => {
    const tl=gsap.timeline()

    tl.to(".h2-cov",{width:0,duration:.5,ease:"power2.In"})
    .to(".h3-cov",{width:0,duration:.5,ease:"power2.In"},"-=0.30")
    .to(".indicate div", {y:"35px" , duration:1},"-=0.5")
    .to(".desc-cov h2",{y:"100px" , duration:.5,ease:"power4", stagger:{
      amount:.1,
      each:0.5
    }},"<")
    .to(".btn-container .btn",{y:"150px" ,ease:"power4.In", duration:.5, stagger:.1 },"-=.8")
    .add(()=>{  
      setTextIndicator((en)=> en === headtText[0] ? headtText[1]: headtText[0])  })
    .to(".h2-cov",{width:"100%",duration:.5,opacity:1,ease:"power2.Out"})
    .to(".h3-cov",{width:"100%",duration:.5,opacity:1,ease:"power2.Out"},"-=0.30")
    .to(".btn-container .btn",{y:"0px" ,ease:"power4.In", duration:.5, stagger:.1 },"-=.8")
    .to(".desc-cov h2",{y:"0" , duration:1,ease:"power4", stagger:{
      amount:.1,
      each:0.1
    }},"-=.5")
      
  }

  useGSAP(()=>{
    const cx =gsap.context(()=>{
      gsap.to(".pr1 .sal", {x:"100%",ease:"power2.out",duration:1.5,scrollTrigger:{
        trigger: ".pr1",
        // markers: true,
        start:"10% 50%",
        end:"100% 50%",
        onLeave:()=>{ 
         handleIndicaor()
        },
        
        onEnterBack:()=>{
          handleIndicaor()
          gsap.to(".indicate div", {y:-1 , duration:.4},"-=0.50")
          
        },
        
      }})

     
    },)
    return () => cx.revert();
  
  })

  return (
   <div ref={galleryAnim}>
    <Sclupt/>
   
    <div className="flex justify-center items-start">

    <div className="sticky top-0 w-2/4">
    <ScrollIndictor textIndictor={textIndictor}/>
    
    </div>

    <div>
    <ScrollImages/>
    </div>

   </div>
   </div>
  )
}

export default Gallery