import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'

import App from './App.jsx'
import LoginPage from './components/pages/LoginPage.jsx'
import Level from './components/pages/Levels.jsx'
import NotFoundPage from './components/pages/NotFoundPage.jsx'
import WordsPage from './components/pages/WordsPage.jsx'
import LoginRegisterPage from './components/pages/LoginRegisterPage.jsx'

const router = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
    children:[
      {
        index:true,
        element:<LoginRegisterPage />,
      },
      {
        index:true,
        element:<LoginPage />,
      },
      {
        path: "/Levels",
        element: <Level />,
      },
      {
        path: "/Levels/WordsPage",
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
  </StrictMode>,
)
