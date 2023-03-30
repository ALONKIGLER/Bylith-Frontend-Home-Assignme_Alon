import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProductFilleter } from "../../app/action/index";
import "./StyleHomeCard.scss";
/**
 * @author
 * @function  ProductCard
 * **/

function HomeProductCard({
  id,
  title,
  description,
  onClick,
  price_min,
  price_max,
  img,
  pro,
}) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [attributeId, setColor] = useState("");
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  useEffect(() => {
    dispatch(getProductFilleter(attributeId, value));
  }, [value]);

  return (
    <div className="product-card" onClick={onClick}>
      <div className="image-gallery">
        <img src={img[0].url} alt={img[0].title} />
      </div>
      <div className="textCard">
        <h2 className="Black-Sapphire">{title}</h2>
        <p className="Black-Sapphire">{price_min}$</p>
      </div>

      {/* <p>{description}</p> */}
    </div>
  );
}

export default HomeProductCard;
