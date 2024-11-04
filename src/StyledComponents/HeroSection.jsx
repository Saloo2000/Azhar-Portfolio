import { useRef } from "react";
import HeadingText from "./HeadingText";
import photo1 from "/banner.jpg"

const heroText = ["DIGITAL PORTFOLIO"];
const eachChar = heroText[0].split("");

function HeroSection() {
  const cont = useRef();

  return (
    <div data-scroll-orientation ref={cont} className="child-1">
      <div className="heading-cover pt-[9rem] flex ">
        {eachChar.map((text, i) => (
          <HeadingText key={i} text={text} />
        ))}
      </div>

      <div className="img-cover h-[680px] w-[100%] overflow-hidden">
        <img src={photo1} className="object-cover" />
      </div>
    </div>
  );
}

export default HeroSection;
