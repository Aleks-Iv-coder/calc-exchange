import React from 'react';
import {useRouteMatch } from 'react-router-dom';
import './textPage.scss';

export function TextPage () {
    const match = useRouteMatch();
    console.log(match.params);
    let {id, date} = match.params;

    return (
      <div className='text-page'>
          <h2 className='text-title'>Текстовая страница</h2>
          <div className='text-content'>
            <p>Это простая текстовая страница для отображения параметров роута. Параметры: </p>
            <p>- id: <span>{id.slice(3)}</span> </p>
            <p>- date: <span>{date.slice(5)}</span></p>
            <p></p>
          </div>
      </div>
    );
  };