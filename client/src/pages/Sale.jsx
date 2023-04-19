import React, {useState, useEffect} from 'react'
import { Container, Row, Col } from 'reactstrap'
import ProductList from '../components/ui/ProductList'
import products from '../assets/data/products'
import Paginate from '../components/ui/Paginate'


const Sale = () => {
  const [saleProducts, setSaleProducts] = useState([]);


  useEffect(() => {
    const filteredSaleProducts = products.filter(item => item.category === 'Výprodej')

    setSaleProducts(filteredSaleProducts);
    
  }, []);

   
  return (
    <section className="sales__products">
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className="section__title">Výprodej</h2>
          </Col>
          <ProductList data={saleProducts} />
      </Row>
      <Paginate/>
    </Container>
    </section>
  )
}

export default Sale