"use client";

import smoothScrollToCenter from "@/utils/smoothScroll";

type NavItemProps = {
	name: string;
	link: string;
};

const NavItem = ({ name, link }: NavItemProps) => {
	return (
		<div>
			{link.length ? (
				<LinkItem name={name} link={link} />
			) : (
				<ScrollItem name={name} />
			)}
		</div>
	);
};

const LinkItem = ({ name, link }: { name: string; link: string }) => {
	return (
		<a
			href={link}
			className="hover:text-primary no-underline hover:cursor-pointer duration-150 underline-animation ease-in-out">
			{name}
		</a>
	);
};

const ScrollItem = ({ name }: { name: string }) => {
	return (
		<div
			onClick={() => smoothScrollToCenter("experience")}
			className="hover:text-primary no-underline hover:cursor-pointer duration-150 underline-animation ease-in-out">
			{name}
		</div>
	);
};

export default NavItem;
