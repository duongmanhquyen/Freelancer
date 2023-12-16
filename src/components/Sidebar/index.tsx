import { useState } from 'react'
import { BiHomeAlt, BiInfoCircle, BiMenu, BiMoviePlay } from 'react-icons/bi'
import NavItem from './NavItem'

const defaultIconSize = '1.875rem'

const items = [
	{ label: 'Home'},
	{ label: 'Movies' },
	{ label: 'About' }
]

const NavItemsContainer = () => (
	<>
		{items.map((item, index) => (
			<NavItem item={item} key={index} />
		))}
	</>
)

const Index = () => {
	const [isNavMenuMobileOpen, setIsNavMenuMobileOpen] = useState(false)

	return (
		<nav className='col-span-1 mx-3 bg-cyan-200'>
			<div className='flex mx-4 justify-between items-center md:block'>
				
				<BiMenu
					className='cursor-pointer md:hidden'
					size={defaultIconSize}
					onClick={() => setIsNavMenuMobileOpen(!isNavMenuMobileOpen)}
				/>
			</div>

			<ul
				className={`mx-4 my-2${isNavMenuMobileOpen ? '' : ' hidden'} md:block`}
			>
				<NavItemsContainer />
			</ul>
		</nav>
	)
}

export default Index
