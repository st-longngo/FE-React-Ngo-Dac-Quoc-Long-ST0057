import React, { useEffect } from 'react';
import '../stylesheets/styles.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './app.reducers';
import { Home, Cart } from './pages/index';
import { Header, Footer } from './shared/components/layout/index';

function App() {
  const location = useLocation();
  const store = createStore(rootReducer);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Provider>
  );
}

export default App;
