import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";


// step 1
export const AppContext = createContext();
 

export function AppContextProvider({children}){
    const [loading, setLoading]= useState(false);
    const [posts, setPosts] =useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    const navigate = useNavigate();

    //step 4 -> filling api data 
    async function fetchBlogPosts(page = 1, tag, category){
        setLoading(true)
        let url = `${baseUrl}?page=${page}`;
        if(tag){
            url += `&tag=${tag}`
        }
        if(category){
            url += `&category=${category}`;
        }
        try{
            const result = await fetch(url)
            const data = await result.json();
            if(!data.posts || data.posts.length === 0)
                throw new Error("post not found error...")
            // console.log("api data",data)
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        }
        catch(error){
            console.log('catching error',error);
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false)
    }

    function handlePageChange(page){
        navigate({search: `?page=${page}`})
        setPage(page);
        // fetchBlogPosts();
    }

    // step 2
    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange,
    }

// step 3
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>

}