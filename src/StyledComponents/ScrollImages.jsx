import photo3 from "/banner.jpg"
import photo4 from "/p1.jpg"
function ScrollImages() {
  return (
    <div>

<div className="pr1 img-1 overflow-hidden w-[40vw]  h-[40vw] mt-[19vw] relative">
  <div className="sal bg-white absolute z-20 w-[100%] h-[100%]"></div>
<img src={photo3}  className="object-cover h-[100%] w-[100%]" alt="" />
</div>

<div className="img-1 w-[40vw] h-[40vw] my-[5rem]">
<img src={photo4}  className="object-cover h-[100%] w-[100%]" alt="" />
</div>

    </div>
  )
}

export default ScrollImages