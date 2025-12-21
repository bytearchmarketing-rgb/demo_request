import { useState, useEffect } from 'react';
import { Search, TrendingUp, Target, Building2, Home as HomeIcon, ShoppingCart, Wrench, Phone, Award } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import CTAButton from '../components/CTAButton';
import TrustBadge from '../components/TrustBadge';
import TestimonialCard from '../components/TestimonialCard';
import IndustryCard from '../components/IndustryCard';
import ExitIntentModal from '../components/ExitIntentModal';
import SocialProofNotification from '../components/SocialProofNotification';
import StickyHeader from '../components/StickyHeader';
import GuaranteeSection from '../components/GuaranteeSection';
import ProcessStep from '../components/ProcessStep';

export default function Home() {
  const [isExitModalOpen, setIsExitModalOpen] = useState(false);
  const [hasShownExitModal, setHasShownExitModal] = useState(false);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem('exitModalSeen');
    if (hasSeenModal) {
      setHasShownExitModal(true);
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShownExitModal && !hasSeenModal) {
        setIsExitModalOpen(true);
        setHasShownExitModal(true);
        localStorage.setItem('exitModalSeen', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShownExitModal]);

  const handleCalendlyClick = () => {
    window.open('https://calendly.com/bytearchmarketing/demo-meeting', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <StickyHeader onBookCall={handleCalendlyClick} />
      <SocialProofNotification />

      <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden relative">
        <AnimatedBackground />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-6 animate-fade-in">
              <Search className="w-4 h-4" />
              Our #1 Service for Detroit Businesses
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-delay-1">
              Detroit Businesses: Rank #1 on Google
              <span className="block text-orange-600 mt-2">in 90 Days or Pay Nothing</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-4 leading-relaxed animate-fade-in-delay-2">
              Stop losing customers to competitors who rank higher.
            </p>

            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto animate-fade-in-delay-2">
              Our proven SEO system gets Detroit businesses to the top of Google search results. If we do not get you on the first page of Google for your target keywords within 90 days, you get a full refund. Guaranteed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-delay-3">
              <CTAButton
                onClick={handleCalendlyClick}
                variant="primary"
                size="large"
                icon="calendar"
              >
                Book a Call
              </CTAButton>
              <CTAButton
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                variant="secondary"
                size="large"
                icon="arrow"
              >
                See How It Works
              </CTAButton>
            </div>

            <div className="flex flex-wrap gap-6 justify-center animate-fade-in-delay-3">
              <TrustBadge type="guarantee" text="90 Day Guarantee" />
              <TrustBadge type="check" text="No Long Term Contracts" />
              <TrustBadge type="detroit" text="Detroit Based Team" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Detroit's Leading Businesses
            </h2>
            <p className="text-xl text-gray-600">
              Join Detroit businesses growing with guaranteed results
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="aspect-video bg-gray-50 border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center hover:border-orange-300 transition-colors duration-300"
              >
                <Building2 className="w-8 h-8 text-gray-300" />
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300 animate-bounce-in-delay-1">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors duration-300 animate-float">
                <Search className="w-8 h-8 text-orange-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Keyword Domination</h3>
              <p className="text-gray-600">
                We identify and target the exact keywords your customers are searching for, then optimize your site to rank at the top.
              </p>
            </div>
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300 animate-bounce-in-delay-2">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors duration-300 animate-float-delayed">
                <TrendingUp className="w-8 h-8 text-orange-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Traffic Growth</h3>
              <p className="text-gray-600">
                Watch your website traffic surge as you climb the rankings. More visibility means more customers and more revenue.
              </p>
            </div>
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300 animate-bounce-in-delay-3">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors duration-300 animate-float-slow">
                <Target className="w-8 h-8 text-orange-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Local Focus</h3>
              <p className="text-gray-600">
                Specialized strategies for Detroit area businesses to dominate local search results and attract nearby customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real results from Detroit businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Get You to Page 1 in 90 Days
            </h2>
            <p className="text-xl text-gray-600">
              Our proven three step process delivers first page rankings without disrupting your business
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <ProcessStep
              number={1}
              title="Free Consultation and Keyword Research"
              description="We analyze your business, competitors, and identify the most valuable keywords that will drive customers to your door. You will know exactly what we are targeting before we start."
              icon={Phone}
              timeline="Day 1-7"
            />

            <ProcessStep
              number={2}
              title="SEO Implementation and Optimization"
              description="Our team handles all technical work including on-page SEO, content optimization, local listings, and link building. You stay informed while we do the heavy lifting."
              icon={Target}
              timeline="Day 8-60"
            />

            <ProcessStep
              number={3}
              title="Track Rankings and Reach Page 1"
              description="Watch your rankings climb with weekly reports. Most businesses see first page results within 60 days. If you are not on page 1 by day 90, you get a full refund."
              icon={TrendingUp}
              timeline="Day 61-90"
              isLast
            />
          </div>

          <div className="text-center mt-12">
            <CTAButton
              onClick={handleCalendlyClick}
              variant="primary"
              size="large"
              icon="calendar"
            >
              Book a Call
            </CTAButton>
            <p className="mt-4 text-gray-600">
              No obligation • 30 minute call • Custom ranking roadmap • 90 day guarantee
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              SEO Solutions for Your Industry
            </h2>
            <p className="text-xl text-gray-600">
              Specialized strategies for Detroit businesses in every sector
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <IndustryCard
              icon={Wrench}
              title="HVAC Companies"
              painPoint="Your trucks are ready but the phone is not ringing. Customers are finding your competitors first on Google."
              solution="Rank for high intent keywords like HVAC repair Detroit and AC installation near me. Get calls from customers who need service now."
              delay={1}
            />

            <IndustryCard
              icon={Award}
              title="Dental Practices"
              painPoint="New patients are hard to find. Your schedule has openings but competitors with better Google rankings are booked solid."
              solution="Dominate local search for dentist Detroit and emergency dental care. Fill your schedule with new patient appointments."
              delay={2}
            />

            <IndustryCard
              icon={HomeIcon}
              title="Real Estate Agents"
              painPoint="Buyers and sellers are searching online but finding other agents. You are losing deals before you even know about them."
              solution="Appear first for homes for sale Detroit and real estate agent near me. Capture leads actively looking to buy or sell."
              delay={3}
            />

            <IndustryCard
              icon={ShoppingCart}
              title="E-commerce Stores"
              painPoint="Your products are great but buried on page 10 of Google. You are spending money on ads while competitors get free organic traffic."
              solution="Rank for product keywords and drive qualified buyers to your store. Reduce ad spend while increasing sales."
            />
          </div>
        </div>
      </section>

      <GuaranteeSection />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in">
              Ready to Dominate Your Market?
            </h2>
            <p className="text-xl mb-8 text-gray-600 animate-fade-in-delay-1">
              Book your free SEO audit today and discover exactly what it will take to get your business to the top of Google
            </p>
            <CTAButton
              onClick={handleCalendlyClick}
              variant="primary"
              size="large"
              icon="calendar"
              className="animate-fade-in-delay-2"
            >
              Book a Call
            </CTAButton>
            <p className="mt-6 text-gray-600 text-sm animate-fade-in-delay-3">
              No obligation • 30 minute call • Custom ranking roadmap • 90 day guarantee
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <ExitIntentModal
        isOpen={isExitModalOpen}
        onClose={() => setIsExitModalOpen(false)}
      />
    </div>
  );
}
