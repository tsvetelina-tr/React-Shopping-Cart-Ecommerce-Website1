import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Nav from './Pages/Nav';
import Products from './Pages/Products';
import ProductData from './Pages/ProductData';
import Cart from './Pages/Cart';
import { ContextProvider } from './Pages/UserContext';

function App() {
  return (
    <div className="app">
     <Router>
     <ContextProvider>
       <Nav/>
       <Routes>
          <Route path='/' element={<Products/>}/>
          <Route path='/products/:index' element={<ProductData/>}/>
          <Route path='cart' element={<Cart/>}/>
       </Routes>
       </ContextProvider>
     </Router>
    </div>
  );
}

export default App;

