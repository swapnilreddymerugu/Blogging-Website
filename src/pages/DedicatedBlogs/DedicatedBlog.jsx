import React from 'react';
import'./DedicatedBlog.css';
import Banner from '../../Components/Banner/Banner';
import { useState,useEffect } from 'react';
import blogData from '../../utils/data';
import { useParams } from 'react-router-dom';

function DedicatedBlog(){
    const[blogId,setBlogId]=useState(1);
    // const[blog,setBlog]=useState("");
    let blogToDisplay=blogData.filter(blog=>blog.id==blogId)[0]
    const {id}=useParams();
    useEffect(()=>{
        if(id){
            setBlogId(id)
        }
    },[])

     const categoryBanners = {
        Programming: "programming.jpg",
        Cooking: "cooking.jpg",
        Fitness: "workout.jpg",
        Travel: "travelling.jpg",
        Health: "health.jpg"
    };
    const bannerImage = categoryBanners[blogToDisplay.category]
    return(
        <>
           <Banner image={bannerImage} title={blogToDisplay.category}/> 
           <h1>{blogToDisplay.title}</h1>
           <h6>({blogToDisplay.category})</h6>
           <p>{blogToDisplay.content}</p>

        </>
    )
}
export default DedicatedBlog;