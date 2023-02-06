import React from 'react'
import { Box,CardMed,display } from '@mui/system'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import CardContent from '@mui/material/CardContent';
import { demoProfilePicture} from '../utils/constants'
import { CardMedia} from '@mui/material'
import { Typography } from '@mui/material';

const ChannelCard = ({channelDetail}) => {
  <Box 
  sx={{
    boxShadow :'none',
    borderRadius:'20px',
    display:'flex',
    alignItems:'center',
    width:{xs:'356px',md:'320px'},
    height:'326px',
    margin:'auto'
  }}>
    <Link to={'./channelDetail?.id?.channelId'}>
      <CardContent sx={{display:'flex',flexDirection:'column',justifycontent:'center',textAlign:'center',color:'#fff'}}>
        <CardMedia
        image={channelDetail?.snippet?.thumbnail?.high?.url|| demoProfilePicture}
      alt={channelDetail?.snippet?.title}
      sx={{borderRadius:'50%',height:'180px',
    width:'180px',mb:'2',border:'1px solid red'}}/>
    <Typography variant="h6">
      {channelDetail?.snippet?.title}
      <CheckCircle sx={{fontsize:14,color:'gray',ml:'5px'}}/>  
    </Typography>
    <Typography>
      {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()}Subscribers
    </Typography>
      </CardContent>
    </Link>
  </Box>
}

export default ChannelCard