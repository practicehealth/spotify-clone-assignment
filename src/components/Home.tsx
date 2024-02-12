import React, { useState } from "react";

import IconText from "./IconText";
import Navbar from "./Navbar";
import ContentPage from "./ContentPage";
import SearchPage from "./SearchPage";

function Home() {
  const [isSearch, setSearch] = useState(false);
  return (
    <div className=" w-full flex bg-black   ">
      <div className="h-full w-1/5  min-w-[390px] fixed">
        <div className="">
          <IconText isSearch={isSearch} setSearch={setSearch} />
        </div>
      </div>

      <div className="h-full w-4/5 ml-[25rem] ">
        <Navbar />

        {isSearch ? <SearchPage /> : <ContentPage />}
      </div>
    </div>
  );
}

export default Home;
