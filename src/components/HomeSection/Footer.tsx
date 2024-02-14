import { CiFacebook, CiTwitter } from 'react-icons/ci'
import { FaInstagram } from 'react-icons/fa'
import { MdCopyright } from 'react-icons/md'


const Footer = () => {
  return (
    <div className='w-full'>
  <div className=' h-auto grid-cols-1 grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1'>

  <div className='grid grid-cols-1  md:grid-cols-2 xl:grid-cols-2  lg:grid-cols-1 sm:grid-cols-1 p-3 lg:px-16 xl:pl-16 md:px-9 sm:px-9'> 

  <div className='grid gap-y-1 p-2'>
    <div>
    <h2 className=' font-semibold'>Company</h2>
  </div>
  <div className='grid gap-y-1 pb-11 opacity-60'>
    <h5>About</h5>
    <h5>Jobs</h5>
    <h5>For the Record</h5>
  </div>    
  </div>

  <div className='grid gap-y-4 pt-2'>
    
  <div className='grid gap-y-2'>
    <h2 className=' font-semibold'>Communities</h2>
  </div>
    <div className='grid gap-y-2 pt-1 opacity-60'>
      <h5>For Artist</h5>
      <h5>Developers</h5>
      <h5>Advertising</h5>
    <h5>Investors</h5>
    <h5>Vendors</h5>
  </div>

</div>

  <div className='grid md:pt-7 lg:pt-5 xl:pt-2 sm:pt-7 pt-7 pl-0 gap-y-4 lg:pl-0 md:pl-0 xl:pl-2 sm:pl-0'>
    <div>
    <h2 className=' font-semibold'>Useful links</h2>
  </div>
  <div className='grid pb-20 opacity-60'>
    <h5>Support</h5>
  <h5>Free Mobile App</h5>
</div>

</div>
</div>

<div className='flex md:flex-col sm:flex-col flex-col 
  lg:justify-end md:justify-start xl:justify-end lg:flex-row    xl:flex-row pt-6 p-9 gap-y-6
  gap-x-7'>
      <div className='bg-[#4c4b4b] p-[9px] h-fit w-12 rounded-full '>
          <FaInstagram size={28} />
      </div>
      <div  className='bg-[#4c4b4b] p-[9px]  h-fit w-12 rounded-full '>
          <CiTwitter size={28} />
      </div>
      <div  className='bg-[#4c4b4b] p-[9px]  h-fit w-12 rounded-full '>
          <CiFacebook size={28} />
      </div>
  </div>

  </div>
  <div className='w-full border-t border-white border-opacity-15'>
    <div className='flex h-32  pl-12 pt-8 gap-x-2 '>
       <MdCopyright size={22} /> 
        <p>2024 Spotify AB</p>
    </div>

  </div>
    </div>

  )
}

export default Footer