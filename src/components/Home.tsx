import  homeData  from "../assets/home-data.json";

function Home() {
  
  
    // const accessToken = 'The Free Token Expires way too quickly :( ';
    // useEffect(() => {
    //
    //     fetch('https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFHCxg5H5PtqW', {
    //         headers: {
    //             'Authorization': `Bearer ${accessToken}`
    //         }
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             // Handle the response data
    //             setHomeData(data);
    //             console.log(data);
    //         })
    //         .catch(error => {
    //             console.error('Error:', error);
    //         });
    // }, [])

  return (
      <div className="mt-[100px] p-2" style={{background: 'linear-gradient(to bottom, #181818, #121212 10%)'}}>
        <h2 className=" text-2xl font-bold">Hindi</h2>
        <div className="grid grid-cols-5 mt-3 gap-5">
          {homeData.length > 0 && homeData.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-1 bg-gradient-to-b from-[#161616] to-[#181818] p-2 rounded-lg ">
            <img 
              src={item.images[0].url}
              alt={item.name}
              className=" w-[190px] h-[190px] rounded-md object-contain"
            />
            <div className="flex flex-col justify-evenly h-[100px] px-2">
              <h3 className=" text-lg font-bold">{item.name}</h3>
              <p className="font-[100] line-clamp-2 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
        </div>
      </div>
  )
}

export default Home