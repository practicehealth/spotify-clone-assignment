import { browseData } from '../../src/data/browse.ts'

import BrowseCard from './UI/BrowseCard.tsx'
import MobileHeader from './shared/MobileHeader.tsx'
import DesktopHeaderWSearch from './shared/DesktopHeaderWSearch.tsx'

interface BrowseType {
  title: string;
  bgColor: string;
  id: string;
  imgUrl: string;
}

function SearchPage() {
  return (
    <div className=' flex flex-auto flex-col relative rounded-lg bg-baseBackground overflow-auto ml-2 h-full'>
      <DesktopHeaderWSearch/>
      <div className='flex lg:hidden'>
        <MobileHeader/>
      </div>
      <div className='flex flex-col  h-full '>
        <div className="flex flex-row flex-nowrap px-6 max-h-full h-full ">
          <section className="flex flex-grow flex-shrink flex-auto flex-col max-h-full mt-4 h-full">
            <div className="flex items-center mb-4">
              <div className="flex-grow mt-4">
                <h2 className="text-2xl font-bold text-white">
                  Browse all
                </h2>
              </div>
            </div>
            <div
              className="flex flex-wrap gap-6 h-calc-screen "
            >
              {browseData.map((item: BrowseType) => {
                return (
                  <BrowseCard
                    title={item.title}
                    bgColor={item.bgColor}
                    id={item.id}
                    imgUrl={item.imgUrl}
                  />
                )
              })}
            </div>
          </section>
        </div>

      </div>
    </div>
  )

}

export default SearchPage