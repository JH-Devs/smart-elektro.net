import React, {useState} from 'react'
import './sidebar.css'
import {NavLink} from 'react-router-dom'
import products from '../../assets/data/products'
import SearchIcon from '@mui/icons-material/Search';

const Sidebar = () => {
    const [productsData, setProductsData] = useState(products);
    const handleSearch = (e) => {
        const searchTerm = e.target.value 
        const searchedProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()));
        setProductsData(searchedProducts);
      }

    const categories = [
        {
            id:1,
            name: 'Chytrá domácnost',
            subcategories: [
                {id: 11, name: 'Chytré spotřebice', link:'/shop/chytre-spotrebice'},
                {id: 11, name: 'Kamery', link:'/shop/kamery'},
                {id: 12, name: 'Dětské chůvičky', link:'/shop/chuvicky'},
                {id: 13, name: 'Zásuvky', link:'/shop/zasuvky'},
                {id: 14, name: 'Termostaty', link:'/shop/termostaty'},
                {id: 15, name: 'Zvonky', link:'/shop/zvonky'},
                {id: 16, name: 'Osvětlení', link:'/shop/osvetleni'},
                {id: 17, name: 'Alarmy', link:'/shop/alarmy'},
                {id: 18, name: 'Meteostanice', link:'/shop/meteostanice'},
                {id: 19, name: 'Amazon Alexa', link:'/shop/alexa'},
                {id: 20, name: 'Chytré květináče', link:'/shop/kvetinace'},
                {id: 21, name: 'Google asistant', link:'/shop/asistant'},
            ]
        },
        {
            id:2,
            name: 'Chytré elektro',
            subcategories: [
                {id: 22, name: 'Hodinky', link:'/shop/hodinky'},
                {id: 23, name: 'Prsteny', link:'/shop/prsteny'},
                {id: 24, name: 'Hračky', link:'/shop/hracky'},
            ]
        },
        {
            id:3,
            name: 'Zdraví',
            subcategories: [
                {id: 31, name: 'Zubní kartáčky', link:'/shop/zubni-kartacky'},
                {id: 32, name: 'Váhy', link:'/shop/vahy'},
                {id: 33, name: 'Zvlhčovače vzduchu', link:'/shop/zvlhcovace'},
                {id: 34, name: 'Čističky vzduchu', link:'/shop/cisticky'},
            ]
        },
        {
          id:4,
          name: 'Lokátory',
          subcategories: [
              {id: 31, name: 'GPS moduly', link:'/shop/moduly'},
              {id: 32, name: 'Lokátory', link:'/shop/lokatory'},
          ]
      },
    ];


  return (
    <div className='sidebar'>
        <div className="top">
            <span><h3>Kategorie</h3></span>
        </div>
        <div className="search__box">
              <input type='text' placeholder='Hledat...' onChange={handleSearch} />
              <span><SearchIcon className='icon' /></span>
            </div>
        <div className="center">
          {categories.map((category) => (
            <div key={category.id}>
              <h3 className='category__title'>{category.name}</h3>
              <ul>
                {category.subcategories.map((subcategory) => (
                  <li key={subcategory.id}>
                    <NavLink to={subcategory.link} className={(navClass) => navClass.isActive ? 'nav__active' : ''}>
                      {subcategory.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
</div>

  )
}

export default Sidebar