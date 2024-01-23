// Header.jsx

import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import { FaShoppingCart } from "react-icons/fa";
import "../style/Header.css";

const Header = ({ showDraft, showApp }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const { draft_id } = useSelector((state) => state.draft);

  const isDraftActive = draft_id !== null;

  return (
    <div className="header">
      <div className="breadcrumbs-container">
        <Breadcrumbs />
      </div>
      {isAuthenticated && showApp && (
        <Link to="/tickets" className="applications-link">
          <a className="applications-button">Заявки</a>
        </Link>
      )}
      {isAuthenticated && showDraft && (
        <Link to={isDraftActive ? "/tickets/draft" : "#"} className="cart-link">
          <div className={`cart-icon-container bucket-style ${isDraftActive ? '' : 'inactive-cart'}`} disabled={!isDraftActive}>
            <FaShoppingCart size={30} className="" />
          </div>
        </Link>
      )}
    </div>
  );
};

export default Header;
