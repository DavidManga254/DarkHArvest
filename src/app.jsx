import * as React from 'react';
import { RouterProvider } from 'react-router-dom';
import {createRoot} from 'react-dom/client'
import { routes } from '../frontend/routes/routes';
import "./app.css"

const setHash = (hash) => {
  window.location.hash = hash;
};


function App (){
  return(
    <React.StrictMode>
       <RouterProvider router={routes} />
    </React.StrictMode>
  )
}

function render() {
  const root = createRoot(document.getElementById('root'))
  root.render(<App/>);
}
setHash('/main_window');

render();

// import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { createRoot } from 'react-dom/client';
// import { routes } from '../frontend/routes/routes';
// import './app.css';
// import { Recommended } from '../frontend/pages/Recommended/recommended.jsx';
// import { DownloadPage } from '../frontend/pages/downloadpage/downloadpage.jsx';

// function App() {
//   return (
//     <React.StrictMode>
//       <Router>
//         {/* Define your routes using React Router */}
//         <Route exact path="/" component={Recommended} />
//         <Route path="/download" component={DownloadPage} />
//         {/* Add more routes as needed */}
//       </Router>
//     </React.StrictMode>
//   );
// }

// function render() {
//   const root = createRoot(document.getElementById('root'));
//   root.render(<App />);
// }

// render();
