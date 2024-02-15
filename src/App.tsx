import Header from './components/Header';
import PageContent from './components/PageContent';
import Songs from '../src/data.json';
function App() {
  const playlists = Songs.playlists;
  return (
    <div
      className="
        bg-neutral-900
        rounded-lg
        h-full
        w-full
        overflow-hidden
        overflow-y-auto
      "
    >
      <Header></Header>
      {/* Add bg-gray-something as gradient and use h-fit and fit all songs within it */}
      <div className="mt-2 mb-7 px-6 bg-gradient-to-b from-neutral-800">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl mt-2 font-semibold">Newest songs</h1>
        </div>

        {/* Render Song List here */}
        <PageContent songs={playlists} />
      </div>
    </div>
  );
}

export default App;
