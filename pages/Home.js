import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Product } from "./Product.js";
//import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { Card } from "../components/Card";
import { getAllProducts } from "../apis/ProductApis";

//import axios from 'axios';
export const Home = () => {
  const { isLoading, error, isError, data } = useQuery(
    ["unique"],
    getAllProducts
  );
  if (isLoading) return "Loading";
  if (error) return "An error has occured " + error.message;

  return (
    //Put everything after button in  COMPONENT
    //use link instead of button ,Use map
    <>
      <div className="second-container">
        <h1 style={{ marginLeft: "60px" }}>Products</h1>
        <button className="button-create-product">Create Product</button>
      </div>
      <div className="container">
        {data.map((element) => {
          return (
            <Link to={`/products/${element["id"]}`} key={element.id}>
              <Card data={element} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
