import React from 'react'
import { Stack } from '@mui/system'
import { Link } from 'react-router-dom'
import {logo} from '../utils/constants';
import SearchBar from './SearchBar';


const Navbar = () => {
  return (
    <Stack
    direction='row'
    alignItems="center"
    p={2}
    sx={{position:'sticky',background:'black',top:'0',justifycontent:'space-between'
    }}>
    <Link to="./" style={{display:'flex', alignItem:'center'}}>
      <img src={logo} alt='logo' height={45}/>
    </Link>
    <SearchBar/>
    </Stack>  
  )
}
export default Navbar;