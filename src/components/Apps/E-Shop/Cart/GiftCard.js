import React from "react";

const GiftCard = () => {
  return (
    <div className="card gift-card">
      <div className="card-body d-flex gap-3 align-items-center">
        <div>
          <img src="/images/ecommerce/01.gif" alt="ecommerce" className="h-125" />
        </div>
        <div>
          <h6 className="text-primary f-w-600 f-s-18 m-0">
            Buying for a loved one?
          </h6>
          <p className="text-secondary mt-2">
            Gift wrap and personalized message on card, Only for
            <span className="text-dark f-w-500">
              <b>$10.50 USD</b>
            </span>
          </p>
          <div className="cart-gift mt-4">
            <button className="btn btn-primary">Add Gift</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftCard;
