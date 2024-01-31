import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';

import './index.css';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';


const body = document.querySelector('body');
body.style.backgroundColor = '#E7ECF2';
body.style.padding = '40px';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter basename="movie-project/">
        <Provider store={store}>
          <App/><Toaster/>
        </Provider>
    </BrowserRouter>
    
  </React.StrictMode>
);
