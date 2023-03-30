import { productConstants } from "./constants";
import store from "../store";
import { getAllProduct, getProductById } from "../function/functions";

function updateImageUrls(product) {
  const updatedProduct = { ...product }; // create a copy of the original object

  if (updatedProduct && updatedProduct.images.length > 0) {
    updatedProduct.images = updatedProduct.images.map((image) => {
      const imageUrl = `https://fedtest.bylith.com/api/imager.php?url=${image.url}&type=fit&width=1000&height=1000&quality=70`;
      return { ...image, url: imageUrl }; // return a copy of the image object with the updated URL
    });
  }

  return updatedProduct;
}

export const getProductFilleter = (attributeId, labelId) => {
  return async (dispatch) => {
    if (attributeId) {
      const { product } = store.getState();

      function findVariantsByAttributeAndLabel(attributeId, labelId) {
        const matchingVariants = [];

        for (const variant of product.product.data.variants) {
          const matchingLabel = variant.labels.find(
            (label) =>
              label.attribute_id === attributeId && label.label_id === labelId
          );

          if (matchingLabel) {
            matchingVariants.push(variant);
          }
        }

        return matchingVariants;
      }

      function getAttributesFromLabels(data) {
        const labels = data.variants.flatMap((variant) => variant.labels);
        const labelIds = labels.map((label) => label.label_id);
        console.log("matchingVarianws", labelIds);
        return labelIds;
      }

      const matchingVariants = findVariantsByAttributeAndLabel(
        attributeId,
        labelId
      );

      let pop = product.product;
      if (matchingVariants.length > 0) {
        pop.data.variants = matchingVariants;
      }

      if (matchingVariants.length > 0) {
        let newAttributes = getAttributesFromLabels(pop.data);
        console.log("asa", newAttributes);
        pop.data.newAttributes = newAttributes;
      }

      dispatch({
        type: productConstants.GET_PRODUCT_DETAILS_BY_ID_FAILURE,
        payload: pop,
      });
    }
  };
};

export const getProduct = (id) => {
  return async (dispatch) => {
    if (id) {
      const ProductFromAxios = await getProductById(id);

      if (ProductFromAxios.data.newAttributes) {
        ProductFromAxios.data.newAttributes = "";
      }

      dispatch({
        type: productConstants.GET_PRODUCT_DETAILS_BY_ID_FAILURE,
        payload: ProductFromAxios,
      });
    } else {
      dispatch({
        type: productConstants.GET_PRODUCT_DETAILS_BY_ID_FAILURE,
        payload: [],
      });
    }
  };
};

export const getAllProducts = () => {
  return async (dispatch) => {
    const ProductFromAxios = await getAllProduct();

    if (ProductFromAxios.data.length > 0) {
      const updatedProducts = ProductFromAxios.data.reduce((acc, pro) => {
        const updatedProduct = updateImageUrls(pro);
        return [...acc, updatedProduct];
      }, []);

      dispatch({
        type: productConstants.GET_PRODUCT_DETAILS_BY_ID_SUCCESS,
        payload: updatedProducts,
      });
    } else {
      dispatch({
        type: productConstants.GET_PRODUCT_DETAILS_BY_ID_SUCCESS,
        payload: [],
      });
    }
  };
};
