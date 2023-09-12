import './index.css';
import reportWebVitals from './reportWebVitals';
import { ChartApp } from 'components/chart/Chart';
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ChartApp />
  </React.StrictMode>,
);
reportWebVitals();
