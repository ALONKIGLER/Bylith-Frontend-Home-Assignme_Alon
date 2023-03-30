import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../app/action/index";
import "./StyledProductPage.scss";

/**
 * @author
 * @function ProductPage
 **/

const ProductPage = (props) => {
  const dispatch = useDispatch();

  const Product = useSelector((state) => state.product);
  const ProductPromAxios = Product.product;

  const [slug, setSlug] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    dispatch(getProduct(id));
  }, []);

  useEffect(() => {
    setSlug(ProductPromAxios.data);
  }, [Product]);

  const buttonSet = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    dispatch(getProduct(id));
  };

  return (
    <div className="product">
      {slug && slug.images && slug.variants.length > 0 ? (
        <ProductCard
          id={slug.id}
          title={slug.title}
          description={slug.description}
          img={slug.variants}
          pro={slug}
          buttonSet={buttonSet}
          price_min={slug.min_price}
          price_max={slug.max_price}
          // onClick={() => navigateToProductPage(pro)}
        />
      ) : null}
    </div>
  );
};

export default ProductPage;
