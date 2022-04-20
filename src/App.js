import Header from './components/Header'
import './assets/fontawesome-free-6.1.1-web/css/all.min.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home'
import '../node_modules/swiper/swiper.scss'

import '../node_modules/swiper/swiper.min.css'
function App() {
  return (
   <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Header/>}/>        
        </Routes>
      <Routes>
        <Route path='/' element = {<Home/>}/>   
      </Routes>
   </BrowserRouter>
  );
}

export default App;
