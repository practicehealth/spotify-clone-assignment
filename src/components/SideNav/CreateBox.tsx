const CreateBox = ({ heading, description, buttonWork }) => {
  return (
    <div className='px-1 py-1'>
        <div className='home-search p-2 h-auto px-5 flex flex-col  bg-[#232323] rounded-lg gap-4 justify-around py-4'>

            <div className=' grid gap-2'>
                <h4 className='text-md font-semibold'>{heading}</h4>
                <p className='text-sm'>{description}</p>
            </div>
            <div>
                <button className='bg-[#fff] text-[#000] h-auto px-[17px] py-2  text-xs w-auto font-semibold rounded-full'>{buttonWork}</button>
            </div>

        </div>
            
     </div>
  )
}

export default CreateBox