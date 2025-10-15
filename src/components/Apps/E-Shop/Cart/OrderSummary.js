import React from "react";

const OrderSummary = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h5>Order Summary</h5>
      </div>
      <div className="card-body">
        <div>
          <div>
            <span className="summary-box bg-light-primary h-40 d-flex-center b-r-30 cart-sale">
              <i className="ti ti-cube-send me-1 text-primary f-s-28"></i>
              <span className="text-dark f-w-500 me-2">Sale Ends in</span>
              <span className="text-primary f-w-600">12 Hours</span>
            </span>
          </div>
          <div className="mt-3 border p-3 b-r-10">
            <div>
              <p>
                Have a <span className="fw-semibold">promo</span> code ?
              </p>
            </div>
            <div className="gap-3 d-flex cart-input">
              <form className="app-form w-100">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter coupon code"
                  aria-label="Add Promo Code here..."
                />
              </form>
              <button type="button" className="btn btn-primary">
                Apply
              </button>
            </div>
          </div>
          <div className="mt-4">
            <div className="table-responsive">
              <table className="table cart-side-table mb-0">
                <tbody>
                  <tr className="total-price">
                    <th>Sub Total :</th>
                    <th className="text-end" id="cart-subtotal">
                      $ 359.96
                    </th>
                  </tr>
                  <tr>
                    <td>Discount:</td>
                    <td className="text-end" id="cart-discount">
                      - $ 53.00
                    </td>
                  </tr>
                  <tr>
                    <td>Shipping Charge :</td>
                    <td className="text-end" id="cart-shipping">
                      $ 65.00
                    </td>
                  </tr>
                  <tr>
                    <td>Estimated Tax (12.5%) : </td>
                    <td className="text-end" id="cart-tax">
                      $ 44.99
                    </td>
                  </tr>
                  <tr className="total-price">
                    <th>Total (USD) :</th>
                    <th className="text-end">
                      <span id="cart-total">$415.96</span>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
