import React from 'react';
import ReactDOM from 'react-dom';
import RoutesPage from './components/Routes.tsx';
import RouteDetailedPage from './components/RouteDetailed.tsx';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route, Routes } from "react-router-dom";
import './index.css';

const base_path = '/';

function RedirectComponent() {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate("routes/");
  }, [navigate]);
  return null;
}

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path={base_path} element={<RedirectComponent />}/>
      <Route path="routes/" element={<RoutesPage />}/>
      <Route path="routes/:id/" element={<RouteDetailedPage />} />
    </Routes>
  </HashRouter>,
  document.getElementById('root')
);
