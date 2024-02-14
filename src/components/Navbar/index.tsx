import Card from '../Card'
import MenuList from '../MenuList'
import Icon from '../Icon'
import Button from '../Button'

const menus = [
    {
      name: "Spotify",
      url: '/',
      icon: <Icon name="spotify" />
    },
    {
      name: "Home",
      url: '/',
      icon: <Icon name="home" />
    },
    {
      name: "Search",
      url: '/search',
      icon: <Icon name="search" />
    }
  ]

const Navbar = () => {

  return (
    <div className="sidebar w-[350px] flex-shrink-0 flex flex-col gap-2">
    <Card>
       <MenuList data={menus}/>
      
     </Card>
     <Card className="grow" noPadding>
      <div className="p-4 card-header flex items-center justify-between text-lg font-semibold text-neutral-500">
        <div className='flex gap-2 items-center'>
          <div className='w-5 h-5'>
            <Icon name="library" /> 
          </div>
          <div>Your Library</div>
        </div>
        <Button icon={<Icon name="add"/>} iconOnly></Button>
      </div>
       <div className="flex flex-col grow p-2">
           <div className="grow overflow-auto">
              <Card className='!bg-neutral-800 mb-3'>
                  <div className="flex flex-col gap-3">
                    <div className='font-semibold'>Create your first playlist</div>
                    <div className='text-sm'>It's easy we'll help you</div>
                    <div className='mt-2'>
                      <Button small>Create playlist</Button>
                    </div>
                  </div>
              </Card>
              <Card className='!bg-neutral-800 mb-3'>
                <div className="flex flex-col gap-3">
                    <div className='font-semibold'>Let's find some podcasts to follow</div>
                    <div className='text-sm'>We'll keep you updated on new episodes</div>
                  </div>
              </Card>
           </div>
           <div className="footer h-24 shrink-0">
              <a href="#" className='text-sm'>Cookies</a>
              <div className='mt-8'>
               <Button outline small><Icon name="web" />English</Button>
              </div>
           </div>
       </div>
     </Card>
 </div>
  )
}

export default Navbar