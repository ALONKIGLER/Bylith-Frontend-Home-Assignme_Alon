import React, { useEffect, useState } from "react";
import DynamicDropdown from "../../shared/DynamicDropdown/DynamicDropdown";
import { useSelector, useDispatch } from "react-redux";
import { getProductFilleter } from "../../app/action/index";
import axios from "axios";

/**
 * @author
 * @function  ProductCard
 * **/

function Dropdown({ label, options, value, onChange }) {
  return (
    <div>
      <label>{label}: </label>
      <select value={value} onChange={onChange}>
        <option value="">-- Select --</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.title}
          </option>
        ))}
      </select>
    </div>
  );
}

function ProductCard({ id, title, description, onClick, img, pro }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [attributeId, setColor] = useState("");
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  // useEffect(() => {
  //   console.log("img", pro.attributes[0].labels[0].title); // Add a console.log to debug the action object
  //   console.log("img", value); // Add a console.log to debug the action object
  // }, [attributeId]);

  useEffect(() => {
    if (pro) {
      // console.log("slug", pro);
      // console.log("slug", img);
    }
    // console.log("slug", description);
    // console.log("img", img);
  }, []);

  useEffect(() => {
    dispatch(getProductFilleter(attributeId, value));
  }, [value]);

  const set = (labelId, attributeId) => {
    setColor(attributeId);
    setValue(labelId);
  };
  const bobo = () => {
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
    <div className="product-card" onClick={onClick}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="image-gallery">
        {pro
          ? img.map((image, index) => (
              <img
                key={index}
                src={`https://fedtest.bylith.com/api/imager.php?url=${image.image.url}&type=fit&width=1000&height=1000&quality=70`}
                alt={image.title}
                className={index === selectedImageIndex ? "selected" : ""}
                onClick={() => handleImageClick(index)}
              />
            ))
          : img.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.title}
                className={index === selectedImageIndex ? "selected" : ""}
                onClick={() => handleImageClick(index)}
              />
            ))}
      </div>
      {bobo()}
      <button>Buy Now</button>
    </div>
  );
}

export default ProductCard;

// {
// "loo": {df, df , df}
//     "variants": [

//           {
//               "id": "6",
//               "title": "Gray Jeans 42W & 42L Cotton",
//               "english_title": "Gray Jeans 42W & 42L Cotton",
//               "image": {
//                   "title": "gray.jpg",
//                   "url": "products/images/gFj4jwArJt.jpg"
//               },
//               "sku": "12",
//               "price": "155.00",
//               "discount_price": null,
//               "tab_content": [],
//               "pre_order_expected_date": null,
//               "max_purchase_limit": null,
//               "labels": [
//                   {
//                       "attribute_id": "1",
//                       "label_id": "5"
//                   },
//                   {
//                       "attribute_id": "2",
//                       "label_id": "12"
//                   },
//                   {
//                       "attribute_id": "3",
//                       "label_id": "18"
//                   },
//                   {
//                       "attribute_id": "4",
//                       "label_id": "20"
//                   }
//               ],
//               "metadata": {
//                   "title": null,
//                   "keywords": null,
//                   "description": null,
//                   "link": null
//               },
//               "recommended_variants": []
//           },
//           {
//               "id": "7",
//               "title": "Gray Jeans 38W & 40L Silk",
//               "english_title": "Gray Jeans 38W & 40L Silk",
//               "image": {
//                   "title": "gray.jpg",
//                   "url": "products/images/gFj4jwArJt.jpg"
//               },
//               "sku": "1",
//               "price": "160.00",
//               "discount_price": null,
//               "tab_content": [],
//               "pre_order_expected_date": null,
//               "max_purchase_limit": null,
//               "labels": [
//                   {
//                       "attribute_id": "1",
//                       "label_id": "1"
//                   },
//                   {
//                       "attribute_id": "2",
//                       "label_id": "10"
//                   },
//                   {
//                       "attribute_id": "3",
//                       "label_id": "17"
//                   },
//                   {
//                       "attribute_id": "4",
//                       "label_id": "19"
//                   }
//               ],
//               "metadata": {
//                   "title": null,
//                   "keywords": null,
//                   "description": null,
//                   "link": null
//               },
//               "recommended_variants": []
//           },

//       ],

// }
