import * as React from 'react';
import { RouterProvider } from 'react-router-dom';
import {createRoot} from 'react-dom/client'
import { routes } from '../frontend/routes/routes';

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

render();