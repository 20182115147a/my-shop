import Header from './components/Header'
import Footer from './components/Footer'
import PagesRoutes from './pagesroutes/PagesRoutes'
import './assets/fontawesome-free-6.1.1-web/css/all.min.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import '../node_modules/swiper/swiper.scss'
import '../node_modules/swiper/modules/pagination/pagination.scss'
import '../node_modules/swiper/modules/navigation/navigation.scss'
function App() {
  return (
   <BrowserRouter>

        {/* <Routes>
          <Route path='/' element = {<><Header/> <PagesRoutes/> <Footer/></>}/>      
        </Routes>   */}
        <Header></Header>
        <PagesRoutes/>
        <Footer/>
      
   </BrowserRouter>
  );
}

export default App;
