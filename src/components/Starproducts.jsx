import React from 'react'
import '../styles/starproduct.css'
const Starproducts = ({starproduct}) => {
  return (
    <div className='starProduct'>
         <div>
             <a href="{starproduct[0].url"  > <img src={starproduct[0].image} alt="1st product" /></a>
         </div>
         <div>
         <a href="{starproduct[1].url"><img src={starproduct[1].image} alt="1st product" /></a>
         <a href="{starproduct[2].url"><img src={starproduct[2].image} alt="1st product" /></a>
         <a href="{starproduct[3].url"><img src={starproduct[3].image} alt="1st product" /></a>
         </div>
    </div>
  )
}
export default Starproducts