import React from "react";

export const Reviews = ({ reviewData }) => {
  return (
    <div className="reviews-align-box">
      <h1 className="reviews-header">Reviews</h1>
      {reviewData.ratings.length ? (
        reviewData.ratings.map((customer) => (
          <div className="rating" key={customer.id}>
            <div className="rating-set">
              <h4>CustomerName : </h4>
              <p>{customer.name}</p>
            </div>
            <div className="rating-set">
              <h4>Review : </h4>
              <p>{customer.review}</p>
            </div>
            <div className="rating-set">
              <h4>Rating : </h4>
              <p>{String.fromCharCode(11088).repeat(customer.rating)}</p>
            </div>
            <hr />
          </div>
        ))
      ) : (
        <h1>No ratings for this product yet!</h1>
      )}
    </div>
  );
};
