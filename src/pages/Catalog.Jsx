import React from 'react'
import {useParams} from 'react-router'
import HeroSlide from '../components/HeroSlide'
import slide_nu from '../assets/catalog_slide_nu.webp'
import slide_nam from '../assets/catalog_slide_nam.webp'
import Services from '../components/Services'
import { products } from "../fakedata/data";
import ProductsGrid from "../components/ProductsGrid";
 const Catalog = () => {
     const {category} = useParams();
      const slideItems = category === 'nu' ? [slide_nu] : [slide_nam]
      let newProducts = undefined;
    switch (category) {
      case 'nam':
        newProducts  = products.filter( product => {
                return product.gerder === 'nam'
              })
        break;
        case 'nu':
          newProducts  = products.filter( product => {
                return product.gerder === 'nu'
              })
      break;
      default:
        break;
    }
  return (
    <div className="catalog">
      <section>
      <HeroSlide slideItems = {slideItems}></HeroSlide>
      </section>
      <section>
      <Services></Services>
      </section>
      <section>
        <h2 className="section-title">ĐỀ XUẤT CHO BẠN</h2>
        <ProductsGrid products={newProducts}></ProductsGrid>
      </section>
    </div>
  )
}
export default Catalog