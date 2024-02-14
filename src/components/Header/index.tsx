
import Button from '../Button'
import Icon from '../Icon'

interface HeaderProps {
  search?: React.ReactNode
}

const Header = ({search}: HeaderProps) => {
  const arrowLeft = <Icon name="left-arrow" />
  const arrowRight = <Icon name="right-arrow" />
  const searchIcon = <Icon name="search" />
  const menu = <Icon name="bars" />
  let searchBar = null;
  if(search){
    searchBar = search;
  }
  return (
    <div className="header bg-neutral-950 flex justify-between items-center px-4 py-3">
            <div className='hidden lg:flex items-center'>
              <Button icon={arrowLeft} iconOnly></Button>
              <Button icon={arrowRight} iconOnly></Button>
              {searchBar}
            </div>
            <div className='lg:hidden'>
              Shopify
            </div>
            <div className='flex items-center'>
            <div className='hidden lg:flex'>
              <Button plain>Sign up</Button>
              <Button>Log in</Button>
            </div>
            <div className='flex items-center gap-2 lg:hidden'>
              <Button icon={searchIcon} iconOnly></Button>
                <Button small>Open App</Button>
                <Button icon={menu} iconOnly></Button>
            </div>
            </div>
          </div>
  )
}

export default Header