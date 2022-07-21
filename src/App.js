import { Creations } from "./components/Creations"
import { CreationsDesktop } from "./components/CreationsDesktop"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Interactive } from "./components/Interactive"
import { Showcase } from "./components/Showcase"

const App = () => {
  return (
    <>
      <Header />
      <Showcase />
      <Interactive />
      <Creations />
      <CreationsDesktop />
      <Footer />
    </>
  )
}

export default App
