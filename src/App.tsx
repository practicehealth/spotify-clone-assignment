import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import { ROUTES } from './constants/routes'
import Layout from './components/mainLayout/layout'
import PlayList from './components/mainLayout/playList'
import Search from './components/mainLayout/search'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <PlayList />,
        },

        {
          path: ROUTES.search,
          element: <Search />,
        },
      ],
    },
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App;
