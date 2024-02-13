import categoriesData from '../assets/catogries.json'

function Search() {
  return (
    <div className='mt-[100px]'>
        <h2 className=" text-2xl font-bold">Browse all</h2>
        <div  className="grid grid-cols-5 mt-3 gap-5">
          {categoriesData.categories.items.map((category) => (
            <div key={category.id} className="flex flex-col items-center relative ">
              <img className='rounded-md' src={category.icons[0].url} alt={category.name} />
              <p className='absolute text-lg text-center top-[80%] left-[50%] translate-x-[-50%]'>{category.name}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Search