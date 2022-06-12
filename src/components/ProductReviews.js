import React from 'react'
import '../styles/ProductReviews.css'
import ProductReviewscard from "../components/ProductReviewscard.jsx"
const ProductReviews = ({productReviews}) => {
  return (
    <div className='ProductReviews'>
        {
            productReviews.map((item,index)=>(
<ProductReviewscard price={item.price} name={item.name} image={item.image} review={item.review}  index={index}  key={item.image} />
            ))
        }
    </div>
  )
}

export default ProductReviews
