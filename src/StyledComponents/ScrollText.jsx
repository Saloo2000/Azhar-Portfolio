import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

function Box({ children, timeline, index }) {
    const el = useRef();
    
    useGSAP(() => {
      // add 'left 100px' animation to timeline
      timeline && timeline.to(el.current, { 
        x: -100 
      }, index * 0.1);
      
    }, [timeline, index]);
  
    return <div className="box" ref={el}>{children}</div>;
  }
  



  function Circle({ children, timeline, index, rotation }) {
    const el = useRef();
  
    useGSAP(() => {
      // add 'right 100px, rotate 360deg' animation to timeline
      timeline && timeline.to(el.current, { 
        rotation: rotation, 
        x: 100 
      }, index * 0.1);
      
    }, [timeline, rotation, index]);
  
    return <div className="circle" ref={el}>{children}</div>;
  }
  

  function Salman() {
    const [tl, setTl] = useState();
  
    useGSAP(() => {
      const tl = gsap.timeline();
      setTl(tl);
    });
  
    return (
        <div className="app">
          <Box timeline={tl} index={0}>Box</Box>
          <Circle timeline={tl} rotation={360} index={1}>Circle</Circle>
        </div>
    );
  }


  export default Salman