import React, { useState,useEffect } from "react";
import Banner from "../../Components/Banner/Banner";
import TrendingBlog from "../../Components/TrendingBlog/TrendingBlog";
import blogData from "../../utils/data";
import './CategoryBlogs.css'
import { useParams } from "react-router-dom";
function CategoryBlogs(){
    const [currentCategory,setCurrentCategory]=useState("")
    const {category}=useParams();
    useEffect(()=>{
        if(category){
            setCurrentCategory(category)
        }
    },[category])

    const categoryBanners = {
        Programming: "programming.jpg",
        Cooking: "cooking.jpg",
        Fitness: "workout.jpg",
        Travel: "travelling.jpg",
        Health: "health.jpg"
    };
    const bannerImage = categoryBanners[category]
    return(
        <>
            <Banner image={bannerImage} title={category}/>
            <div className="trending-blogs">
                <h1>{currentCategory}</h1>
                <div className="all-trending-blogs d-flex justify-content-between flex-wrap row-gap-3">
                    {
                        blogData.map(blog=> blog.category==currentCategory &&
                            <TrendingBlog key={blog.id} blog={blog}/>
                        )
                    }
                </div>
            </div>
            <br />
            <br />
       </>
    )
}
export default CategoryBlogs;