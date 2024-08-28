import React from 'react'
import Header from '../Components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../Components/Blogs';
import Pagination from '../Components/Pagination';

const TagPage = () => {
    let navigate = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1)
  return (
    <div>
         <Header/>
         <div >
            <button style={{
                          fontSize:"15px",border:"1px solid #dee1e3",hover:"blue",
                          borderRadius:"5px",backgroundColor:"cyan",padding:"5px 10px",
                          cursor:"pointer",fontWeight:"bold",margin:"5px"}}
            onClick={()=> navigate(-1)}
            >
                back
            </button>
            <h2 style={{display:"flex",justifyContent:"center",}}>
                Blogs Tagged<span style={{color:"blue"}}>#{tag}</span>
            </h2>
         </div>
         <Blogs/>
         <Pagination/>
    </div>
  )
}

export default TagPage