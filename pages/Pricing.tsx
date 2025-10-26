import React, { useState } from 'react';
import { PRICING_PLANS } from '../constants';
import { Link } from 'react-router-dom';

const CheckIcon: React.FC = () => (
  <svg className="h-6 w-6 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('monthly');

  return (
    <div className="py-20 bg-brand-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-brand-foreground tracking-tight">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-muted-text">
            Choose the plan that's right for your business. No hidden fees, ever.
          </p>
        </div>

        <div className="flex justify-center items-center space-x-4 mb-12">
          <span className={`text-lg font-medium ${billingCycle === 'monthly' ? 'text-brand-foreground' : 'text-brand-muted-text'}`}>Monthly</span>
          <button
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annually' : 'monthly')}
            className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none ${billingCycle === 'annually' ? 'bg-brand-primary' : 'bg-brand-border'}`}
          >
            <span
              className={`inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 ${billingCycle === 'annually' ? 'translate-x-5' : 'translate-x-0'}`}
            />
          </button>
          <span className={`text-lg font-medium ${billingCycle === 'annually' ? 'text-brand-foreground' : 'text-brand-muted-text'}`}>Annually</span>
           <span className="ml-2 text-sm bg-brand-accent/20 text-brand-accent font-semibold px-2 py-1 rounded-full">Save 20%</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div key={plan.name} className={`relative flex flex-col rounded-2xl border ${plan.popular ? 'border-brand-primary shadow-2xl' : 'border-brand-border'} bg-brand-background p-8 transition-shadow hover:shadow-xl`}>
              {plan.popular && <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 px-3 py-1 text-sm text-white bg-brand-primary rounded-full font-semibold">Most Popular</div>}
              <h3 className="text-2xl font-semibold text-brand-foreground">{plan.name}</h3>
              <p className="mt-4 text-brand-muted-text">{plan.description}</p>
              <div className="mt-6">
                <span className="text-5xl font-bold text-brand-foreground">
                  {typeof plan.price[billingCycle] === 'number' ? `$${plan.price[billingCycle]}` : plan.price[billingCycle]}
                </span>
                <span className="text-base font-medium text-brand-muted-text">
                    {typeof plan.price[billingCycle] === 'number' ? `/${billingCycle === 'monthly' ? 'mo' : 'yr'}` : ''}
                </span>
              </div>
              <ul className="mt-8 space-y-4 flex-grow">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon />
                    <span className="ml-3 text-brand-muted-text">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className={`mt-10 block w-full py-3 px-6 border rounded-md text-center font-medium transition-colors ${plan.popular ? 'bg-brand-primary text-white hover:bg-brand-primary-hover border-transparent' : 'bg-white text-brand-foreground hover:bg-brand-secondary-bg border-brand-border'}`}>
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;