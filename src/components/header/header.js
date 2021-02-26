import React from 'react';
import './header.css';
import {Link} from 'react-router-dom';

function Header () {
    return (
      <div className="header">
          <ul>
            <li >
              <Link 
                className="header-nav nav-calc" 
                to="/calculator">
                Калькулятор
              </Link>
            </li>
            <li>
              <Link 
                className="header-nav nav-text"
                to="/textpage">
                Текст
              </Link>
            </li>
          </ul>
      </div>
    );
  }

export default Header;