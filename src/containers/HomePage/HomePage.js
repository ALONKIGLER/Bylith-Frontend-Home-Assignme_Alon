import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard/ProductCard.js";
import { useNavigate } from "react-router-dom";

/**
* @author
* @function PageHome

**/

const PageHome = (props) => {
  const ProductsProm = useSelector((state) => state.product);
  const ProductsPromAxios = ProductsProm.products;

  const navigate = useNavigate();

  const navigateToProductPage = (pro) => {
    navigate(`/productPage?id=${pro.id}`);
  };

  return (
    <div>
      <h1>Home Page</h1>
      {ProductsPromAxios && ProductsPromAxios.length > 0
        ? ProductsPromAxios.map((pro, index) => (
            <ProductCard
              key={index}
              id={pro.id}
              img={pro.images}
              title={pro.title}
              description={pro.title}
              onClick={() => navigateToProductPage(pro)}
            />
          ))
        : null}
    </div>
  );
};

export default PageHome;
