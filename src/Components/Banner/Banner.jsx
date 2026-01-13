import React from "react";
import './Banner.css';

function Banner({image,title}){
    const bannerImage=image||"banner.jpg"
    const head=title||"WELCOME TO OUR BLOGS"
    return(
        <div className="banner-div">
            <div className="overlay">
                <h1>{`${head} Blog`}</h1>
            </div>
            <img src={`/media/${bannerImage}`}alt="" className="img" width={"100%"} height={"700px"}  style={{objectFit:"cover"}}/>
        
        </div>
    )
}
export default Banner