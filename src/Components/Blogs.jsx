import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import Spinner from './Spinner'
import BlogDetails from './BlogDetails'

function Blogs() {
    // consumer
    const {posts, loading} = useContext(AppContext)
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",
                    justifyContent:"center",fontSize:"20px",marginBottom:"30px"
                    }}> 
        {
            loading ? (<Spinner/>): 
                    (
                        posts.length === 0 ?
                        (<div>
                            <p>No post found</p>
                        </div>):
                        (
                            posts.map((post)=>(
                                <BlogDetails key={post.id} post={post} />
                                // <div key={post.id}>
                                //     <p style={{color:"brown",fontWeight:"bold",fontSize:"20px"}}>{post.title}</p>
                                //     <p>By <span>{post.author} </span>on <span>{post.category}</span></p>
                                //     <p>Posted on {post.date}</p>
                                //     <p>{post.content}</p>
                                //     <div>
                                //         {post.tags.map( (tag, index) => {
                                //             return <span key={index}>{`#${tag}`}</span>
                                //         })}
                                //     </div>
                                // </div>
                            ))
                        )
                    )
        }
    </div>
  )
}

export default Blogs