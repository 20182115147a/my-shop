import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux'
import ButtonGroup from "../components/ButtonGroup";
import ProductCard from "../components/ProductCard";
import Button from "../components/Button";
import {Link} from "react-router-dom"
import {useParams} from 'react-router-dom'
const ProductsGrid = (props) => {
  const { products } = props;
  const {category} = useParams()
  const [productList, setProductList] = useState(null);
  const changeCollections = useSelector(state => state.changeCollections) 
  const categoryState = useSelector(state => state.category) 

  useEffect(() => {
    if(category === undefined) {
      const newProducts = products.filter((product) => {
        return product.collection === changeCollections.typeCollection;
      });
      
      setProductList(newProducts);
    }
    else if (category === 'nam' || 'nu') {
      if (categoryState.productCategory === 'hot') {
        const newProducts = products.filter((product) => {
          return product.hot === true;
        });
        setProductList(newProducts.slice(0,10));
      }
      else {
        const newProducts = products.filter((product) => {
          return product.category === categoryState.productCategory;
        });
        setProductList(newProducts.slice(0,10));
      }
    }
  }, [ changeCollections.typeCollection,products,category,categoryState.productCategory]);
  return (
    <div className="products-grid-wrapper">
      <div className="container">
      <ButtonGroup></ButtonGroup>
      <div className="products-grid grid-col-5">
        {productList
          ? productList.map((productItem, index) => (
              <ProductCard key={index}
                id={productItem.id}
                name={productItem.name}
                imgUrls={productItem.details[0].imgUrls}
                price={productItem.price}
              ></ProductCard>
            ))
            : null}
        </div>
        <div className="btns">
        <Link to={`/products/${category === undefined ? changeCollections.typeCollection : categoryState.productCategory}`}><Button className='more-btn'>Xem thêm</Button></Link>
        </div>
      </div>
    </div>
  );
};
export default ProductsGrid;
