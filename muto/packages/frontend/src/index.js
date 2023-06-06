import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App';
import {AuthProvider, AuthConsumer} from "./context/jwt-context";
import Loader from './components/loader';
import reportWebVitals from './reportWebVitals';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <AuthConsumer>
        {(auth) => !auth.isInitialized ?  (
          <Loader/>
        ): (
          <Routes>
            <Route path='/*' element={<App/>}/>
          </Routes>
        )}
      </AuthConsumer>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
