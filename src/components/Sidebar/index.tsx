import HeadSection from "./Head"
import MainSection from "./Main"


function index() {
  return (      
        <div className="hidden  md:flex md:flex-col mt-2 mx-2 h-full">
          <HeadSection/>
          <MainSection/>
        </div>
    )
}

export default index