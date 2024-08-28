import React, { useContext, useEffect } from 'react'
import Header from './Components/Header'
import Blogs from './Components/Blogs'
import Pagination from './Components/Pagination'
import { AppContext } from './Context/AppContext'
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom'
import Home from './Pages/Home'
import Blogpage from './Pages/Blogpage'
import TagPage from './Pages/TagPage'
import CategoryPage from './Pages/CategoryPage'
import './App.css'

const App = () => {
  const {fetchBlogPosts} = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect( ()=>{
    const page = searchParams.get("page") ?? 1;

    if(location.pathname.includes("tags")){
      // iska matlab tag wala page show karna h 
      const tag = location.pathname.split("/").at(-1).replace("_", " ");
      fetchBlogPosts(Number(page), tag);
    }
    else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replace("_"," ");
      fetchBlogPosts(Number(page), null, category);
    }
    else{
      fetchBlogPosts(Number(page))
    }


   },[location.pathname, location.search])
   
  return (
    <div>
      {/* <Header/>
      <Blogs/>
      <Pagination/> */}
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/blog/:blogId' element={ <Blogpage/>}/>
        <Route path='/tags/:tag' element={ <TagPage/>}/>
        <Route path='/categories/:category' element={ <CategoryPage/>}/>
      </Routes>
    </div>
  )
}

export default App