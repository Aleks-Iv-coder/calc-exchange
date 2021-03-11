import React from 'react';
import {Link} from 'react-router-dom';
import {APP_ROUTES} from '../../routes/AppRouter';
import './header.scss';

export function Header () {
    const id = 'anyId';
    const date = new Date().toISOString().slice(0,10);

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
                  pathname: `${APP_ROUTES.TEXT}id=${id}&date=${date}`
                }}>Текст
              </Link>
            </li>
          </ul>
      </div>
    );
  };