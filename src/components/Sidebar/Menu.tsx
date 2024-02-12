import { Icon } from '../../Icons';
import { NavLink } from 'react-router-dom';

function Menu() {
	return (
		<nav className="">
			<ul className="flex flex-col   rounded-lg ">
				<li>
					<NavLink to={"/"} className="text-white h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4">
						<span>
							<Icon name="home" />
						</span>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink  to={"/search"} className=" text-white h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4">
						<span>
							<Icon name="search" />
						</span>
						Search
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Menu