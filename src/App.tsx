import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StressSection from './components/StressSection';
import ProfitableSection from './components/ProfitableSection';
import WellbeingSection from './components/WellbeingSection';
import BalanceSection from './components/BalanceSection';
import StepsSection from './components/StepsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <StressSection />
      <ProfitableSection />
      <WellbeingSection />
      <BalanceSection />
      <StepsSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;