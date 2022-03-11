import React from 'react'
import Data from "./data.json"
const Cards = () => {
  return (
    <>
    <div className='container mt-5'>
       
        {Data.map((resp)=>{
            return(
               
                
                 <div key={ resp.id }>
                      <img src={resp.image} style={{width:"310px"}}/>
                      <br/>
                    {resp.title}
                  <br/>
                    {resp.price}
                    <br/>
                    
                </div>
                
            )
        })}
        </div>
         
    </>
   
  )
}

export default Cards