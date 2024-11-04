import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function useSpiliteText(element, container) {
  useGSAP(
    () => {

      gsap.registerEffect({
        name:"myAnimation",
        effects:(target,config)=>{
          return gsap.to(target,{duration:config,x:100,scale:1})
        }
      })

      const tl = gsap.timeline({
        defaults: {
          duration: 1,
          ease: "power4.inOut",
        },
        // paused:true,
        onComplete:()=>{
          console.log("okokokoko");
          
        }
      });

      tl.from(element, {
        opacity: 0,
        y: "random(100%,-100%,10)",
        stagger: {
          each: 0.1,
        },
      });

      tl.from(
        "img",
        {
          x: "100%",
          duration: 4,
          ease: "power4.inOut",
        },
        "<"
      );
    
    // tl.resume()
    },
    { revertOnUpdate: true, scope: container }
  );
}
