import Footer from "./component/Footer";
import HeroSection from "./component/HeroSection";
import Navbar from "./component/Navbar";
import StudentTable from "./component/StudentTable";

export default function App() {
  return (
    <div className="bg-[#172227] font-[Inter] text-white ">
      <Navbar />
      <HeroSection />
      <StudentTable />
      <Footer />
    </div>
  );
}
