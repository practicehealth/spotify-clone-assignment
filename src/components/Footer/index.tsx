import Button from "./../Button"


function index() {
  return (
    <div className="flex flex-grow w-full py-2 px-4 justify-between max-h-[min-content] col-span-2" style={{background:"linear-gradient(90deg, rgb(175, 40, 150), rgb(80, 155, 245))"}}>
        <div className="text-white mb-2">
             <span className="">Preview of Spotify</span><br/>
             <span className="text-sm whitespace-nowrap">Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</span>
        </div>
        <Button className="font-medium rounded-full px-6 min-w-[fit-content]">
        Sign up free
        </Button>
    </div>
  )
}

export default index