import { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { ServicesPage } from './pages/ServicesPage';
import { About } from './pages/About';
import { Proposal } from './pages/Proposal';
import { PortfolioPage } from './pages/PortfolioPage';
import { FrameDetail } from './pages/FrameDetail';
import { PackagesPage } from './pages/PackagesPage';
import { PackageUnlockFlow } from './pages/PackageUnlockFlow';
import { DigitalMarketingPage } from './pages/services/DigitalMarketingPage';
import { WebSolutionsPage } from './pages/services/WebSolutionsPage';
import { BrandingPage } from './pages/services/BrandingPage';
import { InfluenceMarketingPage } from './pages/services/InfluenceMarketingPage';
import { LeadPopup } from './components/ui/LeadPopup';

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleNavigation = () => {
      setCurrentHash(window.location.hash);
      if (window.location.hash === '#/contact' || window.location.hash === '#/services' || window.location.hash === '#/about' || window.location.hash === '#/proposal' || window.location.hash === '#/work' || window.location.hash === '#/packages' || window.location.hash === '#/digital-marketing' || window.location.hash === '#/web-solutions' || window.location.hash === '#/branding' || window.location.hash === '#/influence-marketing' || window.location.hash.startsWith('#/frame/') || window.location.hash.startsWith('#/package-unlock/')) {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      };
    };

    window.addEventListener('hashchange', handleNavigation);
    // Initial scroll on load
    window.scrollTo(0, 0);
    return () => window.removeEventListener('hashchange', handleNavigation);
  }, []);

  const renderCurrentPage = () => {
    if (currentHash === '#/contact') return <Contact />;
    if (currentHash === '#/services') return <ServicesPage />;
    if (currentHash === '#/about') return <About />;
    if (currentHash === '#/proposal') return <Proposal />;
    if (currentHash === '#/work') return <PortfolioPage />;
    if (currentHash === '#/packages') return <PackagesPage />;
    if (currentHash.startsWith('#/package-unlock/')) return <PackageUnlockFlow />;
    if (currentHash === '#/digital-marketing') return <DigitalMarketingPage />;
    if (currentHash === '#/web-solutions') return <WebSolutionsPage />;
    if (currentHash === '#/branding') return <BrandingPage />;
    if (currentHash === '#/influence-marketing') return <InfluenceMarketingPage />;
    if (currentHash.startsWith('#/frame/')) return <FrameDetail />;
    return <Home />;
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <LeadPopup />
      <Navbar />
      <main className="flex-grow">
        {renderCurrentPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
