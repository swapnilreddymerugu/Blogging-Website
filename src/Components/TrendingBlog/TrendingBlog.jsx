import './TrendingBlog.css'
import { Link } from 'react-router-dom';
function TrendingBlog({blog}){
    let image="";
    switch(blog.category){
        case "Cooking":
            image="cooking.jpg"
            break;
        case "Programming":
            image="programming.jpg"
            break;
        case "Fitness":
            image="workout.jpg"   
            break;
        case "Travel":
            image="travelling.jpg"   
            break; 
        case "Health":
            image="health.jpg"   
            break;              

    }
    return(
        <Link to={`/Blogs/${blog.id}`}>
           <div className="card" style={{width: "21rem"}}>
                <img src={`/media/${image}`} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{blog.title}</h5>
                    <p className='text-muted'>{blog.category}</p>
                    <p className="card-text">{blog.description}</p>
                    
                </div>
            </div>
        </Link>
    )
}
export default TrendingBlog;