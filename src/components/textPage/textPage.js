import React from 'react';
import './textPage.css';

export default function TextPage ({id, date}) {

    return (
      <div className="text-page">
          <h2 className="text-title">Текстовая страница</h2>
          <div className="text-content">
            <p>Это простая текстовая страница для отображения параметров роута. Параметры: </p>
            <p>- id: <span>{id}</span> </p>
            <p>- date: <span>{date.toDateString()}</span></p>
            <p></p>
          </div>

      </div>
    );
  };