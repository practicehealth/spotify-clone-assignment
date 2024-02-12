const PlaylistCard = ({imageSrc, Heading , Description}) => {
  return (
    <div className='h-[300px] pl-2'>

      <div className=' flex justify-between'>
          <div className=' bg-[#232323] p-1  flex flex-col justify-evenly w-[200px] rounded-lg'>

            <div className='flex items-center justify-center'>

            <img src={imageSrc} className='rounded-2xl p-2 w-[170px] h-[170px]' />
            </div>
           
            <div className='flex flex-col justify-evenly h-[97px]'>
            <h3 className='px-4 text-sm font-bold'>{Heading}</h3>
            <p className='px-4 text-xs opacity-60'>{Description}</p>
            </div>
            
          </div>

      </div>
    </div>
  )
}

export default PlaylistCard