import axios from "axios";

const API_URL = "https://fedtest.bylith.com/api";
const API_URL_IMG = "https://fedtest.bylith.com/api/imager.php";

// Get all products
export const getAllProduct = () => {
  return axios
    .get(`${API_URL}/catalog/getAll`)
    .then((response) => response.data);
};

export const getImg = async (imageUrl) => {
  const url = "https://fedtest.bylith.com/api/imager.php";
  const params = {
    url: imageUrl,
    type: "fit",
    width: 1000,
    height: 1000,
    quality: 70,
  };

  try {
    const response = await axios.get(API_URL_IMG, { params });
    // console.log(response.data);
    return response.data; // returns image data in base64 format
  } catch (error) {
    // console.error(error);
    return null;
  }
};

// Get a specific product by ID
export const getProductById = (id) => {
  return axios
    .get(`${API_URL}/catalog/get?id=${id}`)
    .then((response) => response.data);
};

// Add a variant to cart
export const addToCart = (variant_id, quantity) => {
  return axios
    .post(`${API_URL}/cart/add`, {
      variant_id,
      quantity,
    })
    .then((response) => response.data);
};

// Remove all cart items from cart
export const clearCart = () => {
  return axios
    .post(`${API_URL}/cart/truncate`)
    .then((response) => response.data);
};
