import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-[#E8DCC2] border-4 border-lj-dark p-6 relative shadow-[8px_8px_0px_0px_rgba(74,55,40,0.2)]">
      <div className="absolute -top-6 -left-6 bg-lj-rust text-lj-paper p-3 border-2 border-lj-dark rounded-full shadow-sm transform -rotate-12">
        {icon}
      </div>
      <h3 className="font-display text-2xl mb-3 mt-4 text-lj-brown uppercase tracking-wide">{title}</h3>
      <div className="h-1 w-12 bg-lj-rust mb-4"></div>
      <p className="font-serif text-lg leading-relaxed text-lj-dark opacity-90">
        {description}
      </p>
    </div>
  );
};