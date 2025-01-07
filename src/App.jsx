import About from "./components/About/About"
import CardMain from "./components/CardMain/CardMain"
import Navbar from "./components/Navbar/Navbar"
import OverView from "./components/OverView/OverView"
import Particle from "./Particle/Particle"
function App() {


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
