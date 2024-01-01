import { Header } from './components/header';
import { HeroSection } from './components/hero';
import './App.css';
import { Specials } from './components/specials';
import { Footer } from './components/footer';
import { About } from './components/about';

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Specials />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App;
