type NavItemProps = {
	name: string;
	link: string;
};

const NavItem = ({ name, link }: NavItemProps) => {
	return (
		<a
			href={link}
			className="hover:text-primary no-underline hover:cursor-pointer duration-150 underline-animation ease-in-out">
			{name}
		</a>
	);
};

export default NavItem;
