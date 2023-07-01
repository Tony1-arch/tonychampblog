
import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import { client,urlFor } from '../sanity';

import Spinner from "./Spinner";
function Home() {
    
    const [posts ,setPosts] = useState([])
    useEffect(() =>{
      client.fetch(`
      *[_type == "post"]{

        ...,
      }| order(_createdAt desc)`).then((data) => {
        setPosts(data)
      }) ;
    },[]);
    if(posts.length === 0) return <div>{<Spinner/>}</div>
  return (
    <div className="bg-slate-200 ">
          <h1 className="text-center w-4/5 mx-auto font-bold text-xl text-sky-400 md:text-4xl font-serif ">TONY CHAMP<span className="text-orange-600 mx-4 font-serif ">BLOG</span> </h1>
      <div className=" p-10 w-full  grid mx-auto bg-slate-300 md:grid-cols-4 gap-5 ">
     
    {posts?.map((post) =>(
        <div key={post.id} className="flex flex-col ">
           
        <img className="h-40"  src={urlFor(post.mainImage).url() } alt=""/>
        <p className="text-center font-bold text-white-500 text-xl font-serif ">{post.title}</p>
        <button  className="rounded-full bg-sky-500/100  hover:bg-sky-700 py-1 my-4 hover:text-white"><Link  to={`/Fullcard/${post.slug.current}`}
        >Full Post</Link></button>
        </div>
    ))}
    </div>
    </div>
  ) 
}

export default Home