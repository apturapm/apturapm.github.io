export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About Us' },
];

export const FEATURES = [
    {
      icon: 'UserGroupIcon',
      name: 'AI-Powered Tenant Screening',
      description: 'Automate background checks, credit reports, and rental history analysis to find the most qualified tenants in record time.',
    },
    {
      icon: 'WrenchScrewdriverIcon',
      name: 'Predictive Maintenance',
      description: 'Our AI algorithms analyze property data to predict maintenance needs before they become costly problems, saving you time and money.',
    },
    {
      icon: 'CurrencyDollarIcon',
      name: 'Automated Rent Collection',
      description: 'Streamline your cash flow with automated online payments, reminders, and late fee calculations. Get paid on time, every time.',
    },
    {
      icon: 'ChatBubbleLeftRightIcon',
      name: '24/7 AI Leasing Assistant',
      description: 'Never miss a lead. Our AI assistant answers prospect questions, schedules tours, and pre-qualifies applicants around the clock.',
    },
    {
      icon: 'ChartBarIcon',
      name: 'Dynamic Pricing',
      description: 'Maximize your rental income. Aptura analyzes market data, seasonality, and local demand to suggest optimal rent prices.',
    },
    {
      icon: 'InboxStackIcon',
      name: 'Centralized Communication',
      description: 'Keep all tenant and owner communications organized in one place. Track requests, announcements, and conversations effortlessly.',
    },
     {
      icon: 'DocumentChartBarIcon',
      name: 'Financial Reporting',
      description: 'Gain real-time insights into your portfolio performance with comprehensive dashboards and automated financial reports.',
    },
    {
      icon: 'ShieldCheckIcon',
      name: 'Compliance Automation',
      description: 'Stay up-to-date with local and national regulations. Our system helps automate compliance checks and lease generation.',
    }
];

export const PRICING_PLANS = [
  {
    name: 'Starter',
    popular: false,
    description: 'For individual landlords and small portfolios just getting started.',
    price: {
      monthly: 29,
      annually: 279,
    },
    features: [
      'Up to 10 units',
      'AI-Powered Tenant Screening',
      'Automated Rent Collection',
      'Centralized Communication',
      'Basic Financial Reporting',
      'Email & Chat Support',
    ],
    cta: 'Join Waitlist',
  },
  {
    name: 'Pro',
    popular: true,
    description: 'For growing property managers who need more power and automation.',
    price: {
      monthly: 79,
      annually: 759,
    },
    features: [
      'Up to 50 units',
      'Everything in Starter, plus:',
      'Predictive Maintenance',
      '24/7 AI Leasing Assistant',
      'Dynamic Pricing Suggestions',
      'Advanced Reporting',
      'Priority Support',
    ],
    cta: 'Join Waitlist',
  },
  {
    name: 'Enterprise',
    popular: false,
    description: 'For large portfolios and teams with custom needs.',
    price: {
      monthly: 'Custom',
      annually: 'Custom',
    },
    features: [
      'Unlimited units',
      'Everything in Pro, plus:',
      'Compliance Automation',
      'API Access & Integrations',
      'Dedicated Account Manager',
      'Custom Onboarding',
    ],
    cta: 'Join Waitlist',
  },
];