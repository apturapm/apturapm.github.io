import React, { useState } from 'react';

// Replace this URL with your actual Google Apps Script Web App URL after deployment
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzvDkLWKWON_a1DQMQbpzaoDBNmOVPcGHIDqEv6NE-M1kLtUzbP-omasV_GTtao0qXH/exec';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    units: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Submit to Google Apps Script
      const response = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Note: With 'no-cors' mode, we can't read the response
      // but the request will still be processed by Apps Script
      console.log('Waitlist submission:', formData);
      setSubmitted(true);
      
    } catch (err) {
      console.error('Submission error:', err);
      setError('There was an error submitting your information. Please try again.');
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
        <div className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-md mx-auto">
                    <svg className="w-16 h-16 mx-auto text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-brand-foreground tracking-tight">
                        You're on the list!
                    </h1>
                    <p className="mt-4 text-lg text-brand-muted-text">
                        Thank you for joining the Aptura waitlist. We'll be in touch with exciting updates and early access opportunities.
                    </p>
                </div>
            </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-brand-foreground tracking-tight">
            Join the Early Access Waitlist
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-muted-text">
            Be the first to experience the future of property management. Sign up now for exclusive updates and early access to Aptura.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-brand-secondary-bg p-8 rounded-lg border border-brand-border">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-md">
                {error}
              </div>
            )}
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-brand-foreground">Full Name</label>
              <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} disabled={isSubmitting} className="mt-1 block w-full bg-brand-background border-brand-border border rounded-md shadow-sm py-3 px-4 text-brand-foreground focus:outline-none focus:ring-2 focus:ring-brand-primary disabled:opacity-50" placeholder="Jane Doe"/>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-brand-foreground">Email Address</label>
              <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} disabled={isSubmitting} className="mt-1 block w-full bg-brand-background border-brand-border border rounded-md shadow-sm py-3 px-4 text-brand-foreground focus:outline-none focus:ring-2 focus:ring-brand-primary disabled:opacity-50" placeholder="you@example.com"/>
            </div>
             <div>
              <label htmlFor="role" className="block text-sm font-medium text-brand-foreground">I am a...</label>
               <select id="role" name="role" required value={formData.role} onChange={handleChange} disabled={isSubmitting} className="mt-1 block w-full bg-brand-background border-brand-border border rounded-md shadow-sm py-3 px-4 text-brand-foreground focus:outline-none focus:ring-2 focus:ring-brand-primary appearance-none disabled:opacity-50">
                 <option value="" disabled>Select your role</option>
                 <option>Property Manager</option>
                 <option>Property Owner</option>
                 <option>Real Estate Investor</option>
                 <option>Other</option>
               </select>
            </div>
            <div>
              <label htmlFor="units" className="block text-sm font-medium text-brand-foreground">How many units do you manage?</label>
              <select id="units" name="units" value={formData.units} onChange={handleChange} disabled={isSubmitting} className="mt-1 block w-full bg-brand-background border-brand-border border rounded-md shadow-sm py-3 px-4 text-brand-foreground focus:outline-none focus:ring-2 focus:ring-brand-primary appearance-none disabled:opacity-50">
                 <option value="" disabled>Select a range</option>
                 <option>1 - 10</option>
                 <option>11 - 50</option>
                 <option>51 - 200</option>
                 <option>201+</option>
              </select>
            </div>
            <div>
              <button type="submit" disabled={isSubmitting} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brand-primary hover:bg-brand-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-secondary-bg focus:ring-brand-primary transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? 'Submitting...' : 'Get Early Access'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;