import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProductFilleter, getProduct } from "../../app/action/index";
import "./StyleProductCart.scss";
/**
 * @author
 * @function  ProductCard
 * **/

function ProductCard({
  id,
  title,
  description,
  onClick,
  img,
  pro,
  buttonSet,
  price_min,
  price_max,
}) {
  const dispatch = useDispatch();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [attributeId, setColor] = useState("");
  const [value, setValue] = useState("");
  const [attributes, setNewAttributes] = useState([]);

  function Dropdown({ label, options, value, onChange }) {
    if (attributes.length > 0) {
      return (
        <div>
          <select value={value} onChange={onChange}>
            <option value="" disabled hidden>
              {label}
            </option>
            {options
              .filter((option) => attributes.includes(option.id))
              .map((option, index) => (
                <option key={`${option.id}-${index}`} value={option.id}>
                  {option.title}
                </option>
              ))}
          </select>
        </div>
      );
    } else {
      return (
        <div>
          <select value={value} onChange={onChange}>
            <option value="" disabled hidden>
              {label}
            </option>
            {options.map((option, index) => (
              <option key={`${option.id}-${index}`} value={option.id}>
                {option.title}
              </option>
            ))}
          </select>
        </div>
      );
    }
  }

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    console.log(selectedImageIndex);
  };

  useEffect(() => {
    dispatch(getProductFilleter(attributeId, value));
    if (pro && pro.newAttributes) {
      setNewAttributes(pro.newAttributes);
      console.log(selectedImageIndex);
    } else {
      setNewAttributes([]);
    }
  }, [value]);

  const set = (labelId, attributeId) => {
    setColor(attributeId);
    setValue(labelId);
    labelId = "";
  };

  const handleClick = () => {
    setNewAttributes([]);
    buttonSet();
  };

  const drop = () => {
    if (pro) {
      return (
        <div>
          {pro.attributes.map((attr) => (
            <div key={attr.labels.map((label) => label.id)}>
              <Dropdown
                key={attr.labels.map((label) => label.id)}
                label={attr.title}
                options={attr.labels}
                value={attributeId}
                onChange={(e) => set(e.target.value, attr.id)}
              />
            </div>
          ))}
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="page-wrapper" onClick={onClick}>
      {img && img.length > 0 && (
        <div className="section1">
          <div className="tab-content">
            <img
              src={`https://fedtest.bylith.com/api/imager.php?url=${img[selectedImageIndex].image.url}&type=fit&width=1000&height=1000&quality=70`}
            />
          </div>
          <div className="gallery">
            {img.map((image, index) => (
              <img
                key={index}
                src={`https://fedtest.bylith.com/api/imager.php?url=${image.image.url}&type=fit&width=1000&height=1000&quality=70`}
                alt={image.title}
                className={index === selectedImageIndex ? "selected" : ""}
                onClick={() => handleImageClick(index)}
              />
            ))}
          </div>
        </div>
      )}

      <div className="section2">
        <span className="titleProduct">{title}</span>
        <p className="titlePrice">${price_min}</p>
        <span className="titleDescription">{description}</span>
      </div>

      <div className="section3">
        <div className="dropdown">{drop()}</div>
        <div className="QuantitySection">
          <span className="Quantity">Quantity:</span>
          <div className="QuantityFunction">asasas</div>
        </div>
        <button>Add to cart</button>
        <button onClick={handleClick}>Refresh the selection</button>
      </div>
    </div>
  );
}

export default ProductCard;
