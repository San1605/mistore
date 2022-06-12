import React from 'react'
import '../styles/ProductReviewscard.css'
const ProductReviewscard = ({name,price,image,review,index}) => {
  return (
    <div className='ProductReviewCard'>
      <img src={image} alt={`${index} review`} />
      <h5>{review}</h5>
     <span>{name}</span>
     <b>{price}</b>
    </div>
  )
}

export default ProductReviewscard
