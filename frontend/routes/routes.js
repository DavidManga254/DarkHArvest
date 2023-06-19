// // app routes
// import * as React from 'react';
// import { createBrowserRouter} from "react-router-dom";
// import { Homepage } from '../pages/homepage/home.jsx';
// import { SearchResults } from '../pages/resultspage/results.jsx';
// import { DownloadPage } from '../pages/downloadpage/downloadpage.jsx';
// import { Recommended } from '../pages/Recommended/recommended.jsx';
// import { HashRouter,Route,Routes } from 'react-router-dom';


// export const routes = createBrowserRouter([
//     {
//         path:'/main_window',
//         element:<Recommended/>

//     },
//     {
//         path:'search',
//         element:<SearchResults/>
//     },
//     {
//         path:'/download',
//         element:<DownloadPage/>
//     }
// ])

// export function Routeser(){
//     return(
//         <HashRouter>
//             <Routes>
//                     <Route path='/' Component={Recommended}/>
//                     <Route path='/download' Component={DownloadPage}/>
//             </Routes>
//         </HashRouter>
//     )
// }


// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Homepage } from '../pages/homepage/home.jsx';
// import { SearchResults } from '../pages/resultspage/results.jsx';
// import { DownloadPage } from '../pages/downloadpage/downloadpage.jsx';
// import { Recommended } from '../pages/Recommended/recommended.jsx';

// export function Routeser() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/main_window" element={<Recommended />} />
//         <Route path="/download" element={<DownloadPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }


import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Homepage } from '../pages/homepage/home.jsx';
import { SearchResults } from '../pages/resultspage/results.jsx';
import { DownloadPage } from '../pages/downloadpage/downloadpage.jsx';
import { Recommended } from '../pages/Recommended/recommended.jsx';

export function Routeser() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Recommended />} />
        <Route path="/download" element={<DownloadPage />} />
      </Routes>
    </Router>
  );
}
