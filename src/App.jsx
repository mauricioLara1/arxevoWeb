import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Stack from './components/Stack'
import Footer from './components/Footer'

// La página es las secciones en orden. Para una sección nueva: crea su componente e inclúyelo aquí.
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stack />
      </main>
      <Footer />
    </>
  )
}
