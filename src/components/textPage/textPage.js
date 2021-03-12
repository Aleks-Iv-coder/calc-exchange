import React from 'react';
import queryString from 'query-string';
import './textPage.scss';

export function TextPage ({location}) {
    const searchParams = queryString.parse(location.search);

    return (
      <div className='text-page'>
          <h2 className='text-title'>Текстовая страница</h2>
          <div className='text-content'>
            <p>Это простая текстовая страница для отображения параметров роута. Параметры: </p>
            <p>- id: <span>{searchParams.id}</span> </p>
            <p>- date: <span>{searchParams.date}</span></p>
            <p></p>
          </div>
      </div>
    );
  };