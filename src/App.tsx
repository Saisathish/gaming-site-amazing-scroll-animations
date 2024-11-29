import About from "./compnents/About"
import Contact from "./compnents/Contact"
import Features from "./compnents/Features"
import Footer from "./compnents/Footer"
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
      <Contact />
      <Footer />
    </main>
  )
}

export default App