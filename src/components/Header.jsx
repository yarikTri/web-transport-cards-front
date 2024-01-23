// Header.jsx

import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import { FaShoppingCart } from "react-icons/fa";
import "../style/Header.css";

const Header = ({ showDraft, showApp, showConstructor }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const { draft_id } = useSelector((state) => state.draft);
  const user = useSelector((state) => state.auth.user);

  const isDraftActive = draft_id !== null;
  const isModerator = user && user.is_moderator

  return (
    <div className="header">
      <div className="breadcrumbs-container">
        <Breadcrumbs />
      </div>
      {isAuthenticated && showDraft && (
        <Link to={isDraftActive ? `/tickets/draft/` : "#"} className="cart-link">
          <div className={`cart-icon-container bucket-style ${isDraftActive ? '' : 'inactive-cart'}`} disabled={!isDraftActive}>
            <FaShoppingCart size={30} className="" />
          </div>
        </Link>
      )}
      {isModerator && showConstructor && (
        <Link to={"/routes/edit/0"} className="cart-link">
          <div className="applications-button">
            Создать маршрут
          </div>
        </Link>
      )}    
    </div>
  );
};

export default Header;
