import React  from 'react';
import App from './App';
import RegisterPage from "./components/pages/RegisterPage";
import MoviesPage from "./components/pages/MoviesPage";
import NotFoundPage from "./components/pages/404";

export default [
  {
    ...App,
    routes: [
      { ...MoviesPage, path:'/movies', exact: true },
      { ...RegisterPage, path:'/users/register', exact: true },
      {...NotFoundPage}
    ]
  }
]
