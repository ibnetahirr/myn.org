"use client"
import React from "react";
import Breadcrumbs from "@/components/CommonElements/Breadcrumbs";
import ProductInfo from "./ProductInfo";
import ProductReturns from "./ProductReturns";
import dynamic from "next/dynamic";
const ProductImage = dynamic(() => import("./ProductImage"), { ssr: false });

const ProductDetails = () => {
  return (
    <div className="container-fluid">
      <Breadcrumbs  mainTitle="Product Details" title="Apps" path={["E-shop","Product Details"]}  />
      <div className="row product-details-container">
        <ProductImage />
        <ProductInfo />
        <ProductReturns />
      </div>
    </div>
  );
};

export default ProductDetails;
