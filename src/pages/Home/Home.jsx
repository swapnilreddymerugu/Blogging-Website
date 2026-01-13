import React from "react";
import './Home.css';
import Banner from "../../Components/Banner/Banner";
import TrendingBlog from "../../Components/TrendingBlog/TrendingBlog";
import blogData from "../../utils/data";
import { Link } from "react-router-dom";
function Home(){
    return(
        <>
            <Banner/>
            <div className="my-2">
                <h1>Read Blogs From</h1>
                <div className="all-blogs d-flex justify-content-between">
                    <Link to={'/Blogs/category/Programming'}>
                    <div className="card" style={{width: "21rem"}}>
                        <img src="/media/programming.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Programming</h5>
                        </div>
                    </div>
                    </Link>
                    <Link to={'/Blogs/category/Cooking'}>
                    <div className="card" style={{width: "21rem"}}>
                        <img src="/media/cooking.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Cooking</h5>
                        </div>
                    </div>
                    </Link>
                    <Link to={'/Blogs/category/Fitness'}>
                    <div className="card" style={{width: "21rem"}}>
                        <img src="/media/workout.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Workouts</h5>
                        </div>
                    </div>
                    </Link>
                    <Link to={'/Blogs/category/Travel'}>
                    <div className="card" style={{width: "21rem"}}>
                        <img src="/media/travelling.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Travelling</h5>
                        </div>
                    </div>
                    </Link>
                </div>
            </div>
            <div className="trending-blogs">
                <h1>Trending Blogs</h1>
                <div className="all-trending-blogs d-flex justify-content-between flex-wrap row-gap-3">
                    {
                        blogData.map(blog=>(
                            <TrendingBlog key={blog.id} blog={blog}/>
                        ))
                    }
                </div>
            </div>
            <br />
            <br />
       </>
    )
}
export default Home;