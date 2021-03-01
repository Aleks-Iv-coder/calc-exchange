import React from 'react';
import {Link} from 'react-router-dom';
import {APP_ROUTES} from '../../routes/AppRouter';
import './header.css';

export function Header () {
    return (
      <div className='header'>
          <ul>
            <li>
              <Link 
                className='header-nav nav-calc'
                to={APP_ROUTES.CALCULATOR}>
                Калькулятор
              </Link>
            </li>
            <li>
              <Link 
                className='header-nav nav-text'
                to={{
                  pathname: APP_ROUTES.TEXT,
                  state: {id: 'My params', date: new Date()}
                }}>Текст
              </Link>
            </li>
          </ul>
      </div>
    );
  };