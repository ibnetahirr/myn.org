import React from "react";

const OrderStatus = () => {
  return (
    <div className="col-xxl-3 col-box-4">
      <div className="card">
        <div className="card-header">
          <h5>Order Status</h5>
        </div>
        <div className="card-body">
          <ul className="app-timeline-box order-details-timeline">
            <li className="timeline-section">
              <div className="timeline-icon">
                <span className="text-light-primary h-35 w-35 d-flex-center b-r-50">
                  <i className="ti ti-shopping-cart f-s-20"></i>
                </span>
              </div>
              <div className="timeline-content bg-light-primary b-1-primary">
                <div className="d-flex justify-content-between align-items-center timeline-flex">
                  <h6 className="text-primary mb-0">Order Placed</h6>
                  <p className="badge text-bg-primary ms-2 mb-0">20 Min ago</p>
                </div>
                <p className="mt-2 text-dark">An order has been placed.</p>
                <p className="text-secondary mb-0">Wed, 15 Dec 2024 - 05:34PM</p>
              </div>
            </li>
            <li className="timeline-section">
              <div className="timeline-icon">
                <span className="text-light-secondary h-35 w-35 d-flex-center b-r-50">
                  <i className="ti ti-checks f-s-20"></i>
                </span>
              </div>
              <div className="timeline-content bg-light-secondary b-1-secondary">
                <div className="d-flex justify-content-between align-items-center timeline-flex">
                  <h6 className="text-secondary mb-0">Packed</h6>
                  <p className="text-dark mb-0">50 Min ago</p>
                </div>
                <p className="mt-2">
                  Your Item has been picked up by courier partner
                </p>
                <p className="text-secondary">Thu, 20 Dec 2024 - 6:48AM</p>
                <span className="badge bg-primary-900">Design</span>
                <span className="badge bg-primary-900">HTML</span>
              </div>
            </li>
            <li className="timeline-section">
              <div className="timeline-icon">
                <span className="text-light-success h-35 w-35 d-flex-center b-r-50">
                  <i className="ti ti-truck-delivery f-s-20"></i>
                </span>
              </div>
              <div className="timeline-content bg-light-success b-1-success">
                <div className="d-flex justify-content-between align-items-center timeline-flex">
                  <h6 className="text-success mb-0">Shipping</h6>
                  <span className="badge text-bg-success ms-2">1 hours ago</span>
                </div>
                <p className="mt-2 text-dark">
                  Your Item has been picked up by courier partner
                </p>
                <p className="text-secondary">Thu, 20 Dec 2024 - 5:48AM</p>
              </div>
            </li>
            <li className="timeline-section">
              <div className="timeline-icon">
                <span className="text-light-info h-35 w-35 d-flex-center b-r-50">
                  <i className="ti ti-package f-s-20"></i>
                </span>
              </div>
              <div className="timeline-content bg-light-info b-1-info">
                <div className="d-flex justify-content-between align-items-center timeline-flex">
                  <h6 className="text-info mb-0">Delivered</h6>
                  <span className="badge text-bg-dark ms-2">Nov 10, 14:00</span>
                </div>
                <p className="text-secondary mt-2 mb-0">
                  Mon, 26 Dec 2024 - 5:00AM
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;
