
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Pricing from "./components/Pricing"
import Testimonials from "./components/Testimonials"
import Workflow from "./components/Workflow"
import Footer from "./components/Footer"

function App() {
  
  return (
    <>
      <Navbar />
      <div className="pt-20 max-w-7xl mx-auto px-6">
        <Hero />
        <Features />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </>
  )
}

export default App;
