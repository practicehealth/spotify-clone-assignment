import SearchNav from "./SearchNav"
import CategoriesContainer from "./CategoriesContainer"

export default function MainContainer() { 
    return (
        <div className="flex-[3] bg-light-dark rounded-lg my-2">
            <SearchNav/>
            <CategoriesContainer/>
        </div>
    )
}
