import {Routes,Route} from 'react-router-dom';
import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
const PageRoutes = () => {
    return (
        <Routes>
            <Route path='/:category' element = {<Catalog/>}/>     
            <Route path='/' element = {<Home/>}/>
        </Routes>
    )
}

export default PageRoutes