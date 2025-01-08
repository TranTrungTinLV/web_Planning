import { useEffect } from "react"
import About from "./components/About/About"
import CardMain from "./components/CardMain/CardMain"
import Navbar from "./components/Navbar/Navbar"
import OverView from "./components/OverView/OverView"
import Particle from "./Particle/Particle"
function App() {
  useEffect(() => {
    const handleScrollClick = (event) => {
      const target = event.target;
      if (target.tagName === "A" && target.getAttribute("href").startsWith("#")) {
        event.preventDefault();
        const targetId = target.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };


    document.addEventListener("click", handleScrollClick);


    return () => {
      document.removeEventListener("click", handleScrollClick);
    };
  }, []);

  return (
    <>
      <Particle />
      <Navbar />
      <CardMain />
      <OverView />
      <About />
    </>
  )
}

export default App
