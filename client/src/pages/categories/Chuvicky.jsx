import React from 'react'
import Helmet from '../../components/helmet/Helmet'
import Sidebar from '../../components/sidebar/Sidebar'
import ProductList from '../../components/ui/ProductList'
import Paginate from '../../components/ui/Paginate'
import chuvicky from '../../assets/data/chuvicky'
import Filter from '../../components/ui/Filter'

const Chuvicky = () => {
  return (
    <Helmet title={'Dětské chůvičky'}>
    <Filter />
    <section className='shop'>
    <div class="shop__row">
      <div class="col1" >
        <Sidebar />
      </div>
      <div class="col2" >
        <ProductList data={chuvicky} className='product__shop'  />
    </div>
  </div>
</section>
  <div className="paginate">
    <Paginate className='paginate' />
  </div>
  </Helmet>
  )
}

export default Chuvicky