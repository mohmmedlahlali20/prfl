import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function PortfolioContent() {
  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 flex flex-col selection:bg-accent-cyan/20 selection:text-accent-cyan transition-colors">
      {/* Top Frosted Navbar with Language Switcher */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Modern Minimalist Footer */}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  );
}

export default App;
