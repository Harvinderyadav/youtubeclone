import './App.css';
import { Route,Routes,BrowserRouter} from 'react-router-dom'; 
import { Box } from '@mui/system';
import Feed from './Component/Feed';
import Navbar from './Component/Navbar';
import VideoDetail from './Component/VideoDetail';
import SearchFeed from './Component/SearchFeed';
import ChanneDetail from './Component/ChanneDetail';

const App = () =>  (
    <BrowserRouter>
      <Box sx={{background:'black'}}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Feed/>}/>
        <Route path='/video/:id' element={<VideoDetail/>}/>
        <Route path='/channel/:id' element={<ChanneDetail/>}/>
        <Route path='/search/:searchTerm' element={<SearchFeed/>}/>
      </Routes>
      </Box>
    </BrowserRouter>
)

export default App;
