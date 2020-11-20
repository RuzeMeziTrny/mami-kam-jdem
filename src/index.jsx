import React from 'react';
import { render } from 'react-dom';
import './index.html';
import './styles.css';

const App = () => <h1>Ahoj!</h1>;

render(<App />, document.querySelector('#app'));
