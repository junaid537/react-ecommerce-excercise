import axios from "axios";

export const getAllProducts = async () => {
  const { data } = await axios.get(
    `https://obscure-refuge-62167.herokuapp.com/products`
  );
  return data;
};

export const getSpecificProduct = async ({ queryKey }) => {
  const { data } = await axios.get(
    `https://obscure-refuge-62167.herokuapp.com/products/${queryKey[1]}`
  );
  return data;
};
