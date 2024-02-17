import SearchCards from './searchCards'
import { categoriesData } from '../../constants/spotifyData'

const Search = () => {
    return (
        <div className="pt-20 m-2 flex flex-col flex-1 bg-primary">
            <h2 className="text-xl font-bold text-gray-50 pl-4">Browse All</h2>
            <div className="flex flex-wrap gap-9 mb-10 pl-4 pt-4">
                {categoriesData.map((category) => (
                    <SearchCards key={category.id} name={category.name} image={category.image} color={category.color} />
                ))}
            </div>
        </div>
    )
}

export default Search;