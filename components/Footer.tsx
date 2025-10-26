import React from 'react';
import { Link } from 'react-router-dom';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="text-brand-muted-text hover:text-brand-primary transition-colors" target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-secondary-bg border-t border-brand-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link to="/" className="text-2xl font-bold text-brand-foreground flex items-center">
             <svg className="w-8 h-8 mr-2 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Aptura
            </Link>
            <p className="mt-4 text-brand-muted-text max-w-xs">
              The future of property management, powered by Generative AI.
            </p>
            <div className="mt-6 flex space-x-6">
              <SocialIcon href="#"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.28C8.28,9.09 5.11,7.38 2.9,4.79C2.53,5.42 2.33,6.16 2.33,6.94C2.33,8.43 3.1,9.75 4.18,10.53C3.47,10.51 2.82,10.31 2.26,10V10.03C2.26,12.23 3.84,14.07 5.92,14.5C5.56,14.59 5.18,14.64 4.79,14.64C4.52,14.64 4.25,14.61 4,14.56C4.59,16.38 6.25,17.72 8.29,17.76C6.73,18.99 4.79,19.74 2.68,19.74C2.32,19.74 1.98,19.72 1.63,19.67C3.68,21.07 6.04,21.86 8.6,21.86C16,21.86 19.94,15.65 19.94,10.1C19.94,9.9 19.94,9.7 19.93,9.51C20.72,8.94 21.45,8.23 22,7.4C21.3,7.7 20.56,7.9 19.8,8.02C20.59,7.54 21.22,6.85 21.5,6.02L22.46,6Z" /></svg></SocialIcon>
              <SocialIcon href="#"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-1.5c-1 0-1.5.5-1.5 1.5V12h3l-.5 3h-2.5v6.8c4.56-.93 8-4.96 8-9.8c0-5.52-4.48-10-10-10Z" clipRule="evenodd" /></svg></SocialIcon>
              <SocialIcon href="#"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.42 9.88v-7.01H8.06v-2.87h2.36V9.8c0-2.3 1.35-3.58 3.44-3.58c.99 0 2.01.18 2.01.18v2.5h-1.28c-1.14 0-1.5.68-1.5 1.43v1.75h2.82l-.45 2.87h-2.37v7.01C18.34 21.13 22 16.99 22 12Z" clipRule="evenodd" /></svg></SocialIcon>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-brand-foreground tracking-wider uppercase">Product</h3>
            <ul className="mt-4 space-y-4">
              <li><Link to="/features" className="text-base text-brand-muted-text hover:text-brand-foreground">Features</Link></li>
              <li><Link to="/pricing" className="text-base text-brand-muted-text hover:text-brand-foreground">Pricing</Link></li>
              <li><Link to="/contact" className="text-base text-brand-muted-text hover:text-brand-foreground">Join Waitlist</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-brand-foreground tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li><Link to="/about" className="text-base text-brand-muted-text hover:text-brand-foreground">About Us</Link></li>
              <li><Link to="#" className="text-base text-brand-muted-text hover:text-brand-foreground">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-brand-foreground tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li><Link to="#" className="text-base text-brand-muted-text hover:text-brand-foreground">Privacy Policy</Link></li>
              <li><Link to="#" className="text-base text-brand-muted-text hover:text-brand-foreground">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-brand-border pt-8">
          <p className="text-base text-brand-muted-text text-center">&copy; {new Date().getFullYear()} Aptura, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;