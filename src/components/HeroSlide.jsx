import React from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
import SwiperCore, { Autoplay,Pagination } from 'swiper';
const HeroSlide = props => {
    const {slideItems} = props
    
        SwiperCore.use([Autoplay,Pagination]);
    return (
        <div className="section">
            <div className="slider">
                <div className="slider__container">
                        <Swiper
                        grabCursor={true}
                        autoplay={ slideItems.length > 1 ? {delay:2000,
                            disableOnInteraction: false} : false}
                        pagination={ {
                            clickable: true
                          } }
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