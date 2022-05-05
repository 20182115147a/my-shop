import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import CollectionsClassified from "../components/CollectionsClassified ";
import { products as hardProducts } from "../fakedata/data";
import CollectionProductsGrid from "../components/CollectionProductsGrid";
export const Collections = () => {
  const { collectionType } = useParams();
  const [products, setProducts] = useState();
  const [title, setTitle] = useState("");
  useEffect(() => {
    switch (collectionType) {
      case "bst-xuan-he": {
        setProducts(hardProducts);
        setTitle("BST XUÂN HÈ 2022");
        break;
      }
      case "ao-nam": {
        const newHardProducts = hardProducts.filter(
          (product) => product.gender === "nam" && product.category === "ao"
        );
        setProducts(newHardProducts);
        setTitle("ÁO NAM");
        break;
      }
      case "ao-thun-nam": {
        const newHardProducts = hardProducts.filter(
          (product) =>
            product.gender === "nam" &&
            product.category === "ao" &&
            product.types === "t-shirt"
        );
        setProducts(newHardProducts);
        setTitle("ÁO THUN NAM");
        break;
      }
      case "ao-polo-nam": {
        const newHardProducts = hardProducts.filter(
          (product) =>
            product.gender === "nam" &&
            product.category === "ao" &&
            product.types === "polo"
        );
        setProducts(newHardProducts);
        setTitle("ÁO POLO NAM");
        break;
      }
      case "quan-nam": {
        const newHardProducts = hardProducts.filter(
          (product) => product.gender === "nam" && product.category === "quan"
        );
        setProducts(newHardProducts);
        setTitle("Quần NAM");
        break;
      }
      case "quan-jean-nam": {
        const newHardProducts = hardProducts.filter(
          (product) =>
            product.gender === "nam" &&
            product.category === "quan" &&
            product.types === "jean"
        );
        setProducts(newHardProducts);
        setTitle("Quần JEAN NAM");
        break;
      }
      case "quan-tay-nam": {
        const newHardProducts = hardProducts.filter(
          (product) =>
            product.gender === "nam" &&
            product.category === "quan" &&
            product.types === "eu"
        );
        setProducts(newHardProducts);
        setTitle("Quần Tây NAM");
        break;
      }
      case "hot-nam": {
        const newHardProducts = hardProducts.filter(
          (product) => product.gender === "nam" && product.hot === true
        );
        setProducts(newHardProducts);
        setTitle("HOT NAM");
        break;
      }
      case "ao-nu": {
        const newHardProducts = hardProducts.filter(
          (product) => product.gender === "nu" && product.category === "ao"
        );
        setProducts(newHardProducts);
        setTitle("ÁO NỮ");
        break;
      }
      case "ao-thun-nu": {
        const newHardProducts = hardProducts.filter(
          (product) =>
            product.gender === "nu" &&
            product.category === "ao" &&
            product.types === "t-shirt"
        );
        setProducts(newHardProducts);
        setTitle("ÁO THUN Nữ");
        break;
      }
      case "ao-polo-nu": {
        const newHardProducts = hardProducts.filter(
          (product) =>
            product.gender === "nu" &&
            product.category === "ao" &&
            product.types === "polo"
        );
        setProducts(newHardProducts);
        setTitle("ÁO POLO Nữ");
        break;
      }
      case "quan-nu": {
        const newHardProducts = hardProducts.filter(
          (product) => product.gender === "nu" && product.category === "quan"
        );
        setProducts(newHardProducts);
        setTitle("Quần Nữ");
        break;
      }
      case "quan-jean-nu": {
        const newHardProducts = hardProducts.filter(
          (product) =>
            product.gender === "nu" &&
            product.category === "quan" &&
            product.types === "jean"
        );
        setProducts(newHardProducts);
        setTitle("Quần JEAN Nữ");
        break;
      }
      case "quan-tay-nu": {
        const newHardProducts = hardProducts.filter(
          (product) =>
            product.gender === "nu" &&
            product.category === "quan" &&
            product.types === "eu"
        );
        setProducts(newHardProducts);
        setTitle("Quần Tây Nữ");
        break;
      }
      case "hot-nu": {
        const newHardProducts = hardProducts.filter(
          (product) => product.gender === "nu" && product.hot === true
        );
        setProducts(newHardProducts);
        setTitle("HOT NỮ");
        break;
      }
      case "cafe-ao": {
        const newHardProducts = hardProducts.filter(
          (product) =>
            product.collection === "cafe" && product.category === "ao"
        );
        setProducts(newHardProducts);
        setTitle("Áo Cafe");
        break;
      }
      case "mat-chim-ao": {
        const newHardProducts = hardProducts.filter(
          (product) =>
            product.collection === "mat-chim" && product.category === "ao"
        );
        setProducts(newHardProducts);
        setTitle("Áo Mắt Chim");
        break;
      }
      case "coolmax-ao": {
        const newHardProducts = hardProducts.filter(
          (product) =>
            product.collection === "coolmax" && product.category === "ao"
        );
        setProducts(newHardProducts);
        setTitle("Áo COOLMAX");
        break;
      }
      case "airycool-ao": {
        const newHardProducts = hardProducts.filter(
          (product) =>
            product.collection === "airycool" && product.category === "ao"
        );
        setProducts(newHardProducts);
        setTitle("Áo airycool");
        break;
      }
      case "vo-hau-ao": {
        const newHardProducts = hardProducts.filter(
          (product) =>
            product.collection === "vo-hau" && product.category === "ao"
        );
        setProducts(newHardProducts);
        setTitle("Áo Vỏ hàu");
        break;
      }
      case "compact-ao": {
        const newHardProducts = hardProducts.filter(
          (product) =>
            product.collection === "compact" && product.category === "ao"
        );
        setProducts(newHardProducts);
        setTitle("Áo compact");
        break;
      }
      case "airmax-ao": {
        const newHardProducts = hardProducts.filter(
          (product) =>
            product.collection === "airmax" && product.category === "ao"
        );
        setProducts(newHardProducts);
        setTitle("Áo airmax");
        break;
      }
      case "askin-ao": {
        const newHardProducts = hardProducts.filter(
          (product) =>
            product.collection === "askin" && product.category === "ao"
        );

        setProducts(newHardProducts);
        setTitle("Áo askin");
        break;
      }
      case "cafe-quan": {
        const newHardProducts = hardProducts.filter(
          (product) =>
            product.collection === "cafe" && product.category === "quan"
        );
        setProducts(newHardProducts);
        setTitle("Quần Cafe");
        break;
      }
      case "mat-chim-quan": {
        const newHardProducts = hardProducts.filter(
          (product) =>
            product.collection === "mat-chim" && product.category === "quan"
        );
        setProducts(newHardProducts);
        setTitle("Quần Mắt Chim");
        break;
      }
      case "coolmax-quan": {
        const newHardProducts = hardProducts.filter(
          (product) =>
            product.collection === "coolmax" && product.category === "quan"
        );
        setProducts(newHardProducts);
        setTitle("Quần COOLMAX");
        break;
      }
      case "airycool-quan": {
        const newHardProducts = hardProducts.filter(
          (product) =>
            product.collection === "airycool" && product.category === "quan"
        );
        setProducts(newHardProducts);
        setTitle("Quần airycool");
        break;
      }
      case "vo-hau-quan": {
        const newHardProducts = hardProducts.filter(
          (product) =>
            product.collection === "vo-hau" && product.category === "quan"
        );
        setProducts(newHardProducts);
        setTitle("Quần Vỏ hàu");
        break;
      }
      case "compact-quan": {
        const newHardProducts = hardProducts.filter(
          (product) =>
            product.collection === "compact" && product.category === "quan"
        );
        setProducts(newHardProducts);
        setTitle("Quần compact");
        break;
      }
      case "airmax-quan": {
        const newHardProducts = hardProducts.filter(
          (product) =>
            product.collection === "airmax" && product.category === "quan"
        );
        setProducts(newHardProducts);
        setTitle("Quần airmax");
        break;
      }
      case "askin-quan": {
        const newHardProducts = hardProducts.filter(
          (product) =>
            product.collection === "askin" && product.category === "quan"
        );
        setProducts(newHardProducts);
        setTitle("Quần askin");
        break;
      }
      default: {
        break;
      }
    }
  }, [collectionType]);
  return (
    <section>
      <div className="collections">
        {products && (
          <>
            <div className="container">
              <p className="collections__home">
                <Link to="/">Trang chủ</Link>
              </p>
              <h2 className="title">{title}</h2>
              <div className="collections__content">
                <CollectionsClassified></CollectionsClassified>
                <CollectionProductsGrid
                  products={products}
                ></CollectionProductsGrid>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Collections;
