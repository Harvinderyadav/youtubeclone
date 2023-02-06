import React from 'react'
import { useState,useEffect } from 'react'
import { Box,Stack } from '@mui/system'
import { Typography } from '@mui/material'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import Videos from './Videos'

const SearchFeed = () => {
  const [videos ,setVideos] = useState([]);
  const { searchterm} = useParams();

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${searchterm}`)
    .then((data)=> setVideos(data.items))
  },[searchterm]);
  
  return (
    <Box p={2} sx={{overflowY:'auto',
      height:'90vh',flex:2}}>
          <Typography variant="h4" fontWeight="bold" mb={2} sx={{color:'white'}}>
            Search Result for: <span style={{color:'#F31503'}}>{searchterm}</span> videos
          </Typography>
          <Videos videos={videos}/>
        </Box>

    )
}

export default SearchFeed;