import React, { useEffect } from 'react'
import {Container, Row, Col} from 'reactstrap'
import Helmet from '../components/helmet/Helmet'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
import '../styles/home.css'
import gifImg from '../assets/img/hero_gif.gif'
import { useState } from 'react'
import ProductList from '../components/ui/ProductList'
import products from '../assets/data/products'


const Home = () => {
  const [saleProducts, setSaleProducts] = useState([]);
  const [newProducts, setNewProducts] = useState([]);

  useEffect(() => {
    const filteredSaleProducts = products.filter(item => item.hcategory === 'Výprodej')

    setSaleProducts(filteredSaleProducts);

    const filteredNewProducts = products.filter(item => item.hcategory === 'Novinky')
    setNewProducts(filteredNewProducts);
  }, []);

  return (
    <Helmet title={''}>
      <section className="hero__section">
        <Container>
          <Row>

            <Col lg='6' md='6'>
              <div className="hero__content">
                <p className='hero_subtitle'>Poslední kusy skladem </p>
                <h2>Exkluzivní nabídka</h2>
                <p>Nakupte poslední kusy skladem za zvýhodněnou cenu. Doprodej posledních kusů, poté již už k dispozici nebudou. Snažíme se vám nabídnout ty nejnověší technologie a produkty.</p>
                <motion.button whileTap={{scale:1.2}} className='buy__btn'><Link to='/vyprodej'>Prohlédnout produkty</Link></motion.button>
              </div>
            </Col>
            <Col lg='6' md='6' className='hero__col'>
              <img className='hero__img' src={gifImg}  alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      <section  className="sales__products">
        <Container  className='sales'>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className="section__title">Výprodej</h2>
            </Col>
            <ProductList data={saleProducts} />
          </Row>
        </Container>
      </section>
      <section  className="new__products">
        <Container  className='new'>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className="section__title">Novinky</h2>
            </Col>
            <ProductList data={newProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home
