export interface Item {
	label: string
	active?: boolean
}

const NavItem = ({ item }: { item: Item }) => {
	const { label } = item

	return (
		<li className="block">
			<h5 className='mr-2'>{label}</h5>
		</li>
	)
}

export default NavItem
