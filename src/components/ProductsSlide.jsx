import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import SwiperCore, { Navigation } from "swiper";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import btn_next from "../assets/btn-next.svg";
import btn_prev from "../assets/btn-prev.svg";
const ProuductsSlide = (props) => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    setProducts(props.products);
  }, [props.products]);
  SwiperCore.use([Navigation]);
  return (
    <div className="container">
      {products && (
        <div className="products-slide__container">
          <Swiper
            grabCursor={true}
            slidesPerView="auto"
            spaceBetween={20}
            navigation={{
              clickable: true,
              nextEl: ".products-slide-btn-next",
              prevEl: ".products-slide-btn-prev",
            }}
          >
            {products.slice(0,12).map((product, index) => (
              <SwiperSlide key={index}>
                <ProductCard
                  imgUrls={product.details[0].imgUrls}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                ></ProductCard>
              </SwiperSlide>
            ))}
            <SwiperSlide>
              <div className="products-slide__all">
                <Link to="bst-xuan-he" className="text-second">
                  Xem tất cả
                </Link>
              </div>
            </SwiperSlide>
            <div
              className="products-slide-btn-prev"
              style={{ backgroundImage: `url(${btn_prev})` }}
            ></div>
            <div
              className="products-slide-btn-next"
              style={{ backgroundImage: `url(${btn_next})` }}
            ></div>
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default ProuductsSlide;
