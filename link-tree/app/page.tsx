"use client"
// import { create } from "domain";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  const [text, setText] = useState("")

  const createTree = () => {

    router.push(`/generate?handle=${text}`)
  }
  return (
    <main>
      <section className="bg-[#245dac] min-h-[100vh] grid grid-cols-2">
        <div className=" flex  justify-center flex-col ml-[10vw] gap-2 ">
          <p className="text-yellow-300 text-7xl font-bold ">A link in bio</p>
          <p className="text-yellow-300 text-7xl font-bold "> built for you.</p>
          <p className="text-yellow-300 text-lg my-4">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
          <div className="input flex gap-3">
            <input value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder="Enter your handle" className="bg-white px-2 py-2 rounded-2xl focus:outline-black" />
            <button onClick={() => createTree()} className="bg-pink-600 font-semibold px-8 py-2 rounded-full">Get started for free</button>
          </div>
        </div>
        <div className=" flex items-center justify-center flex-col mr-[10vw]">
          <img src="/3d hai.jpeg" alt="home" />
        </div>
      </section>
      <section className="bg-[#e8efd6] min-h-[100vh] grid grid-cols-2">
        <div className="flex items-center justify-center flex-col mr-[10w]">
          <img src="image sec.avif" alt="photo" />
        </div>
        <div className="flex  justify-start items-start py-42 mx-10 flex-col   gap-2 ">
         <p className="text-black text-7xl font-bold">Analyze your</p>  
         <p className="text-black text-7xl font-bold">audience and keep</p>
         <p className="text-black text-7xl font-bold">them engaged</p> 
         <p className=" text-slate-600 text-2xl my-4">Track your engagement over time, monitor revenue and learn what’s converting your audience. Make informed updates on the fly to keep them coming back.</p> 
        <div  className="input flex gap-4 px-10">
        <button onClick={() => createTree()} className="bg-pink-300 font-semibold px-18 py-2 rounded-full">Get started for free</button>
        </div>
        </div>
      </section>
    </main>
  );
}
