import './App.css'
import Login from './pages/login/LoginPage'
import Registration from './pages/Registration/Registration'
import Home from './pages/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import CategoryBlogs from './pages/CategoryBlogs/CategoryBlogs'
import DedicatedBlog from './pages/DedicatedBlogs/DedicatedBlog'
import { Routes,Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Registration' element={<Registration/>}/>
        <Route path='/Blogs/category/:category' element={<CategoryBlogs/>}/>
        <Route path='/Blogs/:id' element={<DedicatedBlog/>}/>
      </Routes>
    </>
  )
}

export default App
