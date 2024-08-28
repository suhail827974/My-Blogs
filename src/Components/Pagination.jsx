import { useContext } from 'react';
import { AppContext } from '../Context/AppContext'
import './Pagination.css'

function Pagination() {
  const {page, totalPages,handlePageChange } = useContext(AppContext);

  return (
    <div> 
    <div  className='Pagination-container'
          style={{display:"flex",justifyContent:"space-evenly",
          position:"fixed",bottom:"0",
          width:"100vw",
          backgroundColor:"#b2b5b8"
          }}
          >

      <div style={{}}>

        { page > 1 &&
         ( <button className='Pagination-container-previous'
                      style={{border:"1px solid #dee1e3",hover:"blue",
                          borderRadius:"5px",backgroundColor:"cyan",
                          cursor:"pointer",fontWeight:"bold",marginRight:"10px"

         }}
                onClick={()=> handlePageChange(page-1)}>
            Previous
          </button> )
        }

        {
          page < totalPages &&
          ( <button className='Pagination-container-next'
                    style={{border:"1px solid #dee1e3",hover:"blue",
                            borderRadius:"5px",backgroundColor:"cyan ",
                            cursor:"pointer",fontWeight:"bold"

          }}
                  onClick={()=> handlePageChange(page+1)}>
            Next
          </button>)
        }
        </div>

        <p className='Pagination-container-total'
                style={{border:"1px solid #dee1e3",hover:"blue",
                          borderRadius:"5px",backgroundColor:"cyan",
                          cursor:"pointer",fontWeight:"bold"

         }}>
          Page {page} of {totalPages}
        </p>

    </div>
    </div>
  )
}

export default Pagination