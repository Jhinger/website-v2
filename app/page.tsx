import Header from "@/components/Header";
import Introduction from "@/components/Introduction";
import ControlCenter from "@/components/ControlCenter";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export const revalidate = 300;

export default function Home() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center w-full max-w-[80rem] mt-32">
        <Header />
        <Introduction />
        <ControlCenter />
        <Experience />
        <Footer />
      </div>
    </div>
  );
}
