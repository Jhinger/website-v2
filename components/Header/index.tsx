import NavItem from "@/components/NavItem";
import Logo from "@/assets/Logo";
import { data } from "@/data";

const Header = async () => {
	return (
		<div className="flex flex-col gap-8 sm:flex-row max-w-[50rem] items-start sm:items-center justify-between w-full px-12">
			<div className="flex flex-row gap-4 items-center justify-center">
				<Logo className="w-8 h-8" />
				<div className="flex flex-col gap-1.5">
					<h1 className="font-bold text-lg leading-none">{data.name}</h1>
					<h2 className="text-gray-400 text-xs leading-none">{data.role}</h2>
				</div>
			</div>
			<div className="flex flex-row text-sm font-medium gap-8">
				{data.nav.map(({ name, link }) => (
					<NavItem key={name} name={name} link={link} />
				))}
			</div>
		</div>
	);
};

export default Header;
