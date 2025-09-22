import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import History from '../components/History';
import Sections from '../components/Sections';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <About />
        {/* <Skills /> */}
        <Sections/>
        {/* <Projects /> */}
        <History/>
      </main>
      <Footer />
    </div>
  );
}