import React from "react";
import { useEffect, useState } from "react";
import { useCart } from "../store/cartState";
import { Reviews } from "../components/Reviews";
import { ReviewForm } from "./ReviewForm";
//import { AddToCart } from "./AddToCart";
//import { PlusMinus } from "./PlusMinus";
//import { useRecoilState } from "recoil";

//check with naga or teja plugin for smooth development
export const ProductImage = ({ productData: data, reviewData }) => {
  //const { Id, Name, Description, Image, Quantity, Price } = data;

  //console.log(carte)

  const [img, setImage] = useState("");
  //const[refetch,setRefetch]=useState(false);
  //const [text,setText]=useState("");
  const [cart, setCart] = useCart();
  const [qty, setQty] = useState(0);

  useEffect(() => {
    if (data) {
      const { image } = data;
      setImage(image);
      cart[data.id]
        ? setQty(data.quantity - cart[data.id].quantity)
        : setQty(data.quantity);
    }
  }, [data, cart, data.id]);

  /*convert this handler to useCallback() */
  const handleClick = (color) => {
    if (color === "grey") setImage(data.variants[0].image);
    if (color === "blue") setImage(data.variants[1].image);
  };

  const quantityOfItem = (qty) => {
    if (qty >= 10) return "Available";
    else if (qty <= 10) return "Selling Fast";
    else if (qty === 0) return "Unavailable";
  };
  console.log(qty);

  const addToCart = () => {
    if (typeof cart[data.id] === "undefined") {
      setCart((prevCart) => {
        let newCart = {
          ...prevCart,

          [data.id]: {
            image: data.image,
            name: data.name,
            price: data.price,
            description: data.description,
            totalPrice: data.price,
            quantity: 1,
          },
        };
        console.log(cart);
        console.log(newCart);

        return newCart;
      });
    } else {
      setCart((prevCart) => ({
        ...prevCart,
        [data.id]: {
          ...prevCart[data.id],
          totalPrice:
            (prevCart[data.id].quantity + 1) * prevCart[data.id].price,
          quantity: prevCart[data.id].quantity + 1,
        },
      }));
    }
    console.log(cart[data.id].totalPrice, cart[data.id].quantity);

    setQty((prevQty) => prevQty - 1);
  };

  const removeFromCart = () => {
    cart[data.id].quantity === 1
      ? setCart((prevCart) => {
          let newCart = { ...prevCart };
          delete newCart[data.id];
          return newCart;
        })
      : setCart((prevCart) => ({
          ...prevCart,
          [data.id]: {
            ...prevCart[data.id],
            totalPrice: prevCart[data.id].totalPrice - data.price,
            quantity: prevCart[data.id].quantity - 1,
          },
        }));
    setQty((prevItemsInStock) => prevItemsInStock + 1);
    console.log(cart);
  };

  // console.log(data)
  //console.log("hii");

  return (
    <>
      <div className="container2">
        <div className="child1">
          <img className="pic1" src={img} alt="not there" />
          <div className="child11">
            <div>
              <strong>{data.name}</strong>
            </div>
            <div>Description:{data.description}</div>
            <div>Category:{data.category}</div>
            <div>Total Quantity:{data.quantity}</div>

            <div>Quantity:{quantityOfItem(qty)}</div>
            <div>Price:{data.price}</div>
            <div>
              {" "}
              variants :{" "}
              <span>
                <button
                  className="showpage-button"
                  style={{ backgroundColor: data.variants[0].color }}
                  onClick={(e) => handleClick("grey")}
                ></button>
                <button
                  className="showpage-button-2"
                  style={{ backgroundColor: data.variants[1].color }}
                  onClick={(e) => handleClick("blue")}
                ></button>
              </span>
            </div>
            {!cart[data.id] ? (
              <button
                onClick={(e) => {
                  addToCart();
                }}
                className="addToCartButton"
              >
                Add to Cart
              </button>
            ) : (
              <div>
                <button
                  disabled={!cart[data.id].quantity}
                  onClick={(e) => removeFromCart()}
                >
                  -
                </button>
                {cart[data.id].quantity}
                <button disabled={!qty} onClick={(e) => addToCart()}>
                  +
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="ballo">
          <Reviews reviewData={reviewData} />
          <ReviewForm id={data.id} />
        </div>
      </div>
    </>
  );
};
