import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AIServices from './pages/AIServices';
import Newsletter from './pages/Newsletter';
import BookCall from './pages/BookCall';
import ThankYou from './pages/ThankYou';
import NewsletterThankYou from './pages/NewsletterThankYou';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai-services" element={<AIServices />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/book-call" element={<BookCall />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/newsletter-thank-you" element={<NewsletterThankYou />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
