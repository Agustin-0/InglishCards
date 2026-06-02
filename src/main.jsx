import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'

import App from './App.jsx'
import LoginPage from './pages/LoginPage.jsx'
import Level from './pages/Levels.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import WordsPage from './pages/WordsPage.jsx'
import LoginRegisterPage from './pages/LoginRegisterPage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'

const router = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children:[
      {
        index:true,
        element:<LoginRegisterPage />,
      },
      {
        path:"/LoginPage",
        element:<LoginPage />,
      },
      {
        path: "/LoginPage/Levels",
        element: <Level />,
      },
      {
        path: "/LoginPage/Levels/WordsPage",
        element: <WordsPage />,
      }
    ]
  },
  {
    path:"*",
    element: <NotFoundPage />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
