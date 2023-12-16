import { useState } from 'react'
import { BiHomeAlt, BiInfoCircle, BiMenu, BiMoviePlay } from 'react-icons/bi'
import NavItem from './NavItem'
import Logo from '../../assets/freelancer-logo.svg'

const defaultIconSize = '1rem'

const items = [
	{ label: 'How It Works' },
	{ label: 'Browse Jobs' },
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
		<nav className='flex items-center py-[14px] col-span-4'>
			<div className='flex mx-4 justify-between items-center md:block'>
				<h4>
					<img src={Logo} className='w-[145px]' />
				</h4>
				<BiMenu
					className='cursor-pointer md:hidden'
					size={defaultIconSize}
					onClick={() => setIsNavMenuMobileOpen(!isNavMenuMobileOpen)}
				/>
			</div>

			<ul
				className={`mx-4 ${isNavMenuMobileOpen ? '' : ' hidden'} md:flex`}
			>
				<NavItemsContainer />
			</ul>
		</nav>
	)
}

export default Index
