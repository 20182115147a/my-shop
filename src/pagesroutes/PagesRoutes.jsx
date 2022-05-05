import {Routes,Route} from 'react-router-dom';
import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Collections from '../pages/Collections'
const PageRoutes = () => {
    return (
        <Routes>
            <Route path='/collections/:collectionType' element = {<Collections/>}/> 
            <Route path='/:category' element = {<Catalog/>}/>     
            <Route path='/' element = {<Home/>}/>
        </Routes>
    )
}

export default PageRoutes