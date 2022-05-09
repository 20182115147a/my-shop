import React, { useState, useEffect } from "react";
import ProductCard from './ProductCard'
const CollectionProductsGrid = (props) => {
  const [productsSort, setProductsSort] = useState("default");
  const [products, setProducts] = useState(null);
  
  useEffect(() => {
      let newProducts = null
      let defaultProducts = props.products.slice(0 )
    switch (productsSort) {
      case "default": {
        newProducts = props.products;
        break;
      }
      case "atoz" : {
        newProducts =  defaultProducts.sort((a, b) => a.name.localeCompare(b.name))
          break
      }
      case "ztoa" : {
         newProducts =   defaultProducts.sort((a, b) => b.name.localeCompare(a.name))
           break
       }
       case "increase" : {
         newProducts =   defaultProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
           break
       }
       case "decrease" : {
         newProducts =   defaultProducts.sort((a, b) =>parseFloat(b.price) - parseFloat(a.price))
           break
       }
      default: {
        break;
      }
    }
    setProducts(newProducts)
  }, [productsSort, props.products]);
  console.log(props.products);
  return (
    <div className="collection-product-grid">
      {products && (
        <>
          <div className="collection-product-grid__top">
            <p className="collection-product-grid__quantity">
              {products.length} sản phẩm
            </p>
            <div className="collection-product-grid__sort">
              <label htmlFor="collection__sort">Sắp xếp theo</label>
              <select
                name="sort"
                id="collection__sort"
                value = {productsSort}
                onChange={(e) => {
                    setProducts(null)
                    setProductsSort(e.target.value)}}
              >
                <option value="default">Mặc định</option>
                <option value="atoz">Từ A - Z</option>
                <option value="ztoa" >Từ Z - A</option>
                <option value="increase" >Giá tăng dần</option>
                <option value="decrease" >Gía giảm dần</option>
              </select>
            </div>
          </div>
          <div className="collection-product-grid grid-col-5">
            {products
            ? products.map((productItem, index) => (
                <ProductCard key={index}
                    id={productItem.id}
                    name={productItem.name}
                    imgUrls={productItem.details[0].imgUrls}
                    price={productItem.price}
                ></ProductCard>
                ))
                : null}
            </div>
        </>
      )}
    </div>
  );
};

export default CollectionProductsGrid;
