import Header from './components/Header';

function App() {
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
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">Newest songs</h1>
        </div>

        {/* Render Song List here */}
        {/* <PageContent songs={songs} /> */}
      </div>
    </div>
  );
}

export default App;
