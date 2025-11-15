import FunnelHeader from '../components/funnel/FunnelHeader';
import FunnelHero from '../components/funnel/FunnelHero';
import ProblemSection from '../components/funnel/ProblemSection';
import SolutionSection from '../components/funnel/SolutionSection';
import ProcessSection from '../components/funnel/ProcessSection';
import SocialProofSection from '../components/funnel/SocialProofSection';
import LocationSection from '../components/funnel/LocationSection';
import FinalCTASection from '../components/funnel/FinalCTASection';
import NewsletterSection from '../components/funnel/NewsletterSection';
import FunnelFooter from '../components/funnel/FunnelFooter';

export default function Funnel() {
  return (
    <div className="min-h-screen bg-[#0f0638]">
      <FunnelHeader />
      <FunnelHero />
      <ProblemSection />
      <SolutionSection />
      <ProcessSection />
      <SocialProofSection />
      <LocationSection />
      <FinalCTASection />
      <NewsletterSection />
      <FunnelFooter />
    </div>
  );
}
