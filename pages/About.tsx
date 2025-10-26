import React from 'react';

const TEAM_MEMBERS = [
  { name: 'Alex Johnson', role: 'Founder & CEO', imageId: '433' },
  { name: 'Maria Garcia', role: 'Chief Technology Officer', imageId: '382' },
  { name: 'David Chen', role: 'Head of Product', imageId: '628' },
  { name: 'Sarah Lee', role: 'Lead AI Engineer', imageId: '431' },
];

const About: React.FC = () => {
  return (
    <div className="py-20 bg-brand-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl font-bold text-brand-foreground tracking-tight">
            Our Mission: To Simplify Property Management
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-brand-muted-text">
            We believe managing properties shouldn't be complex or time-consuming. By harnessing the power of Generative AI, we're building a future where property management is seamless, intelligent, and empowers you to focus on what matters most: growing your business and providing excellent experiences for your tenants.
          </p>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-foreground text-center mb-12">Meet the Innovators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.name} className="text-center">
                <img
                  className="w-40 h-40 mx-auto rounded-full object-cover"
                  src={`https://picsum.photos/id/${member.imageId}/200/200`}
                  alt={member.name}
                />
                <h3 className="mt-6 text-xl font-semibold text-brand-foreground">{member.name}</h3>
                <p className="text-brand-primary">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-foreground text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-brand-secondary-bg border border-brand-border p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-brand-foreground">Innovate Fearlessly</h3>
              <p className="mt-2 text-brand-muted-text">We push the boundaries of what's possible, constantly seeking new ways to solve old problems.</p>
            </div>
            <div className="bg-brand-secondary-bg border border-brand-border p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-brand-foreground">Customer-Obsessed</h3>
              <p className="mt-2 text-brand-muted-text">Our customers' success is our success. We listen, learn, and build for their needs.</p>
            </div>
            <div className="bg-brand-secondary-bg border border-brand-border p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-brand-foreground">Integrity Always</h3>
              <p className="mt-2 text-brand-muted-text">We operate with transparency and honesty, building trust with our clients and each other.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;