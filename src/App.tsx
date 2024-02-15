import { Home } from "./components/Home";
import PlayList from "./components/PlayList";
import Search from "./components/Search";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/",
          element: <PlayList />,
        },
        {
          path: "/search",
          element: <Search />,
        },
      ],
    },
  ]);

  return (
    <div className="bg-[#000] w-screen h-screen p-2">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
