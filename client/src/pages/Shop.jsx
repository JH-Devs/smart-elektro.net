import React from 'react'
import Helmet from '../components/helmet/Helmet'
import {Container, Row, Col} from 'reactstrap'
import Sidebar from '../components/sidebar/Sidebar'
import ProductList from '../components/ui/ProductList'
import products from '../assets/data/products'
import '../styles/shop.css'
import Paginate from '../components/ui/Paginate'
const Shop = () => {
  return (
    <Helmet title={'Shop'}>
      <section className='shop'>
      <Container>
        <Row>
          <Col lg='0'>
          <Sidebar />
          </Col>
          <ProductList data={products}  className='product__shop'/>
          <Paginate />
        </Row>
      </Container>
      </section>
    </Helmet>
  )
}

export default Shop
