import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Blogs from '../Components/Blogs';
import Pagination from '../Components/Pagination';

const Blogpage = () => {
  let newBaseUrl = "https://codehelp-apis.vercel.app/api/";

  const [blog, setBlog]= useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const {loading, setLoading} = useContext(AppContext);

  const blogId = location.pathname.split('/').at(-1);

  async function fetchRelatedBlogs(){
    setLoading(true);
    // let url = `${baseUrl}?blogId=${blogId}`;
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    try{
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);

    }
    catch(error){
      console.log(error,"related blogs error...");
      setBlog(null)
      setRelatedBlogs([])
    }
    setLoading(false)
  }

  useEffect( ()=>{
    if(blogId){
      fetchRelatedBlogs()
    }
  },[location.pathname])
  return (
    <div>
        <Header/>
        <div>
          <button style={{display:"flex",justifyContent:"center",
                          fontSize:"15px",border:"1px solid #dee1e3",hover:"blue",
                          borderRadius:"5px",backgroundColor:"cyan",padding:"5px 10px",
                          cursor:"pointer",fontWeight:"bold"}}
          onClick={()=> navigate(-1)}>
            back 
          </button>
        </div>

        {
          loading ? 
          (<div>
             <p>Loading</p>
          </div>):
          (
            blog ?
            (<div>
              <BlogDetails post={blog}/>
              <h1>Related Blogs</h1>
              {
                relatedBlogs.map( (post) => (
                  <div key={post.id}>
                    <BlogDetails post={post}/>
                  </div>
                ))
              }
            </div>):
            (
              <div style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
                No Blog Found
              </div>
            )
          )
        }
        <Blogs/>
        <Pagination/>
    </div>
  )
}

export default Blogpage