import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { ProductImage } from "../components/ProductImage";
import { getSpecificProduct } from "../apis/ProductApis";
import { getProductReviews } from "../apis/ReviewsApi";
export const Product = () => {
  const params = useParams();
  const productId = params.Id;

  const {
    data: productData,
    isLoading: isproductLoading,
    isError: isproductError,
    error: productError,
  } = useQuery(["unique-key", productId], getSpecificProduct);

  const {
    data: reviewData,
    isLoading: isreviewLoading,
    isError: isreviewError,
    error: reviewError,
  } = useQuery(["unique-key2", productId], getProductReviews);

  // console.log(data)
  if (isproductLoading || isreviewLoading) return "Loading";
  if (isproductError || isreviewError)
    return (
      "An error has occured " +
      (
        <h1>
          {" "}
          {productError.message} && {reviewError.message}
        </h1>
      )
    );

  return (
    <>
      {console.log("bye")}
      <ProductImage productData={productData} reviewData={reviewData} />
    </>
  );
};
