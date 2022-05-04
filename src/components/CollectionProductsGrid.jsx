import React from 'react'
import ProductCard from './ProductCard'
 const CollectionProductsGrid = props => {
    const {products} = props
  return (
      <div className="collection-product-grid">
            <div className="collection-product-grid__top">
                <p className="collection-product-grid__quantity">{products.length} sản phẩm</p>
                <div className="collection-product-grid__sort">
                    <label htmlFor ='collection__sort'>Sắp xếp theo</label>
                    <select name="sort" id="collection__sort">
                    <option value="default">Mặc định</option>
                    <option value="atoz">Từ A - Z</option>
                    <option value="ztoa">Từ Z - A</option>
                    <option value="increase">Giá tăng dần</option>
                    <option value="decrease">Gía giảm dần</option>
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
      </div>
  )
}

export default CollectionProductsGrid