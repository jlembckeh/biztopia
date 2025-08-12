import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/Home'
import TopicsPage from './pages/Topics'
import AboutPage from './pages/About'
import ArticlePage from './pages/Article'
import './styles/globals.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'topics', element: <TopicsPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'article/:slug', element: <ArticlePage /> }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
