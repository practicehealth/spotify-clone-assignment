import Home from "./pages/Home";
import Search from "./pages/Search";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchResult from "./pages/SearchResult";

const router = createBrowserRouter([
	{
		path : "/", 
		element : <Home />
	},
	{
		path: "/search",
		element: <Search />
	}, 
	{
		path: "searchresult",
		element: <SearchResult />
	}
])

function App() {
  return (
	<div className="">
		<RouterProvider router = {router} />
	</div>
  );
}

export default App;
