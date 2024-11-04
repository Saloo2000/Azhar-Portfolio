



function ScrollIndictor({textIndictor}) {  

  return (
   <>
    <div className="flex mb-[12rem] mt-[4rem]">

<div className="indicate w-[.4rem] h-[4.5rem] bg-zinc-400 mr-4 rounded">
  <div className="w-[100%] h-[50%] bg-zinc-800 rounded "></div>
</div>

<div>
    <div className="h2-cov overflow-hidden"><h2 className="font-black text-3xl">{textIndictor.num}</h2></div>
    <div className="h3-cov overflow-hidden"><h3 className="tracking-tight w-[18rem] font-bold text-[14px]">{textIndictor.productName}</h3></div>
    <div className="h2-cov overflow-hidden"><h3 className="text-zinc-600 w-[18rem] italic text-[14px]">{textIndictor.softwear}</h3></div> 
</div>
</div>

<div className="text-head mb-[8rem] ml-[10rem]">
<div className="desc-main flex gap-4 flex-wrap">
{textIndictor?.description?.split(" ").map((text,i)=> <div key={i} className="desc-cov overflow-hidden"><h2 className="add text-8xl font-black italic">{text}</h2></div>)}
</div>

<div className="btn-container overflow-hidden ">
<button className="btn rounded-full bg-zinc-200 px-6 py-3 my-8">{textIndictor.btn.contBtn}</button>
<button className="btn rounded-full bg-zinc-800 px-6 py-3 my-8 mx-4 text-white">{textIndictor.btn.portfolio}</button>
</div>
</div>
   </>
  )
}

export default ScrollIndictor