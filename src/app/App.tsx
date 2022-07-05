import React, { useEffect, useState } from 'react';
import '../stylesheets/styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/appReducer';
import { Home, Cart } from './pages/index';
import { Header, Footer } from './shared/components/layout/index';

function App() {
  const store = createStore(rootReducer);
  
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
