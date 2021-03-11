import React from 'react';
import {useRouteMatch } from 'react-router-dom';
import './textPage.scss';

export function TextPage () {
    const match = useRouteMatch();
    const {id, date} = match.params;

    return (
      <div className='text-page'>
          <h2 className='text-title'>Текстовая страница</h2>
          <div className='text-content'>
            <p>Это простая текстовая страница для отображения параметров роута. Параметры: </p>
            <p>- id: <span>{id}</span> </p>
            <p>- date: <span>{date}</span></p>
            <p></p>
          </div>
      </div>
    );
  };