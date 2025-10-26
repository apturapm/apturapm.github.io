import React from 'react';

const icons: { [key: string]: React.ReactNode } = {
  UserGroupIcon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962A3.375 3.375 0 019 12.125v1.5a3.375 3.375 0 01-3.375 3.375H3.375A3.375 3.375 0 010 12.125v-1.5a3.375 3.375 0 013.375-3.375H5.25m5.231 1.562a3.375 3.375 0 00-1.5-1.5m1.5 1.5a3.375 3.375 0 011.5 1.5m3.865-1.5a3.375 3.375 0 01-1.5 1.5m1.5-1.5a3.375 3.375 0 001.5-1.5m-5.365 3.375l-1.5-1.5m1.5 1.5l1.5-1.5m-1.5 1.5v-1.5m1.5 1.5v1.5m-3.865-4.875c.158-.823.93-1.425 1.83-1.39l.265.022a2.25 2.25 0 012.128 2.25v.038" /></svg>,
  WrenchScrewdriverIcon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.527-1.032.527-2.345 0-3.377M11.42 15.17l-4.637 4.637a2.121 2.121 0 01-3 0L3 17.25a2.121 2.121 0 010-3l4.637-4.637M11.42 15.17L15.17 11.42" /></svg>,
  CurrencyDollarIcon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  ChatBubbleLeftRightIcon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193l-3.722.534a1.125 1.125 0 01-1.097-.727l-.452-1.44a1.125 1.125 0 00-2.072 0l-.452 1.44a1.125 1.125 0 01-1.097.727l-3.722-.534A2.095 2.095 0 013 14.894v-4.286c0-.97.616-1.813 1.5-2.097V6.5a2.25 2.25 0 012.25-2.25h3.5a2.25 2.25 0 012.25 2.25v2.011zM12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>,
  ChartBarIcon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>,
  InboxStackIcon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" /></svg>,
  DocumentChartBarIcon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h4.5a2.25 2.25 0 011.591.659l2.25 2.25a2.25 2.25 0 01.659 1.591v3.75m-3-4.5V17.25m0-10.5h3.75m-3.75 0h-3.75m3.75 0v3.75m0-3.75L15.375 9" /></svg>,
  ShieldCheckIcon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.016h-.008v-.016z" /></svg>,
};


interface FeatureCardProps {
  icon: string;
  name: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, name, description }) => {
  return (
    <div className="bg-brand-background border border-brand-border p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-primary text-white">
        {icons[icon]}
      </div>
      <h3 className="mt-5 text-lg font-semibold text-brand-foreground">{name}</h3>
      <p className="mt-2 text-base text-brand-muted-text">{description}</p>
    </div>
  );
};

export default FeatureCard;