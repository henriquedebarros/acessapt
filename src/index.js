import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.scss';
import Header from './components/Header';
import Filter from './filter';
import Curator from './components/Curator';
import Footer from './components/Footer';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <div className='main__wrapper'>
      <div className="main__container">
        <Header />
        <BrowserRouter>
          <Filter />
        </BrowserRouter>
        <Curator />
      </div>
    </div>
    <Footer />
  </React.Fragment>
);