import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App'; //third party libraries or own js file should omit .js extension

// This is what is rendered initially when `npm start` is run; i.e. it is the first file to execute
// It checks or changes in code before transforming it and sending it to the browser

// Create root tells React what should be rendered
// /public/index.html tells what exactly should be on the page. 
// in this case it contains a div with id='root' that will contain this React application
const root = ReactDOM.createRoot(document.getElementById('root'));
// in this div element we render a defined App component
root.render(<App />);
