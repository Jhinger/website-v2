const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<div className="w-max flex justify-center items-center py-4">
			<span className="text-text text-xs">
				&copy; Gurshan Jhinger | 2024 - {year}{" "}
			</span>
		</div>
	);
};

export default Footer;
