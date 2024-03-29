import Logo from "@/assets/Logo";

const Header = () => {
	return (
		<div className="flex flex-row items-center justify-between max-w-[50rem] w-full">
			<div className="flex flex-row gap-4 items-center justify-center">
				<Logo className="w-8 h-8" />
				<div className="flex flex-col">
					<h1 className="font-bold text-lg">Gurshan Jhinger</h1>
					<h5 className="text-gray-400 text-xs">Software Developer</h5>
				</div>
			</div>
			<div className="flex flex-row text-sm font-medium gap-8">
				<span className="hover:text-primary hover:cursor-pointer duration-150 underline-animation">
					work
				</span>
				<span className="hover:text-primary hover:cursor-pointer duration-150 underline-animation ease-in-out">
					resume
				</span>
			</div>
		</div>
	);
};

export default Header;
