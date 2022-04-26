import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux'
import ButtonGroup from "../components/ButtonGroup";
import ProductCard from "../components/ProductCard";
const ProductsGrid = (props) => {
  const { products } = props;
  const [productList, setProductList] = useState(null);
  const changeCollections = useSelector(state => state.changeCollections) 
  useEffect(() => {
    const newProducts = products.filter((product) => {
      return product.collection === changeCollections.typeCollection;
    });
    
    setProductList(newProducts);
  }, [ changeCollections.typeCollection,products]);
  console.log(changeCollections.typeCollection)
  return (
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
    </div>
  );
};
export default ProductsGrid;
