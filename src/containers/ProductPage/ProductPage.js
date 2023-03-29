import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../app/action/index";

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

  return (
    <div>
      {slug && slug.images ? (
        <ProductCard
          id={slug.id}
          title={slug.title}
          description={slug.description}
          img={slug.variants}
          pro={slug}
          // onClick={() => navigateToProductPage(pro)}
        />
      ) : null}

      {slug && slug.images ? JSON.stringify(slug) : null}
    </div>
  );
};

export default ProductPage;
