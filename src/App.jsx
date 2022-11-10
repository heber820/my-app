// @ts-check
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContextHOC from './components/context/CartContextHOC';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import NotFound from './components/Error/NotFound';
import CartContainer from './components/Cart/CartContainer';
import CheckoutForm from './components/Checkout/CheckoutForm';
import React from 'react';

function App() {
  return (
    <div className='App'>
   
    <CartContextHOC>
      <BrowserRouter>
      <NavBar /> 
        
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/category/:categoryId' element={<ItemListContainer />}/>
          <Route path="/item/:id" element={<ItemDetailContainer />}/>
          <Route path="/cart" element={<CartContainer />}/>
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="/*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </CartContextHOC>

  
    </div>
  );
}

export default App;
