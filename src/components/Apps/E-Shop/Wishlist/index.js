import Breadcrumbs from '@/components/CommonElements/Breadcrumbs'
import React from 'react'
import ProductGrid from './ProductGrid'

const Wishlist = () => {
  return (
    <div className="container-fluid">
    <Breadcrumbs
        mainTitle="Wishlist"
        title="Apps"
        path={["E-shop", "Wishlist"]}
      />
    <div className="row wishlist-container">
      <ProductGrid />
    </div>
  </div>
  )
}

export default Wishlist