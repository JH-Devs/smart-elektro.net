import React, {useState} from 'react'
import Helmet from '../components/helmet/Helmet'
import Sidebar from '../components/sidebar/Sidebar'
import ProductList from '../components/ui/ProductList'
import products from '../assets/data/products'
import '../styles/shop.css'
import Paginate from '../components/ui/Paginate'

const Shop = () => {
  return (
    <Helmet title={'Shop'}>
      <section className='shop'>
      <div className="shop__row">
        <div className="col1">
          <Sidebar />
        </div>
        <div className="col2">
          <ProductList  data={products} className='product__shop' />
      </div>
    </div>
  </section>
    <div className="paginate">
      <Paginate className='paginate' />
    </div>
    </Helmet>
  )
}

export default Shop

