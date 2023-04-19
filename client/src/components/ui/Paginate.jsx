import React, {useState} from 'react'
import products from '../../assets/data/products'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

// dodělat funkčnost
const Paginate = () => {
 
  return (
    <Stack spacing={2} className='pagination'>
    <Pagination count={10} size="small" />
    </Stack>
  )
}

export default Paginate