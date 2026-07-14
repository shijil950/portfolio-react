import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './index.css'; // നിങ്ങളുടെ സ്വന്തം സ്റ്റൈലുകൾ (ബാക്ക്ഗ്രൗണ്ട് കളർ ഇതിലുണ്ടാകുമല്ലോ)
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);