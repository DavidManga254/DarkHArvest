import * as React from 'react';
import { RouterProvider } from 'react-router-dom';
import {createRoot} from 'react-dom/client'
// import { routes } from '../frontend/routes/routes';
import { Routes } from 'react-router-dom';
import "./app.css"
import { Routeser } from '../frontend/routes/routes';
import { Provider } from 'react-redux/es';
import { Store } from '../frontend/reduxStore/createstore';



function App (){
  return(
    <React.StrictMode>
       <Routeser/>
    </React.StrictMode>
  )
}

function render() {
  const root = createRoot(document.getElementById('root'))
  root.render(
    <Provider store={Store}>
      <App/>
    </Provider>
  );
}

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
