import React from 'react'
import Cards from './Cards'

const Card = () => {
  return (
    <>
    <div className='row'>
        <div className='col-md-3'> <Cards/>     
        </div>

        <div className='col-md-3'> <Cards/>     
        </div>
        <div className='col-md-3'> <Cards/>     
        </div>

        <div className='col-md-3'> <Cards/>     
        </div>
           
       
    </div>
    </>
  )
}

export default Card