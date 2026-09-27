 import Link from "next/link"
 import clientPromise from "@/lib/mongodb"
 import { notFound } from "next/navigation";

export default async function page({ params }) {
    const handle = (await params).handle
    const client = await clientPromise;
        const db = client.db("bittree")
        const collection = db.collection("links")
    
        //If the handle is already claimed, your cannot create the bittree
        const item = await collection.findOne({handle:handle})
        if(!item){
            return notFound()
        }
    

    const item2 = {
        "_id": {
            "$oid": "6ab3b5a53709e5a1fce23288"
        },
        "links": [
            {
                "link": "https:/www.facebook.com",
                "linktext": "facebook"
            },
            {
                "link": "https:/www.instagram.com",
                "linktext": "instagram"
            },
            {
                "link": "https:/www.youtube.com",
                "linktext": "youtube"
            }
        ],
        "handle": "aryan",
        "pic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBB4LQTn0vRq4ydPLp-uTj_lEUHOHYWUU18JlCq5KuMw&s=10"
    }

    return <div className="flex min-h-screen bg-purple-400 justify-center items-start py-10">
        {item && <div className="photo flex justify-center flex-col items-center gap-4">
            <img className="w-36 rounded-4xl" src={item.pic} alt="" />
            <span className="font-bold text-xl">@{item.handle}</span>
            <span className="desc w-80 text-center">{item.desc}</span>
            <div className="links">
                {item.links.map((item, index) => {
                    return  <Link key={index} href={item.link} ><div className=" bg-purple-100 py-4 px-2 shadow-lg bg-white my-3 flex justify-center min-w-96 rounded-md" >
                       {item.linktext} 
                       
                    </div></Link>
                })}
            </div>
        </div>}
    </div>
}