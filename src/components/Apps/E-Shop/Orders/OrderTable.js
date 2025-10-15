import React from "react";
import {Card, CardBody, Col} from "reactstrap";

const OrderTable = () => {
  return (
    <Col xs={12}>
      <Card>
        <CardBody className="order-tab-content">
          <div className="tab-content" id="OutlineContent">
            <div
              className="tab-pane fade active show"
              id="connect-tab-pane"
              role="tabpanel"
              aria-labelledby="connect-tab"
              tabIndex="0"
            >
              <div className="app-scroll order-list-table table-responsive">
                <table className="table table-bottom-border align-middle mb-0">
                  <thead>
                    <tr>
                      <th>
                        <input
                          className="form-check-input outline-form-check-input"
                          type="checkbox"
                          id="ordercheckhead"
                          value="option1"
                        />
                      </th>
                      <th>Order Id</th>
                      <th scope="col" className="text-start">
                        Customer
                      </th>
                      <th scope="col">Product</th>
                      <th scope="col">Status</th>
                      <th scope="col">Order Date</th>
                      <th scope="col">Amount</th>
                      <th scope="col">payment Method</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input
                          className="form-check-input outline-form-check-input"
                          type="checkbox"
                          id="ordercheck1"
                          value="option1"
                        />
                      </td>
                      <td className="f-w-600">#LA098</td>
                      <td>Bette Hagenes</td>
                      <td className="text-secondary">Mens Zen Walking Shoes</td>
                      <td>
                        <span className="badge text-light-info">CANCELLED</span>
                      </td>
                      <td>5 Apr,2024 6:05 PM</td>
                      <td className="f-w-500 text-warning">$590</td>
                      <td>Mastercard</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-light-primary icon-btn w-30 h-30 b-r-8 me-2"
                        >
                          <i className="ti ti-eye"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light-success icon-btn w-30 h-30 b-r-8 me-2"
                        >
                          <i className="ti ti-edit"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light-danger icon-btn w-30 h-30 b-r-8"
                        >
                          <i className="ti ti-trash"></i>
                        </button>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <input
                          className="form-check-input outline-form-check-input"
                          type="checkbox"
                          id="mailcheck"
                          value="option1"
                        />
                      </td>
                      <td className="f-w-600">#LA19</td>
                      <td>mens Fanatic Shoe</td>
                      <td className="text-secondary">Mens Zen Walking Shoes</td>
                      <td>
                        <span className="badge text-light-danger">DELIVERED</span>
                      </td>
                      <td>8 july,2024 1:15 PM</td>
                      <td className="f-w-500 text-warning">$410</td>
                      <td>Visa</td>

                      <td>
                        <button
                          type="button"
                          className="btn btn-light-primary icon-btn w-30 h-30 b-r-8 me-2"
                        >
                          <i className="ti ti-eye"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light-success icon-btn w-30 h-30 b-r-8 me-2"
                        >
                          <i className="ti ti-edit"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light-danger icon-btn w-30 h-30 b-r-8"
                        >
                          <i className="ti ti-trash"></i>
                        </button>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <input
                          className="form-check-input outline-form-check-input"
                          type="checkbox"
                          id="ordercheck2"
                          value="option1"
                        />
                      </td>
                      <td className="f-w-600">#LA025</td>
                      <td>Fleta Walsh</td>
                      <td className="text-secondary">Mens Exquisite Formal </td>
                      <td>
                        <span className="badge text-light-primary">INPROGRESS</span>
                      </td>
                      <td>5 sep,2024 5:11PM</td>
                      <td className="f-w-500 text-warning">$75</td>
                      <td> Cod</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-light-primary icon-btn w-30 h-30 b-r-8 me-2"
                        >
                          <i className="ti ti-eye"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light-success icon-btn w-30 h-30 b-r-8 me-2"
                        >
                          <i className="ti ti-edit"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light-danger icon-btn w-30 h-30 b-r-8"
                        >
                          <i className="ti ti-trash"></i>
                        </button>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <input
                          className="form-check-input outline-form-check-input"
                          type="checkbox"
                          id="ordercheck3"
                          value="option1"
                        />
                      </td>
                      <td className="f-w-600">#LA050</td>
                      <td>Bette Hagenes</td>
                      <td className="text-secondary">Men's Sports Shoes</td>
                      <td>
                        <span className="badge text-light-success">PICKUPS</span>
                      </td>
                      <td>9 jan,2024 2:41PM</td>
                      <td className="f-w-500 text-warning">$111</td>
                      <td>Paypal</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-light-primary icon-btn w-30 h-30 b-r-8 me-2"
                        >
                          <i className="ti ti-eye"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light-success icon-btn w-30 h-30 b-r-8 me-2"
                        >
                          <i className="ti ti-edit"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light-danger icon-btn w-30 h-30 b-r-8"
                        >
                          <i className="ti ti-trash"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          className="form-check-input outline-form-check-input"
                          type="checkbox"
                          id="ordercheck4"
                          value="option1"
                        />
                      </td>
                      <td className="f-w-600">#LA123</td>
                      <td>Emery McKenzie</td>
                      <td className="text-secondary">Leather jacket for men</td>
                      <td>
                        <span className="badge text-light-danger">DELIVERED</span>
                      </td>
                      <td>1 jan,2024 4:00PM</td>
                      <td className="f-w-500 text-warning">$20</td>
                      <td>Mastercard</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-light-primary icon-btn w-30 h-30 b-r-8 me-2"
                        >
                          <i className="ti ti-eye"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light-success icon-btn w-30 h-30 b-r-8 me-2"
                        >
                          <i className="ti ti-edit"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light-danger icon-btn w-30 h-30 b-r-8"
                        >
                          <i className="ti ti-trash"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          className="form-check-input outline-form-check-input"
                          type="checkbox"
                          id="ordercheck5"
                          value="option1"
                        />
                      </td>
                      <td className="f-w-600">#LA044</td>
                      <td>Fleta Walsh</td>
                      <td className="text-secondary"> Apple Watch Series 5</td>
                      <td>
                        <span className="badge text-light-secondary">RETURNS</span>
                      </td>
                      <td>10 feb,2024 6:11PM</td>
                      <td className="f-w-500 text-warning">$75</td>
                      <td> Visa</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-light-primary icon-btn w-30 h-30 b-r-8 me-2"
                        >
                          <i className="ti ti-eye"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light-success icon-btn w-30 h-30 b-r-8 me-2"
                        >
                          <i className="ti ti-edit"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light-danger icon-btn w-30 h-30 b-r-8"
                        >
                          <i className="ti ti-trash"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          className="form-check-input outline-form-check-input"
                          type="checkbox"
                          id="ordercheck6"
                          value="option1"
                        />
                      </td>
                      <td className="f-w-600">#LA022</td>
                      <td>Bette Hagenes</td>
                      <td className="text-secondary">Amazon Brand - House</td>
                      <td>
                        <span className="badge text-light-primary">INPROGRESS</span>
                      </td>
                      <td>15 oct,2024 1:51PM</td>
                      <td className="f-w-500 text-warning"> $999</td>
                      <td>Paypal</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-light-primary icon-btn w-30 h-30 b-r-8 me-2"
                        >
                          <i className="ti ti-eye"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light-success icon-btn w-30 h-30 b-r-8 me-2"
                        >
                          <i className="ti ti-edit"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light-danger icon-btn w-30 h-30 b-r-8"
                        >
                          <i className="ti ti-trash"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          className="form-check-input outline-form-check-input"
                          type="checkbox"
                          id="ordercheck7"
                          value="option1"
                        />
                      </td>
                      <td className="f-w-600">#LA033</td>
                      <td>Fleta Walsh</td>
                      <td className="text-secondary">Iconic Smart Watch</td>
                      <td>
                        <span className="badge text-light-success">PICKUPS</span>
                      </td>
                      <td>19 oct,2024 6:55PM</td>
                      <td className="f-w-500 text-warning"> $165</td>
                      <td>Visa</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-light-primary icon-btn w-30 h-30 b-r-8 me-2"
                        >
                          <i className="ti ti-eye"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light-success icon-btn w-30 h-30 b-r-8 me-2"
                        >
                          <i className="ti ti-edit"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light-danger icon-btn w-30 h-30 b-r-8"
                        >
                          <i className="ti ti-trash"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          className="form-check-input outline-form-check-input"
                          type="checkbox"
                          id="ordercheck8"
                          value="option1"
                        />
                      </td>
                      <td className="f-w-600">#LA098</td>
                      <td>Lenora Bogisich</td>
                      <td className="text-secondary">Leather jacket for men</td>
                      <td>
                        <span className="badge text-light-primary">INPROGRESS</span>
                      </td>
                      <td>21 nov,2024 7:00PM</td>
                      <td className="f-w-500 text-warning"> $70</td>
                      <td>Paypal</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-light-primary icon-btn w-30 h-30 b-r-8 me-2"
                        >
                          <i className="ti ti-eye"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light-success icon-btn w-30 h-30 b-r-8 me-2"
                        >
                          <i className="ti ti-edit"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light-danger icon-btn w-30 h-30 b-r-8"
                        >
                          <i className="ti ti-trash"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="discover-tab-pane"
              role="tabpanel"
              aria-labelledby="discover-tab"
              tabIndex="0"
            >
              <div className="app-scroll order-list-table table-responsive">
                <table className="table table-bottom-border align-middle mb-0">
                  <thead>
                    <tr>
                      <th>
                        <input
                          className="form-check-input outline-form-check-input"
                          type="checkbox"
                          id="ordercheckhead1"
                          value="option1"
                        />
                      </th>
                      <th>Order Id</th>
                      <th scope="col" className="text-start">
                        Customer
                      </th>
                      <th scope="col">Product</th>
                      <th scope="col">Status</th>
                      <th scope="col">Order Date</th>
                      <th scope="col">Amount</th>
                      <th scope="col">payment Method</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input
                          className="form-check-input outline-form-check-input"
                          type="checkbox"
                          id="ordercheck9"
                          value="option1"
                        />
                      </td>
                      <td className="f-w-600">#LA098</td>
                      <td>Bette Hagenes</td>
                      <td className="text-secondary">Mens Walking Shoe</td>
                      <td>
                        <span className="badge text-light-info">CANCELLED</span>
                      </td>
                      <td>5 Apr,2024 6:05 PM</td>
                      <td className="f-w-500 text-warning">$590</td>
                      <td>Mastercard</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-light-primary icon-btn w-30 h-30 b-r-8 me-2"
                        >
                          <i className="ti ti-eye"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light-success icon-btn w-30 h-30 b-r-8 me-2"
                        >
                          <i className="ti ti-edit"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light-danger icon-btn w-30 h-30 b-r-8"
                        >
                          <i className="ti ti-trash"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          className="form-check-input outline-form-check-input"
                          type="checkbox"
                          id="ordercheck10"
                          value="option1"
                        />
                      </td>
                      <td className="f-w-600">#LA19</td>
                      <td>mens Fanatic Shoe</td>
                      <td className="text-secondary">Mens Walking Shoe</td>
                      <td>
                        <span className="badge text-light-danger">DELIVERED</span>
                      </td>
                      <td>8 july,2024 1:15 PM</td>
                      <td className="f-w-500 text-warning">$410</td>
                      <td>Visa</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-light-primary icon-btn w-30 h-30 b-r-8 me-2"
                        >
                          <i className="ti ti-eye"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light-success icon-btn w-30 h-30 b-r-8 me-2"
                        >
                          <i className="ti ti-edit"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light-danger icon-btn w-30 h-30 b-r-8"
                        >
                          <i className="ti ti-trash"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          className="form-check-input outline-form-check-input"
                          type="checkbox"
                          id="ordercheck11"
                          value="option1"
                        />
                      </td>
                      <td className="f-w-600">#LA025</td>
                      <td>Fleta Walsh</td>
                      <td className="text-secondary">Mens Exquisite Formal </td>
                      <td>
                        <span className="badge text-light-primary">INPROGRESS</span>
                      </td>
                      <td>5 sep,2024 5:11PM</td>
                      <td className="f-w-500 text-warning">$75</td>
                      <td> Cod</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-light-primary icon-btn w-30 h-30 b-r-8 me-2"
                        >
                          <i className="ti ti-eye"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light-success icon-btn w-30 h-30 b-r-8 me-2"
                        >
                          <i className="ti ti-edit"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light-danger icon-btn w-30 h-30 b-r-8"
                        >
                          <i className="ti ti-trash"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="order-tab-pane"
              role="tabpanel"
              aria-labelledby="order-tab"
              tabIndex="0"
            >
              <div className="app-scroll order-list-table table-responsive">
                <table className="table table-bottom-border align-middle mb-0">
                  <thead>
                    <tr>
                      <th>
                        <input
                          className="form-check-input outline-form-check-input"
                          type="checkbox"
                          id="ordercheckhead2"
                          value="option1"
                        />
                      </th>
                      <th>Order Id</th>
                      <th scope="col" className="text-start">
                        Customer
                      </th>
                      <th scope="col">Product</th>
                      <th scope="col">Status</th>
                      <th scope="col">Order Date</th>
                      <th scope="col">Amount</th>
                      <th scope="col">payment Method</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input
                          className="form-check-input outline-form-check-input"
                          type="checkbox"
                          id="ordercheck12"
                          value="option1"
                        />
                      </td>
                      <td className="f-w-600">#LA098</td>
                      <td>Bette Hagenes</td>
                      <td className="text-secondary">Mens Walking Shoe</td>
                      <td>
                        <span className="badge text-light-info">CANCELLED</span>
                      </td>
                      <td>5 Apr,2024 6:05 PM</td>
                      <td className="f-w-500 text-warning">$590</td>
                      <td>Mastercard</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-light-primary icon-btn w-30 h-30 b-r-8 me-2"
                        >
                          <i className="ti ti-eye"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light-success icon-btn w-30 h-30 b-r-8 me-2"
                        >
                          <i className="ti ti-edit"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light-danger icon-btn w-30 h-30 b-r-8"
                        >
                          <i className="ti ti-trash"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          className="form-check-input outline-form-check-input"
                          type="checkbox"
                          id="ordercheck13"
                          value="option1"
                        />
                      </td>
                      <td className="f-w-600">#LA19</td>
                      <td>mens Fanatic Shoe</td>
                      <td className="text-secondary">Mens Zen Walking Shoes</td>
                      <td>
                        <span className="badge text-light-danger">DELIVERED</span>
                      </td>
                      <td>8 july,2024 1:15 PM</td>
                      <td className="f-w-500 text-warning">$410</td>
                      <td>Visa</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-light-primary icon-btn w-30 h-30 b-r-8 me-2"
                        >
                          <i className="ti ti-eye"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light-success icon-btn w-30 h-30 b-r-8 me-2"
                        >
                          <i className="ti ti-edit"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light-danger icon-btn w-30 h-30 b-r-8"
                        >
                          <i className="ti ti-trash"></i>
                        </button>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <input
                          className="form-check-input outline-form-check-input"
                          type="checkbox"
                          id="ordercheck14"
                          value="option1"
                        />
                      </td>
                      <td className="f-w-600">#LA025</td>
                      <td>Fleta Walsh</td>
                      <td className="text-secondary">Mens Exquisite Formal</td>
                      <td>
                        <span className="badge text-light-primary">INPROGRESS</span>
                      </td>
                      <td>5 sep,2024 5:11PM</td>
                      <td className="f-w-500 text-warning">$75</td>
                      <td> Cod</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-light-primary icon-btn w-30 h-30 b-r-8 me-2"
                        >
                          <i className="ti ti-eye"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light-success icon-btn w-30 h-30 b-r-8 me-2"
                        >
                          <i className="ti ti-edit"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light-danger icon-btn w-30 h-30 b-r-8"
                        >
                          <i className="ti ti-trash"></i>
                        </button>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <input
                          className="form-check-input outline-form-check-input"
                          type="checkbox"
                          id="ordercheck15"
                          value="option1"
                        />
                      </td>
                      <td className="f-w-600">#LA098</td>
                      <td>Bette Hagenes</td>
                      <td className="text-secondary">Mens Walking Shoe</td>
                      <td>
                        <span className="badge text-light-info">CANCELLED</span>
                      </td>
                      <td>5 Apr,2024 6:05 PM</td>
                      <td className="f-w-500 text-warning">$590</td>
                      <td>Mastercard</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-light-primary icon-btn w-30 h-30 b-r-8 me-2"
                        >
                          <i className="ti ti-eye"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light-success icon-btn w-30 h-30 b-r-8 me-2"
                        >
                          <i className="ti ti-edit"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light-danger icon-btn w-30 h-30 b-r-8"
                        >
                          <i className="ti ti-trash"></i>
                        </button>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <input
                          className="form-check-input outline-form-check-input"
                          type="checkbox"
                          id="ordercheck16"
                          value="option1"
                        />
                      </td>
                      <td className="f-w-600">#LA19</td>
                      <td>mens Fanatic Shoe</td>
                      <td className="text-secondary">Mens Walking Shoe</td>
                      <td>
                        <span className="badge text-light-danger">DELIVERED</span>
                      </td>
                      <td>8 july,2024 1:15 PM</td>
                      <td className="f-w-500 text-warning">$410</td>
                      <td>Visa</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-light-primary icon-btn w-30 h-30 b-r-8 me-2"
                        >
                          <i className="ti ti-eye"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light-success icon-btn w-30 h-30 b-r-8 me-2"
                        >
                          <i className="ti ti-edit"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light-danger icon-btn w-30 h-30 b-r-8"
                        >
                          <i className="ti ti-trash"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          className="form-check-input outline-form-check-input"
                          type="checkbox"
                          id="ordercheck17"
                          value="option1"
                        />
                      </td>
                      <td className="f-w-600">#LA025</td>
                      <td>Fleta Walsh</td>
                      <td className="text-secondary">Mens Exquisite Formal</td>
                      <td>
                        <span className="badge text-light-primary">INPROGRESS</span>
                      </td>
                      <td>5 sep,2024 5:11PM</td>
                      <td className="f-w-500 text-warning">$75</td>
                      <td> Cod</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-light-primary icon-btn w-30 h-30 b-r-8 me-2"
                        >
                          <i className="ti ti-eye"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light-success icon-btn w-30 h-30 b-r-8 me-2"
                        >
                          <i className="ti ti-edit"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light-danger icon-btn w-30 h-30 b-r-8"
                        >
                          <i className="ti ti-trash"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          className="form-check-input outline-form-check-input"
                          type="checkbox"
                          id="ordercheck18"
                          value="option1"
                        />
                      </td>
                      <td className="f-w-600">#LA19</td>
                      <td>mens Fanatic Shoe</td>
                      <td className="text-secondary">Mens Zen Walking Shoes</td>
                      <td>
                        <span className="badge text-light-danger">DELIVERED</span>
                      </td>
                      <td>8 july,2024 1:15 PM</td>
                      <td className="f-w-500 text-warning">$410</td>
                      <td>Visa</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-light-primary icon-btn w-30 h-30 b-r-8 me-2"
                        >
                          <i className="ti ti-eye"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light-success icon-btn w-30 h-30 b-r-8 me-2"
                        >
                          <i className="ti ti-edit"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light-danger icon-btn w-30 h-30 b-r-8"
                        >
                          <i className="ti ti-trash"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          className="form-check-input outline-form-check-input"
                          type="checkbox"
                          id="ordercheck19"
                          value="option1"
                        />
                      </td>
                      <td className="f-w-600">#LA025</td>
                      <td>Fleta Walsh</td>
                      <td className="text-secondary">Mens Exquisite Formal</td>
                      <td>
                        <span className="badge text-light-primary">INPROGRESS</span>
                      </td>
                      <td>5 sep,2024 5:11PM</td>
                      <td className="f-w-500 text-warning">$75</td>
                      <td> Cod</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-light-primary icon-btn w-30 h-30 b-r-8 me-2"
                        >
                          <i className="ti ti-eye"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light-success icon-btn w-30 h-30 b-r-8 me-2"
                        >
                          <i className="ti ti-edit"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light-danger icon-btn w-30 h-30 b-r-8"
                        >
                          <i className="ti ti-trash"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="order-tab-returns"
              role="tabpanel"
              aria-labelledby="order-tab"
              tabIndex="0"
            >
              <div className="app-scroll order-list-table table-responsive">
                <table className="table table-bottom-border align-middle mb-0">
                  <thead>
                    <tr>
                      <th>
                        <input
                          className="form-check-input outline-form-check-input"
                          type="checkbox"
                          id="ordercheckhead3"
                          value="option1"
                        />
                      </th>
                      <th>Order Id</th>
                      <th scope="col" className="text-start">
                        Customer
                      </th>
                      <th scope="col">Product</th>
                      <th scope="col">Status</th>
                      <th scope="col">Order Date</th>
                      <th scope="col">Amount</th>
                      <th scope="col">payment Method</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input
                          className="form-check-input outline-form-check-input"
                          type="checkbox"
                          id="ordercheck20"
                          value="option1"
                        />
                      </td>
                      <td className="f-w-600">#LA098</td>
                      <td>Bette Hagenes</td>
                      <td className="text-secondary">Mens Walking Shoe</td>
                      <td>
                        <span className="badge text-light-info">CANCELLED</span>
                      </td>
                      <td>5 Apr,2024 6:05 PM</td>
                      <td className="f-w-500 text-warning">$590</td>
                      <td>Mastercard</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-light-primary icon-btn w-30 h-30 b-r-8 me-2"
                        >
                          <i className="ti ti-eye"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light-success icon-btn w-30 h-30 b-r-8 me-2"
                        >
                          <i className="ti ti-edit"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light-danger icon-btn w-30 h-30 b-r-8"
                        >
                          <i className="ti ti-trash"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          className="form-check-input outline-form-check-input"
                          type="checkbox"
                          id="ordercheck21"
                          value="option1"
                        />
                      </td>
                      <td className="f-w-600">#LA19</td>
                      <td>mens Fanatic Shoe</td>
                      <td className="text-secondary">Mens Zen Walking Shoes</td>
                      <td>
                        <span className="badge text-light-danger">DELIVERED</span>
                      </td>
                      <td>8 july,2024 1:15 PM</td>
                      <td className="f-w-500 text-warning">$410</td>
                      <td>Visa</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-light-primary icon-btn w-30 h-30 b-r-8 me-2"
                        >
                          <i className="ti ti-eye"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light-success icon-btn w-30 h-30 b-r-8 me-2"
                        >
                          <i className="ti ti-edit"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light-danger icon-btn w-30 h-30 b-r-8"
                        >
                          <i className="ti ti-trash"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          className="form-check-input outline-form-check-input"
                          type="checkbox"
                          id="ordercheck22"
                          value="option1"
                        />
                      </td>
                      <td className="f-w-600">#LA025</td>
                      <td>Fleta Walsh</td>
                      <td className="text-secondary">Mens Exquisite Formal</td>
                      <td>
                        <span className="badge text-light-primary">INPROGRESS</span>
                      </td>
                      <td>5 sep,2024 5:11PM</td>
                      <td className="f-w-500 text-warning">$75</td>
                      <td> Cod</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-light-primary icon-btn w-30 h-30 b-r-8 me-2"
                        >
                          <i className="ti ti-eye"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light-success icon-btn w-30 h-30 b-r-8 me-2"
                        >
                          <i className="ti ti-edit"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light-danger icon-btn w-30 h-30 b-r-8"
                        >
                          <i className="ti ti-trash"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          className="form-check-input outline-form-check-input"
                          type="checkbox"
                          id="ordercheck23"
                          value="option1"
                        />
                      </td>
                      <td className="f-w-600">#LA19</td>
                      <td>mens Fanatic Shoe</td>
                      <td className="text-secondary">Mens Zen Walking Shoes</td>
                      <td>
                        <span className="badge text-light-danger">DELIVERED</span>
                      </td>
                      <td>8 july,2024 1:15 PM</td>
                      <td className="f-w-500 text-warning">$410</td>
                      <td>Visa</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-light-primary icon-btn w-30 h-30 b-r-8 me-2"
                        >
                          <i className="ti ti-eye"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light-success icon-btn w-30 h-30 b-r-8 me-2"
                        >
                          <i className="ti ti-edit"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light-danger icon-btn w-30 h-30 b-r-8"
                        >
                          <i className="ti ti-trash"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="order-tab-cancelled"
              role="tabpanel"
              aria-labelledby="order-tab"
              tabIndex="0"
            >
              <div className="app-scroll order-list-table table-responsive  data-table-style">
                <table className="table table-bottom-border align-middle mb-0">
                  <thead>
                    <tr>
                      <th>
                        <input
                          className="form-check-input outline-form-check-input"
                          type="checkbox"
                          id="mailcheck4"
                          value="option1"
                        />
                      </th>
                      <th>Order Id</th>
                      <th scope="col" className="text-start">
                        Customer
                      </th>
                      <th scope="col">Product</th>
                      <th scope="col">Status</th>
                      <th scope="col">Order Date</th>
                      <th scope="col">Amount</th>
                      <th scope="col">payment Method</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input
                          className="form-check-input outline-form-check-input"
                          type="checkbox"
                          id="ordercheck24"
                          value="option1"
                        />
                      </td>
                      <td className="f-w-600">#LA098</td>
                      <td>Bette Hagenes</td>
                      <td className="text-secondary">Mens Walking Shoe</td>
                      <td>
                        <span className="badge text-light-info">CANCELLED</span>
                      </td>
                      <td>5 Apr,2024 6:05 PM</td>
                      <td className="f-w-500 text-warning">$590</td>
                      <td>Mastercard</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-light-primary icon-btn w-30 h-30 b-r-8 me-2 "
                        >
                          <i className="ti ti-eye"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light-success icon-btn w-30 h-30 b-r-8 me-2 "
                        >
                          <i className="ti ti-edit"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light-danger icon-btn w-30 h-30 b-r-8"
                        >
                          <i className="ti ti-trash"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          className="form-check-input outline-form-check-input"
                          type="checkbox"
                          id="ordercheck25"
                          value="option1"
                        />
                      </td>
                      <td className="f-w-600">#LA19</td>
                      <td>mens Fanatic Shoe</td>
                      <td className="text-secondary">Mens Walking Shoe</td>
                      <td>
                        <span className="badge text-light-danger">DELIVERED</span>
                      </td>
                      <td>8 july,2024 1:15 PM</td>
                      <td className="f-w-500 text-warning">$410</td>
                      <td>Visa</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-light-primary icon-btn w-30 h-30 b-r-8 me-2 "
                        >
                          <i className="ti ti-eye"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light-success icon-btn w-30 h-30 b-r-8 me-2 "
                        >
                          <i className="ti ti-edit"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-light-danger icon-btn w-30 h-30 b-r-8"
                        >
                          <i className="ti ti-trash"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default OrderTable;
