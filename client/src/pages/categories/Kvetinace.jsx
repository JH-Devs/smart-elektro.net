import React from 'react'
import Helmet from '../../components/helmet/Helmet'
import Sidebar from '../../components/sidebar/Sidebar'
import ProductList from '../../components/ui/ProductList'
//import kamery from '../../assets/data/kamery'
import Paginate from '../../components/ui/Paginate'
import Filter from '../../components/ui/Filter'

const Kvetinace = () => {
 
  return (
    <Helmet title={'Kamery'}>
      <Filter />
    <section className='shop'>
    <div class="shop__row">
      <div class="col1" >
        <Sidebar />
      </div>
      <div class="col2" >
        <ProductList className='product__shop'  />
    </div>
  </div>
</section>
  <div className="paginate">
    <Paginate className='paginate' />
  </div>
  </Helmet>
  )
}

export default Kvetinace