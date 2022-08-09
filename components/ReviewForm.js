import React from "react";
import { useMutation } from "@tanstack/react-query";

import { useFormik } from "formik";
import axios from "axios";
//import{useAddReview} from '../apis/ReviewsApi.js';

export const ReviewForm = ({ id }) => {
  //console.log("Hello IDD",id);
  /*const data= useMutation(i=>{
        return axios.post(`https://obscure-refuge-62167.herokuapp.com/products/${id}/reviews`,i)
    })
    console.log('id.....',id);*/

  const data = useMutation((i) => {
    return axios.post(
      `https://obscure-refuge-62167.herokuapp.com/products/${id}/reviews`,
      i
    );
  });
  // console.log(isError)

  const formik = useFormik({
    initialValues: {
      name: "",
      rating: "", //properties correspond to name attribute of input fields
      review: "",
    },
    onSubmit: (values) => {
      console.log("form data is ", id);
      let obj = {
        name: values.name,
        rating: parseInt(values.rating),
        review: values.review,
        product_id: id,
      };
      //    console.log("before mutate",data)
      data.mutate(obj, {
        onSuccess: () => {
          console.log("success");
          alert("Review Added!");
        },
        onError: (err) => {
          console.log(err);
        },
      });

      console.log("values................", obj);
    },
  });

  return (
    <div className="review-from">
      <h3 style={{ marginLeft: "35px" }}>Create your review</h3>
      <form className="review-from" onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name :</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter Name"
          required
          onChange={formik.handleChange}
          value={formik.values.name}
        ></input>
        <label htmlFor="rating">Rating :</label>
        <input
          type="text"
          id="rating"
          name="rating"
          placeholder="(1-5)"
          required
          onChange={formik.handleChange}
          value={formik.values.rating}
        ></input>
        <label htmlFor="review">Review :</label>
        <input
          type="text"
          id="review"
          name="review"
          placeholder="Enter Review"
          required
          onChange={formik.handleChange}
          value={formik.values.review}
        ></input>
        <button id="btn" className="form-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
