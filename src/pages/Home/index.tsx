import { useEffect, useState } from "react";
import MainSection from "./MainSection";

function Home() {

  //ideally we should use redux or react-query etc for state management and caching
  const [response, setResponse] = useState({
    data: null,
    error: null,
    isLoading: true,
  });

  useEffect(() => {
    fetch("./data/home.json")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setResponse({
          isLoading:false,
          error:null,
          data:data
        });
        
      })
      .catch((err) => {console.log("something went wrong in home page", err)
      setResponse({
        isLoading:false,
        error:err,
        data:null
      });
    });
  }, []);

  //ideally it should show some loading animation
  if (response.isLoading) {
    return <div>Wait We Are Loading</div>;
  } else if (response.error) {
    return (
      <div className="text-red-500 text-center w-full text-xl">
        Wait We Are Loading
      </div>
    );
  }

  return response.data!=null&&<MainSection data={response.data}/>;
}

export default Home;
