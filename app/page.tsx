import Header from "@/components/Header";
import Introduction from "@/components/Introduction";
import ControlCenter from "@/components/ControlCenter";

export default function Home() {
	return (
		<div className="flex justify-center items-center">
			<div className="flex flex-col items-center w-full max-w-[80rem] my-32 px-16 sm:px-20">
				<Header />
				<Introduction />
				<ControlCenter />
			</div>
		</div>
	);
}
