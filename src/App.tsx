import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Stats from './components/Stats';
import Newsletter from './components/Newsletter';
import CTA from './components/CTA';
import Funnel from './pages/Funnel';
import Demo from './pages/Demo';

function Home() {
  return (
    <div className="min-h-screen bg-[#0f0638]">
      <Header />
      <Hero />
      <Services />
      <HowItWorks />
      <Stats />
      <CTA />
    </div>
  );
}

function NewsletterPage() {
  return (
    <div className="min-h-screen bg-[#0f0638]">
      <Header />
      <Newsletter />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newsletter" element={<NewsletterPage />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/funnel" element={<Funnel />} />
      </Routes>
    </Router>
  );
}

export default App;
