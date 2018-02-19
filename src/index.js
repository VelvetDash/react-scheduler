import React from 'react';
import ReactDOM from 'react-dom';
import SignIn from './SignIn';
import registerServiceWorker from './registerServiceWorker';

// index.js is the entry point of all React apps. It's also known as the root component.
// I don't usually modify this file except for global libraries (i.e. Redux, React-Router).

ReactDOM.render(<SignIn />, document.getElementById('root'));
registerServiceWorker();
