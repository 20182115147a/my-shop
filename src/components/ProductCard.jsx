import React from 'react'
import favorite_img from '../assets/favorite_img.svg'
import { Link } from 'react-router-dom'
 const ProductCard = props => {
  return (
    <div className="product__card">
            <div className="product__card__img__container">
        <Link to={`/product/${props.id}`} >
                <div className="product__card__img" style={{backgroundImage: `url(${props.imgUrls})`}} title={props.name}>
            </div>
        </Link>
            </div>
                <Link to='/favorite' title='Thêm vào yêu thích'>
                    <div className="product__card__img__icon">
                        <img src={favorite_img} alt="" />
                    </div>
                </Link>
        <div className="product__card__info">
            <h3 className="product__card__info__name">
                <Link to ={`/product/${props.id}`}>{props.name}</Link>
            </h3>
            <div className="product__card__info__price">
                <span className='text-second'>{props.price.toLocaleString()}đ</span>
            </div>
        </div>
    </div>
  )
}

export default ProductCard
