import CategoryCard from '../components/CategoryCard';
import { categories } from '../mocks/categories.json';

export default function Search() {
    return (
        <div className='px-[24px] bg-spotify-black'>
            <div className='mt-[16px]'>
                <div className='mt-[16px]'>
                    <div className='pt-[32px] mb-[12px]'>
                        <h2 className='text-[1.5rem]'>Browse all</h2>
                    </div>
                    <div className='grid gap-[24px] grid-cols-5 min-w-[373px]'>
                        {
                            categories.map((category) => (
                                <CategoryCard
                                    key={category.id}
                                    catgeory={category}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}