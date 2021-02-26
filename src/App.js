import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/header/header';
import Calculator from './components/calculator/calculator';
import TextPage from './components/textPage/textPage';
import CurrencyService from './services/services';
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <div className="App">
          <Header />
          <Route path="/calculator" component={Calculator} />
          <Route path="/textpage" component={TextPage} />
        </div>
      </div>
    </Router>
  );
}

const getRate = new CurrencyService();

getRate.getCurrenceRate()
  .then((res) => {
    console.log(res);
  })

export default App;
