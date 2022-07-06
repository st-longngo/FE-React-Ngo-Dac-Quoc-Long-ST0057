import React from 'react';
import '../stylesheets/styles.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import AppRoutes from './AppRoutes';
import rootReducer from './app.reducers';

function App() {
  const middlewares = applyMiddleware(thunk, logger);
  const store = createStore(rootReducer, middlewares);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
