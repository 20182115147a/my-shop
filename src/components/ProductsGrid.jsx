import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux'
import ButtonGroup from "../components/ButtonGroup";
import ProductCard from "../components/ProductCard";
import Button from "../components/Button";
import {Link} from "react-router-dom"
import {useParams} from 'react-router-dom'
const ProductsGrid = (props) => {
  const { products,btnState } = props;
  const {category} = useParams()
  const [productList, setProductList] = useState(null);
  const changeCollections = useSelector(state => state.changeCollections) 
  const categoryState = useSelector(state => state.category) 

  useEffect(() => {
    if(category === undefined) {
      const newProducts = products.filter((product) => {
        return product.collection === changeCollections[btnState];
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
  }, [products,category,categoryState.productCategory,btnState,changeCollections]);
  return (
    <div className="products-grid-wrapper">
      <div className="container">
      <ButtonGroup btnState = {btnState}></ButtonGroup>
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
        <Link to={`/collections/${category === undefined ? changeCollections[btnState] : categoryState.productCategory}`}><Button className='more-btn'>Xem thêm</Button></Link>
        </div>
      </div>
    </div>
  );
};
export default ProductsGrid;
