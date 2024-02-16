import PlayButton from './PlayButton';

interface Props {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
}

function PlayListCard({ title, description, imageUrl}: Props) {
    return (
        <div className='p-2 min-w-[168px] bg-transparent rounded-lg lg:p-4 flex flex-col lg:bg-cardNormalBG hover:bg-cardHoverBG lg:w-[213px] lg:h-[307px] cursor-pointer'>
        <div className="mb-4">
          <div className="rounded-md shadow-custom relative">
            <img className='w-[152px] h-[152px] lg:h-[181px] lg:w-[181px] rounded-md block' src={imageUrl}>

            </img>
            <div className='absolute bottom-2 right-2 hidden'><PlayButton/></div>
          </div>
        </div>
        <span className='text-white text-base font-bold pb-1'>{title}</span>
        <span className='hidden lg:flex text-sm text-textSubdued font-normal'>{description}</span>
      </div>
    )
}

export default PlayListCard