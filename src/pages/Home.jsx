import React from "react";
import HeroSlide from "../components/HeroSlide";
import { products } from "../fakedata/data";
import Services from '../components/Services'
import slider_1 from '../assets/slider_1.webp'
import slider_2 from '../assets/slider_2.webp'
import slider_3 from '../assets/slider_3.webp'
import slider_4 from '../assets/slider_4.webp'
import slider_5 from '../assets/slider_5.webp'
import ProductsSlide from "../components/ProductsSlide";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import ProductsGrid from "../components/ProductsGrid";
const Home = () => {
  const count = products.length;
  
  const slideItems = [slider_1,slider_2,slider_3,slider_4,slider_5];
  const poloProducts = products.filter(product => product.types === 'polo')
  const pantsProducts = products.filter(product => product.category === 'quan')

  return (
    <div className="home">

      <HeroSlide slideItems = {slideItems}></HeroSlide>
      <Services></Services>
      <section className="products-slide">
        <h2 className="section-title">Everyday wear</h2>
        <ProductsSlide products={products}></ProductsSlide>
        <div className="btns">
          <Link to="collections/bst-xuan-he">
            <Button>Xem tất cả {count} sản phẩm</Button>
          </Link>
        </div>
      </section>
      <section className="products-category">
        <h2 className="section-title">Áo Polo & Thun - THOẢI MÁI, TỰ TIN MỌI LÚC MỌI NƠI</h2>
        <ProductsGrid products={poloProducts} btnState = 'typeCollection'></ProductsGrid>
      </section>
      <section className="products-category">
        <h2 className="section-title">Quần Jean & Âu - Cá tính thời thượng</h2>
        <ProductsGrid products={pantsProducts} btnState = 'pantsCollection'></ProductsGrid>
      </section>
    </div>
  );
};

export default Home;
