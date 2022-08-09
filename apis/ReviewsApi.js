import axios from "axios";
import {useMutation} from "@tanstack/react-query";



export const getProductReviews = async ({ queryKey }) => {
  console.log("useQuery is called");
  const { data } = await axios.get(
    `https://obscure-refuge-62167.herokuapp.com/products/${queryKey[1]}/reviews`
  );
  return data;
};



const addProductReview=async({id,review})=>
{console.log("ID checking",id)
  return await axios.post(`https://obscure-refuge-62167.herokuapp.com/products/${id.id}/reviews` ,review) }

export const useAddReview=(id)=>{console.log("hello world");return useMutation((addProductReview(id)))}