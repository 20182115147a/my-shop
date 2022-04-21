import React from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
import SwiperCore, { Autoplay,Pagination } from 'swiper';
import slider_1 from '../assets/slider_1.webp'
import slider_2 from '../assets/slider_2.webp'
import slider_3 from '../assets/slider_3.webp'
import slider_4 from '../assets/slider_4.webp'
import slider_5 from '../assets/slider_5.webp'
const HeroSlide = () => {
    const slideItems = [slider_1,slider_2,slider_3,slider_4,slider_5];
    SwiperCore.use([Autoplay,Pagination]);
    
    return (
        <div className="section">
            <div className="slider">
                <div className="slider__container">
                        <Swiper
                        grabCursor={true}
                        autoplay={{delay:2000,
                            disableOnInteraction: false}}
                        pagination={{
                            clickable: true,
                            
                          }}
                        >
                    {
                        slideItems.map((slideItem,index)=> (
                            <SwiperSlide key={index}>
                                <div className="slider__img" style ={{backgroundImage : `url(${slideItem})`}}></div>
                            </SwiperSlide>
                        ))
                    }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
export default HeroSlide