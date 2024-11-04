import { useRef } from "react"
import photo5 from "/p3.jpg"
import photo6 from "/p2.jpg"

function GalleryTwo() {

const gl2=useRef(null)

  return (
    <div ref={gl2} className="flex gap-[16rem] justify-center items-center pb-[16rem]">

<div className="img-cover overflow-hidden w-[25vw] h-[30vw]">
    <img src={photo6}  className='object-cover object-center w-[100%] h-[100%]' alt="" />
</div>

<div className="img-cover w-[35vw] h-[45vw] ">
    <img src={photo5} className='object-cover object-center w-[100%] h-[100%]' alt="" />
</div>
    </div>
  )
}

export default GalleryTwo