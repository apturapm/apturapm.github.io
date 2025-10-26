import React from 'react';
import { FEATURES } from '../constants';
import FeatureCard from '../components/FeatureCard';

const Features: React.FC = () => {
  return (
    <div className="py-20 bg-brand-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-brand-foreground tracking-tight">
            A Platform Built for <span className="text-brand-primary">Peak Performance</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-muted-text">
            Explore the comprehensive suite of AI-powered tools designed to streamline every facet of property management.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.name} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;