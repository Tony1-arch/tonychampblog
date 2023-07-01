import React,{useEffect,useState} from "react";
import BlockContent from "@sanity/block-content-to-react";
import { useParams, Link } from "react-router-dom";
import { client} from '../sanity';

import Spinner from "./Spinner"; 
 
function Fullcard() {
    const { slug } = useParams()
    const [post ,setPost] = useState([])
    useEffect(() =>{
      client.fetch(`
      *[slug.current == "${slug}"] {
        title,
        body,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }
      
      }`).then((data) => {
        setPost(data[0])
      }) ;
    },[slug]);
    if(post === null) return <div>{<Spinner/>}</div> 
    return (
      <>
      
      <div key={post.slug} className="w-full  flex-row  justify-center items-center bg-amber-200 h-full ">
     {post.mainImage && post.mainImage.asset && (
            <img
              src={ post.mainImage.asset.url}
              alt={post.title}
              title={post.title}
              className="w-96 mx-auto py-8 h-80 object-cover"
            />
     )}
      <p className="text-center w-2/5 mx-auto font-bold text-sky-900 text-2xl font-serif ">{post.title}</p>  

      <div className=" w-4/5 mx-auto my-8 font-serif ">
            <BlockContent blocks={post.body}
           />
          </div>
          <div className="mx-auto w-3/5  py-8 px-18 flex flex-row  justify-center items-center">
          <button className="rounded-full bg-sky-500/100  hover:bg-sky-700 py-3 px-12 my-4 hover:text-white  ">
            <Link 
              to="/"
              
            >
              Read more articles
            </Link>
          </button>
          </div>
         
          </div>
      </>
    );
}

export default Fullcard