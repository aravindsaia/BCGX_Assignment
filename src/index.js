import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import CityDataContext from './dataContext/DataContext';
import ChartContext from './dataContext/ChartContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <CityDataContext>
      <ChartContext>
    <App />
      </ChartContext>
    </CityDataContext>
  </React.StrictMode>
    </BrowserRouter>
);

