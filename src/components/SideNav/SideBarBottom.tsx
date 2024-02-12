import { TbWorld } from 'react-icons/tb'

const SideBarBottom = () => {
  return (
    <div className=' flex h-[208px] flex-col gap-6 rounded-lg'>
        <div className='flex flex-col justify-around h-full p-5'>
            <div className='flex flex-col text-xs gap-3'>
                <div className='flex flex-row gap-4' >
                    <p>Legal</p>
                    <p>Privacy Center</p>
                    <p>Privacy Policy</p>
                </div>
                 <div className='flex flex-row gap-4'>
                    <p>Cookies</p>
                    <p>About Ads</p>
                    <p>Accessibility</p>
                </div>
                 <div>
                    <p>Cookies</p>
                </div>
            </div>
        <div>
            <button className=' rounded-full text-xs px-3 py-[5px] border-white border flex items-center gap-1'>
                <TbWorld size={19} />English</button>
        </div>
    </div>
    </div>
  )
}

export default SideBarBottom