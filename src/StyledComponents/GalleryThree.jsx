import photo7 from "/p3.jpg"
import photo8 from "/p2.jpg"
function GalleryThree() {
  return (
    <div className="flex gap-[16rem] justify-center items-center py-[16rem]">
    <div className="img-cover w-[50vw] h-[30vw] ">
        <img src={photo7} className='object-cover object-center w-[100%] h-[100%]' alt="" />
    </div>

    <div className="img-cover w-[30vw] h-[25vw]">
        <img src={photo8} className='object-cover object-center w-[100%] h-[100%]' alt="" />
    </div>
    
        </div>
  )
}

export default GalleryThree