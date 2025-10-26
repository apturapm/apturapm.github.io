import React from 'react';
import { Link } from 'react-router-dom';
import PaymentsDashboard from '../components/PaymentsDashboard';

const CheckIcon = ({ className = "h-6 w-6 text-brand-accent" }: { className?: string }) => (
  <svg className={`${className} mr-2 flex-shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const XIcon = ({ className = "h-6 w-6 text-brand-danger" }: { className?: string }) => (
    <svg className={`${className} mr-2 flex-shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);


const Home: React.FC = () => {
  return (
    <div className="overflow-hidden animate-fadeIn">
      {/* 1. Hero Section (Stripe Style) */}
      <section className="relative bg-brand-background">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="min-h-[80vh] flex items-center justify-center text-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-brand-foreground tracking-tight">
                Your daily control panel for rent, owner, and maintenance.
              </h1>
              <p className="mt-6 max-w-3xl mx-auto text-lg lg:text-xl text-brand-muted-text">
                Aptura helps small property managers get paid faster. See who’s late, chase rent automatically, and warn owners before payout problems blow up.
              </p>
              <div className="mt-10">
                <Link
                  to="/contact"
                  className="inline-block bg-brand-primary text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-brand-primary-hover transform hover:-translate-y-1 transition-all duration-300"
                >
                  Get Early Access
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Live Product Feel Section (Linear Style) */}
      <section className="py-20 bg-brand-secondary-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-brand-foreground">This is the screen you open every morning.</h2>
            </div>
            <div className="max-w-7xl mx-auto">
               <PaymentsDashboard />
            </div>
        </div>
      </section>

      {/* 3. Before/After Section (Vercel Style) */}
      <section className="py-20 bg-brand-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-brand-foreground">Stop the chaos. Start with clarity.</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-muted-text">
                Managing a portfolio is hard enough without fighting your own tools.
              </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-brand-secondary-bg border border-brand-border p-8 rounded-lg">
              <h3 className="text-xl font-bold text-brand-foreground mb-4">Without Aptura</h3>
              <ul className="space-y-3 text-brand-muted-text">
                <li className="flex items-start"><XIcon /> <span>Chasing tenants with manual texts & calls.</span></li>
                <li className="flex items-start"><XIcon /> <span>Guessing owner payout from a messy spreadsheet.</span></li>
                <li className="flex items-start"><XIcon /> <span>Getting angry 7am calls from owners.</span></li>
                 <li className="flex items-start"><XIcon /> <span>Wondering if rent checks have cleared.</span></li>
              </ul>
            </div>
            <div className="bg-brand-secondary-bg border border-brand-border p-8 rounded-lg">
              <h3 className="text-xl font-bold text-brand-foreground mb-4">With Aptura</h3>
              <ul className="space-y-3 text-brand-muted-text">
                <li className="flex items-start"><CheckIcon /> <span>AI surfaces 10+ day delinquencies automatically.</span></li>
                <li className="flex items-start"><CheckIcon /> <span>Dashboard flags "Owner payout at risk" instantly.</span></li>
                <li className="flex items-start"><CheckIcon /> <span>AI drafts late notices and reminders for you.</span></li>
                 <li className="flex items-start"><CheckIcon /> <span>Real-time payment status and tracking.</span></li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/contact" className="text-brand-primary hover:text-brand-primary-hover font-semibold transition-colors">
              Upgrade your workflow &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Trust & Social Proof Section */}
      <section className="py-20 bg-brand-secondary-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-brand-foreground">The control panel for serious property managers.</h2>
                <p className="mt-4 text-lg text-brand-muted-text">
                    Aptura is built for operators with under 100 doors who need professional tools without enterprise complexity.
                </p>
                <div className="mt-10 grid sm:grid-cols-3 gap-8">
                    <div className="bg-brand-background border border-brand-border p-6 rounded-lg">
                        <h3 className="text-lg font-semibold text-brand-foreground">Bank-Level Security</h3>
                        <p className="mt-2 text-brand-muted-text">Your financial and tenant data is encrypted and secure.</p>
                    </div>
                    <div className="bg-brand-background border border-brand-border p-6 rounded-lg">
                        <h3 className="text-lg font-semibold text-brand-foreground">Auditable Trail</h3>
                        <p className="mt-2 text-brand-muted-text">Every communication and payment is tracked and logged.</p>
                    </div>
                    <div className="bg-brand-background border border-brand-border p-6 rounded-lg">
                        <h3 className="text-lg font-semibold text-brand-foreground">Simple for Tenants</h3>
                        <p className="mt-2 text-brand-muted-text">No app install required. Tenants can pay and communicate via SMS and email.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-brand-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <img className="w-24 h-24 mx-auto rounded-full" src="https://picsum.photos/id/237/100/100" alt="Testimonial author" />
            <blockquote className="mt-8">
              <p className="text-xl lg:text-2xl font-normal text-brand-foreground">
                "Aptura has been a game-changer. We've cut our administrative workload by 50% and increased our occupancy rate by 15% in just six months. The AI assistant is pure magic."
              </p>
            </blockquote>
            <cite className="mt-6 block font-semibold text-brand-foreground not-italic">
              Jane Doe, CEO
              <span className="ml-2 text-brand-primary">Peak Properties</span>
            </cite>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-secondary-bg">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-foreground sm:text-4xl">
            Get on the waitlist for Aptura PM
          </h2>
          <p className="mt-4 text-lg leading-6 text-brand-muted-text">
            Join the leading property managers building a more profitable and efficient business.
          </p>
          <Link
            to="/contact"
            className="mt-8 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brand-primary hover:bg-brand-primary-hover sm:w-auto transition-colors"
          >
            Request Early Access
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;