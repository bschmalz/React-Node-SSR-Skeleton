import React from 'react'; 
import App from './App';
import HomePage from './pages/HomePage'; 
import UsersListPage from './pages/UsersListPage';
import NotFoundPage from './pages/NotFoundPage';
import AdminsListPage from './pages/AdminsListPage';

export default [
  {
    ...App,
    routes: [
      {
        path: '/',
        ...HomePage, 
        exact: true,
      },
      {
        path: '/admins',
        ...AdminsListPage
      }, 
      {
        path: '/users',
        ...UsersListPage, 
      },
      {
        ...NotFoundPage
      } 
    ]
  }
];