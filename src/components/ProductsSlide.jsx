
import React from 'react'
import {products} from '../fakedata/data'
import {Swiper,SwiperSlide} from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import ProductCard from './ProductCard'
import btn_next from '../assets/btn-next.svg'
import btn_prev from '../assets/btn-prev.svg'
 const ProuductsSlide = () => {
  SwiperCore.use([Navigation]);
  return (
      <section className="products-slide">
        <div className="container">
          <div className="products-slide__container">
            <Swiper
              grabCursor = {true}
              slidesPerView = 'auto'
              spaceBetween={20}
              navigation={{
                clickable: true,
                nextEl: '.products-slide-btn-next',
                prevEl: '.products-slide-btn-prev',
              }}
            >
              {
                products.slice(0,12).map((product,index) => (
                    <SwiperSlide key={index}>
                    <ProductCard imgUrls= {product.details[0].imgUrls} id={product.id} name = {product.name} price={product.price}></ProductCard>
                    </SwiperSlide>
                ))
              }
              <div className="products-slide-btn-prev" style={{backgroundImage:`url(${btn_prev})`}}></div>
              <div className="products-slide-btn-next" style={{backgroundImage:`url(${btn_next})`}}></div>
            </Swiper>
          </div>
        </div>
      </section>
  )
}

export default ProuductsSlide