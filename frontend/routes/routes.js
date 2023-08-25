import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Homepage } from '../pages/homepage/home.jsx';
import { SearchResults } from '../pages/resultspage/results.jsx';
import DownloadPage from '../pages/downloadpage/downloadpage.jsx';
import { Recommended } from '../pages/Recommended/recommended.jsx';
import { FavouritePage } from '../pages/favouritePage/favouritePage.jsx';
import { CategoriesPage } from '../pages/categories/categories_page.jsx';
import { SearchPage } from '../pages/searchPage/searchPage.jsx';

export function Routeser() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/download" element={<DownloadPage />} />
        <Route path='/favourite' element={ <FavouritePage/> } />
        <Route path='/categories' element={<CategoriesPage/>} />
        <Route path='/search' element={<SearchPage/>}/>
      </Routes>
    </Router>
  );
}
