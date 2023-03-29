import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProductFilleter } from "../../app/action/index";

/**
 * @author
 * @function  ProductCard
 * **/

function ProductCard({ id, title, description, onClick, img, pro }) {
  const dispatch = useDispatch();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [attributeId, setColor] = useState("");
  const [value, setValue] = useState("");
  const [attributes, setNewAttributes] = useState([]);

  function Dropdown({ label, options, value, onChange }) {
    if (attributes.length > 0) {
      return (
        <div>
          <label>{label}: </label>
          <select value={value} onChange={onChange}>
            {options
              .filter((option) => attributes.includes(option.id))
              .map((option) => (
                <option key={option.id} value={option.id}>
                  {option.title}
                </option>
              ))}
          </select>
        </div>
      );
    } else {
      return (
        <div>
          <label>{label}: </label>
          <select value={value} onChange={onChange}>
            {options.map((option) => (
              <option key={option.id} value={option.id}>
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
    }
  }, [value]);

  const set = (labelId, attributeId) => {
    setColor(attributeId);
    setValue(labelId);

    labelId = "";
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
      {drop()}
      <button>Buy Now</button>
    </div>
  );
}

export default ProductCard;

// {
//     "variants": [

//           {
//               "id": "6",

//               "english_title": "Gray Jeans 42W & 42L Cotton",
//               "image": {
//                   "title": "gray.jpg",
//                   "url": "products/images/gFj4jwArJt.jpg"
//               },
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

//               "image": {
//                   "title": "gray.jpg",
//                   "url": "products/images/gFj4jwArJt.jpg"
//               },
//               "sku": "1",
//               "price": "160.00",
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
//   "attributes": [

//     {
//         "id": "6",
//         "labels": [
//             {
//                 "attribute_id": "1",
//                 "label_id": "5"
//             },
//             {
//                 "attribute_id": "2",
//                 "label_id": "12"
//             },
//             {
//                 "attribute_id": "3",
//                 "label_id": "18"
//             },
//             {
//                 "attribute_id": "4",
//                 "label_id": "20"
//             }
//         ],
//       }
// ]

//  }

// 0
// :
// {attribute_id: '1', label_id: '1'}
// 1
// :
// {attribute_id: '2', label_id: '6'}
// 2
// :
// {attribute_id: '3', label_id: '14'}
// 3
// :
// {attribute_id: '4', label_id: '20'}
// 4
// :
// {attribute_id: '1', label_id: '1'}
// 5
// :
// {attribute_id: '2', label_id: '8'}
// 6
// :
// {attribute_id: '3', label_id: '16'}
// 7
// :
// {attribute_id: '4', label_id: '20'}
// 8
// :
// {attribute_id: '1', label_id: '1'}
// 9
// :
// {attribute_id: '2', label_id: '11'}
// 10
// :
// {attribute_id: '3', label_id: '17'}

// (4) [{…}, {…}, {…}, {…}]
// 0
// :
// id
// :
// "1"
// labels
// :
// Array(4)
// 0
// :
// {id: '1', title: 'Black', data: 'black'}
// 1
// :
// {id: '2', title: 'Red', data: 'red'}
// 2
// :
// {id: '4', title: 'Pink', data: '#ff69b4'}
// 3
// :
// {id: '5', title: 'Gray', data: 'gray'}
