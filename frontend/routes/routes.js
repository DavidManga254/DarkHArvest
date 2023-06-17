// app routes
import * as React from 'react';
import { createBrowserRouter} from "react-router-dom";
import { Homepage } from '../pages/homepage/home.jsx';
import { SearchResults } from '../pages/resultspage/results.jsx';
import { DownloadPage } from '../pages/downloadpage/downloadpage.jsx';
import { Recommended } from '../pages/Recommended/recommended.jsx';


export const routes = createBrowserRouter([
    {
        path:'/main_window',
        element:<DownloadPage/>

    },
    {
        path:'search',
        element:<SearchResults/>
    },
    {
        path:'/download',
        element:<DownloadPage/>
    }
])