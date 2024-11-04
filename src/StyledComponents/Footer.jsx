import profile from "/signature.png"
import profile2 from "/p1.jpg"
function Footer() {
  return (
    <div className="flex w-[50vw] justify-center items-center gap-[2rem] m-auto">

        <div className="img w-[15vw] h-[100%] my-[2rem]">
            <img src={profile2} alt="" />
        </div>
        <div className="text w-[20vw]">
            <h2 className="text-[6vw] leading-[6rem] font-black italic">ADNAN SHAH</h2>
            <hr className="w-[12rem] border-[2px] mb-9 mt-6 rounded border-zinc-950 " />
            <p className="text-black italic ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nihil neque esse totam, sint delectus reprehenderit dolore eveniet accusantium veritatis atque hic id fugit quasi deleniti ab sapiente. Quasi neque culpa laudantium, aliquid dicta</p>
            <img src={profile} className="w-[200px]" alt="" />
            <div className="icon flex gap-5">
                <img src="../../public/link.png" className="w-[30px]" alt="" />
                <img src="../../public/link.png" className="w-[30px]" alt="" />
                <img src="../../public/link.png" className="w-[30px]" alt="" />
                <img src="../../public/link.png" className="w-[30px]" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer