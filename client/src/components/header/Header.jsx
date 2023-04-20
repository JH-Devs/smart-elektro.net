import React, {useEffect, useRef} from 'react'
import './header.css'
import {Container, Row} from 'reactstrap'
import logo from '../../assets/img/favicon1.png'
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import profile from '../../assets/img/profile.png'
import {NavLink, useNavigate, Link} from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import {motion} from 'framer-motion'
import {toast} from 'react-toastify'


const nav__links = [
    {
        path:'/',
        display: <HomeIcon />
    },
    {
        path:'vyprodej',
        display:'Výprodej',
    },
    {
        path:'shop',
        display:'E-Shop',
    },
    {
        path:'seznam-prani',
        display:'Seznam přání',
    },
    {
        path:'pokladna',
        display:'Pokladna',
    },
    {
        path:'kosik',
        display:'Košík',
    },
    {
        path:'blog',
        display:'Blog',
    },
    
]

const Header = () => {

    const navigate = useNavigate();
    const headerRef = useRef(null);
    // const totalQuantity = useSelector(state=> state.cart.totalQuantity);
    const profileActionRef = useRef(null);
  
    const menuRef = useRef(null);
    // const {currentUser} = useAuth();
  
    const stickyHeaderFunc = () => {
      window.addEventListener('scroll', () => {
        if(document.body.scrollTop > 880 || document.documentElement.scrollTop > 80) {
          headerRef.current.classList.add('sticky__header');
        } else {
          headerRef.current.classList.remove('sticky__header');
        }
      });
    };

{/*   const logout = () => {
    signOut(auth).then(() => {
        toast.success('odhlášení bylo úspěšné');
        navigate('/')
    }).catch(err => {
        toast.error(err.message)
    })
   };   */}

   useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener('scroll', stickyHeaderFunc)
  });
  const menuToggle = () => menuRef.current.classList.toggle('active__menu');

  const navigateToCart = () => {
    navigate('/kosik');
  };
  const navigateToWish = () => {
    navigate('/seznam-prani');
  };
  const toggleProfileActions = () => profileActionRef.current.classList.toggle('show__profileActions');

  return (
    <div className='header' ref={headerRef}>
        <Container >
            <Row>
                <div className="nav__wrapper">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <h3>Smart-elektro.net</h3>
                    </div>
                    <div className="navigation" ref={menuRef} onClick={menuToggle}>
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
            
                    <div className="nav__icons" >
                        <span className="fav__icon" onClick={navigateToWish}>
                            <FavoriteIcon className='icon'/>
                            <span className='badge'>0</span>
                        </span>
                        <span className="cart__icon" onClick={navigateToCart}>
                            <ShoppingCartIcon className='icon'/>
                            <span className="badge">2</span>
                        </span>
                        <div className="profile">
                            <motion.img whileTap={{scale: 1.2}} src={profile} alt="" onClick={toggleProfileActions} />
                            <div className="profile__actions" ref={profileActionRef} onClick={toggleProfileActions}>
                               <span>odhlásit se</span> 
                               <div className='d-flex align-items-center justify-content-center flex-column'>
                                <Link to='/registrace'>Registrace</Link>
                                <Link to='/prihlaseni'>Přihlášení</Link>
                               </div>
                            </div>
                        </div>
                        <div className='mobile__menu'>
                            <span><MenuIcon onClick={menuToggle}/></span>
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    </div>
  )
}


export default Header