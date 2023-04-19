import React from 'react'
import  {Col} from 'reactstrap'
import '../../styles/productCard.css'
import {Link, useNavigate} from 'react-router-dom'
import { motion } from 'framer-motion'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useDispatch} from 'react-redux'
import {toast} from 'react-toastify'
import {cartActions} from '../../redux/slices/cartSlice'

const ProductCard = ({item}) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const addToCart = () => {
    dispatch(cartActions.addItem({
      id: item.id,
      code: item.code,
      productName: item.productName,
      price: item.price,
      imgUrl: item.imgUrl,
    })
    );
    toast.success('Přidáno do košíku')
  };

  const navigateToDetail = () => {
    navigate(`/shop/${item.id}`);
  }

  return (
    <Col lg='3' md='4' className='mb-2'>
      <div className="product__item">
        <div className="product__img" onClick={navigateToDetail}>
          <motion.img whileHover={{scale: 0.9}} src={item.imgUrl} alt="" />
        </div>
        <div className="p-2 product__info">
          <h3 className="product__name"><Link to={`/shop/${item.id}`}>{item.productName}</Link></h3>
          <span className='text-center d-block'>{item.category}</span>
        </div>
        <div className="product__card-bottom d-flex align-items-center justify-content-between p-3">
        <span className="price">{item.price} Kč</span>
        <span className='old__price'>{item.oldPrice} Kč</span>
        <motion.span whileTap={{scale:1.2}} onClick={addToCart} ><ShoppingCartIcon className='icon'/></motion.span>
        </div>
      </div>
    </Col>
  )
}

export default ProductCard