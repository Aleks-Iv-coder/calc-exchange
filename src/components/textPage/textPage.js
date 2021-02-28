import React from 'react';
import './textPage.css';

export default function TextPage () {
    return (
      <div className="text-page">
          <h2 className="text-title">Текстовая страница</h2>
          <div className="text-content">
            <p>Это простая текстовая страница для отображения параметров роута. Параметры: </p>
            <p>- id: <span>xxxx</span> </p>
            <p>- date: <span>xxxx</span></p>
            <p></p>
          </div>

      </div>
    );
  };