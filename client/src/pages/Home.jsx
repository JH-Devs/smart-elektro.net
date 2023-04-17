import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import Helmet from '../components/helmet/Helmet'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
import '../styles/home.css'


const Home = () => {

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
              <img className='hero__img' src='https://media.giphy.com/media/pOEbLRT4SwD35IELiQ/giphy.gif' alt="" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home
