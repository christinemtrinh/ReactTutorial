import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App'; 

// Create root tells React what should be rendered
// /public/index.html tells what exactly should be on the page. 
// in this case it contains a div with id='root' that will contain the React app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
