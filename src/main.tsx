import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import RoutesPage from './components/RoutesPage.jsx';
import RouteDetailedPage from './components/RouteDetailedPage.jsx';
import MainPage from './components/MainPage.jsx';
import RoutesEditPage from './components/RoutesEditPage.jsx'
import RouteConstructorPage from './components/RouteConstructorPage.jsx'
import AuthorizationPage from './components/AuthorizationPage.jsx';
import Logout from './components/Logout.jsx';
import RegistrationPage from './components/RegistrationPage.jsx';
import DraftPage from './components/DraftPage.jsx';
import TicketsPage from './components/TicketsPage.jsx'
import TicketDetailedPage from './components/TicketDetailedPage.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import './index.css';
import store from "./store.js";

const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

const base_path = '/';
const RouterComponent = isLocal ? BrowserRouter : HashRouter;

ReactDOM.render(
  <Provider store={store}>
    <RouterComponent>
      <Routes>
        <Route path={base_path} element={<RoutesPage />}/>
        <Route path="routes/" element={<RoutesPage />}/>
        <Route path="routes/:id/" element={<RouteDetailedPage />} />
        <Route path="routes/edit/" element={<RoutesEditPage />}/>
        <Route path="routes/edit/:id/" element={<RouteConstructorPage />}/>
        <Route path="login/" element={<AuthorizationPage />}/>
        <Route path="logout/" element={<Logout />}/>
        <Route path="registration/" element={<RegistrationPage />}/>
        <Route path="tickets/draft/" element={<DraftPage />}/>
        <Route path="tickets/" element={<TicketsPage />}/>
        <Route path="tickets/:id" element={<TicketDetailedPage />}/>
      </Routes>
      <ToastContainer position="top-right" autoClose={1000} />
    </RouterComponent>
  </Provider>,
  document.getElementById('root')
);
