import React from 'react';
import './App.css';
import { CartProvider } from './context';
import Router from './Router/index';

const App = () => {
  return (
    <CartProvider>
      <Router />
    </CartProvider> 
  );
}
 
export default App;
