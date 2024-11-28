import About from "./compnents/About"
import Features from "./compnents/Features"
import Hero from "./compnents/Hero"
import Navbar from "./compnents/Navbar"
import Story from "./compnents/Story"

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
    </main>
  )
}

export default App