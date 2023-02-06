import React from 'react'
import Videos from './Videos';
import ChannelCard from './ChannelCard';
import { useState,useEffect } from 'react';


const ChanneDetail = () => {
    const [channelDetail,setChannelDetail] = useState(null)
    const[Videos,setVideos] = useState([])
    const {id} = useparams();

    useEffect(()=> {
    fetchFromAPI(`channels?.part=snippet&id=${id}`)
    .then((data)=> setChannelDetail(data?.items[0]));

    fetchFromAPI(`search?.channelId=${id}&part=snippet&order=data`)
    .then((data)=> setVideos(data?.items));
    },
    [id])
    return (
      <Box minHeight='95vh'>
        <Box>

        <div style={{background:'linear-gradient(90deg,rgba(0,238,250,1) 0%,rgba(206,3,184,1) 100%,  rgba(0,123,255,1)100%)',zIndex:10,
        height:'300px'}}/>

          <ChannelCard channelDetail={channelDetail}
          margin="-110"/>
      </Box>
      <Box display="flex" p="2">
        <Box sx={{mr:{sm: '100px'}}}/>
        <Video videos={videos}/>
      </Box>
      </Box>

      )
}

export default ChanneDetail;