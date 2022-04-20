import Header from './components/Header'
import './assets/fontawesome-free-6.1.1-web/css/all.min.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Header/>}/>        
      </Routes>
   </BrowserRouter>
  );
}

export default App;
