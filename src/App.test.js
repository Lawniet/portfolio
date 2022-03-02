import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


/* GLOBAL VARIABLES */

window.$primaryLanguage = 'en';
window.$secondaryLanguage = 'pl';
window.$primaryLanguageIconId = 'primary-lang-icon';
window.$secondaryLanguageIconId = 'secondary-lang-icon';

it('renders without crashing', () => { 
  const div = document.createElement('div');
  ReactDOM.render(<App /> ,  div);
});
