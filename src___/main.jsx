import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ModelingsPage from './components/Routes.tsx';
import ModelingsDetailsPage from './components/RouteDetailed.jsx';
import MainPage from './components/MainPage.jsx';
// import AuthorizationPage from './components/AuthorizationPage.jsx';
// import Logout from './components/Logout.jsx';
// import RegistrationPage from './components/RegistrationPage.jsx';
// import CartPage from './components/CartPage.jsx';
// import ApplicationsPage from './components/ApplicationsPage.jsx'
// import AppDetail from './components/AppDetail.jsx'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import './index.css';
import store from "./store.js";

const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

const base_path = isLocal ? '/' : 'web-transport-cards-front/';
const RouterComponent = isLocal ? BrowserRouter : HashRouter;

ReactDOM.render(
  <Provider store={store}>
    <RouterComponent>
      <Routes>
        <Route path={base_path} element={<MainPage />}/>
        <Route path="routes/" element={<ModelingsPage />}/>
        <Route path="routes/:id/" element={<ModelingsDetailsPage />} />
        <Route path="login/" element={<AuthorizationPage />}/>
        <Route path="logout/" element={<Logout />}/>
        <Route path="registration/" element={<RegistrationPage />}/>
        <Route path="tickets/cart/" element={<CartPage />}/>
        <Route path="tickets/" element={<ApplicationsPage />}/>
        <Route path="tickets/:id" element={<AppDetail />}/>
      </Routes>
      <ToastContainer position="top-right" autoClose={1000} />
    </RouterComponent>
  </Provider>,
  document.getElementById('root')
);
