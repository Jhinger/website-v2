import { data } from "@/data";

const Introduction = async () => {
	return (
		<div className="flex justify-start my-12 max-w-[50rem] w-full px-12">
			<div className="w-full md:pr-40 flex flex-col gap-4 align-left text-xs text-gray-500 leading-loose">
				{data.introduction.map(({ text }, index) => {
					return (
						<div key={index} className="text-text">
							{text}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Introduction;
