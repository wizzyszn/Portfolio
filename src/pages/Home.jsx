import Footer from "../components/Footer";
import HeroHeading from "../components/Hero-heading";
import NavBar from "../components/NavBar";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import Team from "../components/Team";
import Toolkits from "../components/Toolkits";


function Home() {
    return (  <>
    <div className="home h-[100vh] bg-[#151515] font-display">
        <div className=" wrapper w-[60%] ml-auto mr-auto translate-y-[50%]">
        <NavBar />
        <HeroHeading />
        <Profile />
        <Projects />
        <Team />
        <Toolkits />
        <Footer />
        </div>
        </div>
    </>);
}

export default Home;