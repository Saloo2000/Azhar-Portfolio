import photo2 from "/p1.jpg"

function Sclupt() {
  return (
    <div className="flex justify-center flex-col items-center">
    <div className=" mt-[12rem]"> 
        <h1 className="text-6xl font-black text-center tracking-tight italic">YOU ARE GOING IN <br /> DEPTH</h1>
    </div>
    <div onMouseOver={()=> console.log("jan")}  className="img-cover w-[25vw] mt-10">
      <img src={photo2} alt="" />
    </div>
  </div>
  )
}

export default Sclupt