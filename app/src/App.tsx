import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ScrollToHash } from './components/ScrollToHash';
import { WhatsAppChat } from './components/WhatsAppChat';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProgrammesPage } from './pages/ProgrammesPage';
import { FacultyPage } from './pages/FacultyPage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { PartnershipsPage } from './pages/PartnershipsPage';
import { InvestorsPage } from './pages/InvestorsPage';
import { ContactPage } from './pages/ContactPage';
import { ApplyPage } from './pages/ApplyPage';
import { PortalPage } from './pages/PortalPage';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <ScrollToHash />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/programmes" element={<ProgrammesPage />} />
          <Route path="/faculty/:slug" element={<FacultyPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/partnerships" element={<PartnershipsPage />} />
          <Route path="/investors" element={<InvestorsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/apply" element={<ApplyPage />} />
          <Route path="/portal/:type" element={<PortalPage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppChat />
    </div>
  );
}

export default App;
