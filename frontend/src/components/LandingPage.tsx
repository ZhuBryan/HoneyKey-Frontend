import { Hero } from './Hero';
import { HowItWorks } from './HowItWorks';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function LandingPage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FBEAD2]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-[#023D50]">
            Ready to Protect Your <span className="gradient-text">API Keys</span>?
          </h2>
          <p className="text-xl text-[#456A77] mb-8">
            See HoneyKey in action with live incident detection and AI-powered security reports
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#E09B3D] hover:bg-[#D4881C] text-white rounded-lg text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
          >
            View Live Dashboard
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
