"use client"
import { arch } from 'node:os';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useSearchParams } from 'next/navigation';

// import 'react-toastify/dist/ReactTostify.css';

const Generate = () => {
    const searchParams = useSearchParams()
    // const [link, setlink] = useState("")
    // const [linktext, setlinktext] = useState("")
    const [links, setLinks] = useState([{ link: "", linktext: "" }])
    const [handle, sethandle] = useState(searchParams.get('handle'))
    const [pic, setpic] = useState("")
    const [desc, setdesc] = useState("")

    const handleChange = (index, link, linktext) => {
        setLinks((initialLinks) => {
            return initialLinks.map((item, i) => {
                if (i==index) {
                    return { link, linktext }
                }
                else {
                    return item
                }
            })
        })
    }

    const addLink = () => {
        setLinks(links.concat([{ link: "", linktext: "" }]))
    }


    const submitLinks = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "links": links,
            "handle": handle,
            "pic": pic,
            "desc": desc
        });
        console.log(raw)

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        const r = await fetch("http://localhost:3000/api/add", requestOptions)
        const result = await r.json()
        if(result.success){
            toast.success(result.message)
            setLinks([])
            setpic("")
            sethandle("")
        }
        else{
        toast.error(result.message)    
        }


    }

    return (
        <div className=" min-h-screen  bg-[#225AC0] grid grid-cols-2 ">

            <div className="cal1 flex items-center justify-center flex-col text-gray-900">
                <div className='flex flex-col gap-5 my-8'>
                    <h1 className='font-bold text-4xl '>Create your Bittree</h1>
                    <div className="item">
                        <h2 className='font-semibold text-xl '>Step 1: Claim your handle</h2>
                        <div className="mx-4">
                            <input value={handle || ""} onChange={e => { sethandle(e.target.value) }} type="text" placeholder='Choose a Handle'
                                className='bg-white px-10 py-2 mx-2 my-3 focus:outline-green-950 rounded-4xl' />
                        </div>
                    </div>
                    <div className="item">
                        <h2 className='font-semibold text-xl '>Step 2: Add Links</h2>
                        {links && links.map((item, index) => {
                            return <div key={index} className="mx-4 ">
                                <input value={item.linktext || ""} onChange={e => { handleChange(index, item.link,e.target.value ) }} type="text" 
                                placeholder='Enter link text' className='bg-white px-4 py-2 mx-2 my-2 focus:outline-green-950 rounded-4xl' />
                                <input value={item.link || ""} onChange={e => { handleChange(index, e.target.value, item.linktext,) }} type="text" 
                                placeholder='Enter link ' className='bg-white  px-4 py-2 mx-2 my-2 focus:outline-green-950 rounded-4xl' />
                            </div>
                        })}
                        <button onClick={() => addLink()} className='p-5 py-2 mx-2 bg-black
                         text-white font-bold rounded-full'>+ Add link</button>
                    </div>
                    <div className="item">
                        <h2 className='font-semibold text-xl '>Step 3: Add Picture and Description</h2>
                        <div className="mx-4 flex flex-col">
                            <input value={pic || ""} onChange={e => { setpic(e.target.value) }} type="text" placeholder='Enter link to your Picture ' className='bg-white  px-10 py-2 mx-2 my-2 focus:outline-green-950 rounded-4xl' />
                            <input value={desc || ""} onChange={e => { setdesc(e.target.value) }} type="text" placeholder='Enter description ' className='bg-white  px-10 py-2 mx-2 my-2 focus:outline-green-950 rounded-4xl' />
                            <button disabled={pic == "" || handle =="" || links[0].linktext == ""} onClick={() => { submitLinks() }}
                             className='disabled:bg-slate-500 p-5 py-2 mx-2 my-4 w-fit bg-black text-white font-bold rounded-full'>Create your bitlink</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cal2 w-full px-60  h-screen">
                <img src="/generate.webp" className='h-full bg-[#225AC0]  object-cover' alt="generate your link" srcset="" />
                <ToastContainer />
            </div>
        </div>
    )
}

export default Generate



// "use client"
// import { arch } from 'node:os';
// import React, { useState } from 'react'
// import { ToastContainer, toast } from 'react-toastify';

// // import 'react-toastify/dist/ReactTostify.css';

// const Generate = () => {
//     // const [link, setlink] = useState("")
//     // const [linktext, setlinktext] = useState("")
//     const [links, setLinks] = useState([{ link: "", linktext: "" }])
//     const [handle, sethandle] = useState("")
//     const [pic, setpic] = useState("")

//     const handleChange = (index, field, value) => {
//         setLinks((initialLinks) => {
//             return initialLinks.map((item, i) => {
//                 if (i === index) {
//                     return { ...item, [field]: value }
//                 }
//                 else {
//                     return item
//                 }
//             })
//         })
//     }

//     const addLink = () => {
//         setLinks(links.concat([{ link: "", linktext: "" }]))
//     }


//     const submitLinks = async () => {
//         const myHeaders = new Headers();
//         myHeaders.append("Content-Type", "application/json");

//         const raw = JSON.stringify({
//             "links": links,
//             "handle": handle,
//             "pic": pic
//         });
//         console.log(raw)
//         const requestOptions = {
//             method: "POST",
//             headers: myHeaders,
//             body: raw,
//             redirect: "follow"
//         };

//         const r = await fetch("http://localhost:3000/api/add", requestOptions)
//         const result = await r.json()
//         toast(result.message)


//     }

//     return (
//         <div className=" min-h-screen  bg-[#225AC0] grid grid-cols-2 ">

//             <div className="cal1 flex items-center justify-center flex-col text-gray-900">
//                 <div className='flex flex-col gap-5 my-8'>
//                     <h1 className='font-bold text-4xl '>Create your Bittree</h1>
//                     <div className="item">
//                         <h2 className='font-semibold text-xl '>Step 1: Claim your handle</h2>
//                         <div className="mx-4">
//                             <input value={handle || ""} onChange={e => { sethandle(e.target.value) }} type="text" placeholder='Choose a Handle'
//                                 className='bg-white px-10 py-2 mx-2 my-3 focus:outline-green-950 rounded-4xl' />
//                         </div>
//                     </div>
//                     <div className="item">
//                         <h2 className='font-semibold text-xl '>Step 2: Add Links</h2>
//                         {links && links.map((item, index) => {
//                             return <div key={index} className="mx-4 ">
//                                 <input value={item.linktext || ""} onChange={e => { handleChange(index, "linktext", e.target.value) }} type="text" placeholder='Enter link text' className='bg-white  px-4 py-2 mx-2 my-2 focus:outline-green-950 rounded-4xl' />
//                                 <input value={item.link || ""} onChange={e => { handleChange(index, "link", e.target.value) }} type="text" placeholder='Enter link ' className='bg-white px-4 py-2 mx-2 my-2 focus:outline-green-950 rounded-4xl' />
//                             </div>
//                         })}
//                         <button onClick={() => addLink()} className='p-5 py-2 mx-2 bg-black
//                          text-white font-bold rounded-full'>+ Add link</button>
//                     </div>
//                     <div className="item">
//                         <h2 className='font-semibold text-xl '>Step 3: Add Picture and Finalize</h2>
//                         <div className="mx-4 flex flex-col">
//                             <input value={pic || ""} onChange={e => { setpic(e.target.value) }} type="text" placeholder='Enter link to your Picture ' className='bg-white  px-10 py-2 mx-2 my-2 focus:outline-green-950 rounded-4xl' />
//                             <button onClick={() => { submitLinks() }} className='p-5 py-2 mx-2 my-4 w-fit bg-black text-white font-bold rounded-full'>Create your bitlink</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="cal2 w-full px-60  h-screen">
//                 <img src="/generate.webp" className='h-full bg-[#225AC0]  object-cover' alt="generate your link" srcset="" />
//                 <ToastContainer />
//             </div>
//         </div>
//     )
// }

// export default Generate