import React from 'react';
import './textPage.scss';

export function TextPage ({location}) {
    const searchParams = location.search;

    return (
      <div className='text-page'>
          <h2 className='text-title'>Текстовая страница</h2>
          <div className='text-content'>
            <p>Это простая текстовая страница для отображения параметров роута. Параметры: </p>
            <p>- id: <span>{searchParams.slice(4, 9)}</span> </p>
            <p>- date: <span>{searchParams.slice(15)}</span></p>
            <p></p>
          </div>
      </div>
    );
  };