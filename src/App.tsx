import About from "./compnents/About"
import Hero from "./compnents/Hero"
import Navbar from "./compnents/Navbar"

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
    </main>
  )
}

export default App