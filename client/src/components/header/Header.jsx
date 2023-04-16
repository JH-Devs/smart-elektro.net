import React from 'react'
import './header.scss'
import {Container, Row, Col, NavLink} from 'reactstrap'
import logo from '../../assets/img/favicon1.png'
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import profile from '../../assets/img/profile.png'
import {Link} from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';

const nav__links = [
    {
        path:'/',
        display: <HomeIcon />
    },
    {
        path:'/shop',
        display:'Shop',
    },
    {
        path:'/shop',
        display:'Shop',
    },
    {
        path:'/kosik',
        display:'Košík',
    },
    {
        path:'/blog',
        display:'Blog',
    },
    
]

const Header = () => {
  return (
    <div className='header'>
        <Container >
            <Row>
                <div className="nav__wrapper">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <h3>Smart-elektro.net</h3>
                    </div>
                    <div className="navigation">
                        <ul className='menu'>
                            {
                                nav__links.map((item, index) => (
                                    <li className='nav__item' key={index}>
                                        <NavLink id='link' to={item.path} className={(navClass) => navClass.isActive  ? 'nav__active' : ''}>{item.display}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="nav__icons">
                        <span className="fav__icon">
                            <FavoriteIcon className='icon'/>
                            <span className='badge'>0</span>
                        </span>
                        <span className="cart__icon">
                            <ShoppingCartIcon className='icon'/>
                            <span className="badge">2</span>
                        </span>
                        <div className="profile">
                            <img src={profile} alt="" />
                            <div className="profile__actions">
                               <span>odhlásit se</span> 
                               <div className='d-flex align-items-center justify-content-center flex-column'>
                                <Link to='/registrace'></Link>
                                <Link to='/prihlaseni'></Link>
                               </div>
                            </div>
                        </div>
                        <div className='mobile__menu'>
                            <span><MenuIcon /></span>
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    </div>
  )
}


export default Header