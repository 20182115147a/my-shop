import React from "react";
import HeroSlide from "../components/HeroSlide";
import { products } from "../fakedata/data";
import ser_1 from "../assets/ser_1.webp";
import ser_2 from "../assets/ser_2.webp";
import ser_3 from "../assets/ser_3.webp";
import ser_4 from "../assets/ser_4.webp";
import ProductsSlide from "../components/ProductsSlide";
import Button from "../components/Button";
import { Link } from "react-router-dom";
const Home = () => {
  const count = products.length;
  return (
    <div className="home">
      <HeroSlide></HeroSlide>
      <Services></Services>
      <section className="products-slide">
        <h2 className="section-title">Everyday wear</h2>
        <ProductsSlide products={products}></ProductsSlide>
        <div className="btns">
          <Link to="/bst-xuan-he">
            <Button>Xem tất cả {count} sản phẩm</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
const Services = () => (
  <section>
    <div className="container">
      <div className="services grid-col-4">
        <div className="services__item">
          <div className="service__left">
            <img src={ser_1} alt="" />
          </div>
          <div className="services__right">
            <div className="services__right__title">Miễn phí giao hàng</div>
            <div className="services__right__sumary">
              FREESHIP mọi đơn <span></span>
            </div>
          </div>
        </div>
        <div className="services__item">
          <div className="service__left">
            <img src={ser_2} alt="" />
          </div>
          <div className="services__right">
            <div className="services__right__title">Thanh toán COD</div>
            <div className="services__right__sumary">
              Thanh toán khi <span>nhận hàng (COD)</span>
            </div>
          </div>
        </div>
        <div className="services__item">
          <div className="service__left">
            <img src={ser_3} alt="" />
          </div>
          <div className="services__right">
            <div className="services__right__title">Khách hàng VIP</div>
            <div className="services__right__sumary">
              Ưu đãi dành cho <span>khách hàng VIP</span>
            </div>
          </div>
        </div>
        <div className="services__item">
          <div className="service__left">
            <img src={ser_4} alt="" />
          </div>
          <div className="services__right">
            <div className="services__right__title">Hỗ trợ bảo hành</div>
            <div className="services__right__sumary">
              <span>Đổi, sửa</span> đồ tại tất cả My Shop
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default Home;
