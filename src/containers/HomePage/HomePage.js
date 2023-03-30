import React, { useState } from "react";
import { useSelector } from "react-redux";
import HomeProductCard from "../../components/ProductCard/HomeProductCard.js";
import { useNavigate } from "react-router-dom";
import "./StyledHomePage.scss";

/**
* @author
* @function PageHome

**/

const PageHome = (props) => {
  const ProductsProm = useSelector((state) => state.product);
  const ProductsPromAxios = ProductsProm.products;
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const navigateToProductPage = (pro) => {
    navigate(`/productPage?id=${pro.id}`);
  };

  const handleNextClick = () => {
    if (currentIndex < ProductsPromAxios.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  // <span className="PRODUCTS">PRODUCTS</span>

  return (
    <div className="homePage">
      <div className="Rectangle">
        <div className="position">
          <div className="PRODUCTS">PRODUCTS</div>
          <div className="Rectangle-67-copy"></div>
        </div>
      </div>

      <div className="grid-container">
        {ProductsPromAxios && ProductsPromAxios.length > 0 && currentIndex === 0
          ? ProductsPromAxios.map((pro, index) => (
              <HomeProductCard
                key={index}
                id={pro.id}
                img={pro.images}
                title={pro.title}
                price_min={pro.min_price}
                price_max={pro.max_price}
                description={pro.title}
                onClick={() => navigateToProductPage(pro)}
              />
            ))
          : null}
        {ProductsPromAxios && ProductsPromAxios.length > 0 && currentIndex === 1
          ? ProductsPromAxios.slice(5).map((pro, index) => (
              <HomeProductCard
                key={index}
                id={pro.id}
                img={pro.images}
                title={pro.title}
                description={pro.title}
                price_min={pro.min_price}
                price_max={pro.max_price}
                onClick={() => navigateToProductPage(pro)}
              />
            ))
          : null}
      </div>

      <div className="nav-buttons">
        <button
          className="butPrevNext"
          onClick={handlePrevClick}
          disabled={currentIndex === 0}
        >
          {"<"} Prev
        </button>
        <button
          onClick={() => setCurrentIndex(0)}
          disabled={currentIndex === 0}
        >
          1
        </button>
        <button
          onClick={() => setCurrentIndex(1)}
          disabled={currentIndex === 1}
        >
          2
        </button>
        <button
          onClick={() => setCurrentIndex(2)}
          disabled={currentIndex === 2}
        >
          3
        </button>
        <button
          onClick={() => setCurrentIndex(3)}
          disabled={currentIndex === 3}
        >
          4
        </button>
        <button
          onClick={() => setCurrentIndex(4)}
          disabled={currentIndex === 4}
        >
          5
        </button>
        <button
          onClick={() => setCurrentIndex(5)}
          disabled={currentIndex === 5}
        >
          6
        </button>
        <button
          className="butPrevNext"
          onClick={handleNextClick}
          disabled={currentIndex === ProductsPromAxios.length - 1}
        >
          Next {">"}
        </button>
      </div>
    </div>
  );
};

export default PageHome;
