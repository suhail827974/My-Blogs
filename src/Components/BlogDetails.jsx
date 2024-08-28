import React from 'react'
import { NavLink } from 'react-router-dom'
import './BlogDetails.css'

const BlogDetails = ({post}) => {

  return (
    
    <div className='blogDetails-container'
            style={{display:"flex",flexDirection:"column",
                justifyContent:"center",fontSize:"20px",
                margin:"5px 0px",border:"1px solid #969899",
                padding:"5px"
                }}>
        <NavLink to={`/blog/${post.id}`}>
            <span>{postMessage.title}</span>
        </NavLink>

        <p>
            By
            {"  "}
            <span style={{color:"brown",margin:"0px 5px"}}>{post.author}</span>
            {" "}
          
            <NavLink to={`/categories/${post.category.replaceAll(" ", "_")}`}>
                <span style={{color:"blue"}}>{post.category}</span>
            </NavLink>
        </p>

        <p style={{fontStyle:"italic",fontSize:"15px",marginTop:"3px"}}>Posted on {post.date}</p>
        
        <p style={{padding:"10px 0px"}}>
            {post.content}
        </p>

        <div style={{display:"flex", flexDirection:"row",flexWrap:"wrap"}}>
            {
                post.tags.map( (tag, index) => (
                    <NavLink key={index} to={`/tags/${tag.replaceAll(" ","_")}`}>
                        <span style={{color:"#1191f2"}}>{`#${tag}`}</span>
                    </NavLink>
                ))
            }
        </div>

    </div>
  )
}

export default BlogDetails