import React from 'react';
import { CloudCog, ShoppingCart, BrainCircuit, Code } from 'lucide-react';

// A single card component for the bottom row
const BenefitCard = ({ icon: Icon, title, version, benefitsData }) => (
  <div className="flex flex-col items-center text-center">
    {/* Icon and Title */}
    <div className="flex flex-col items-center justify-center min-h-[60px]">
      <Icon size={28} className="text-ai-blue mb-2" />
      <p className="font-bold text-sm text-white leading-tight">{title}</p>
      {version && <p className="font-semibold text-xs text-silver leading-tight">{version}</p>}
    </div>
    
    {/* Vertical Connector */}
    <div className="w-px h-4 bg-white/20 my-2"></div>
    
    {/* Benefits Box */}
    <div className="bg-navy/50 p-3 rounded-lg border border-white/10 text-left text-xs w-full h-full min-h-[180px] lg:min-h-[200px]">
      {benefitsData.map((section, i) => (
        <div key={i} className={i > 0 ? 'mt-3' : ''}>
          <h5 className="font-bold mb-1 text-white">{section.title}</h5>
          <ul className="list-disc list-inside text-silver space-y-1">
            {section.items.map((item, j) => <li key={j}>{item}</li>)}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

const CommerceInfographic: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-start w-full h-full font-sans text-sm py-4">
      {/* Top Level: Title */}
      <div className="flex flex-col items-center text-center">
        <div className="relative w-12 h-12 flex items-center justify-center">
          <CloudCog size={40} className="text-ai-blue" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-ai-blue text-white rounded-sm px-1 font-extrabold text-[10px] border-2 border-navy">AI</div>
        </div>
        <p className="text-lg font-bold text-white mt-2">OSE-O2O/D2C</p>
        <p className="text-base text-silver">AI Commerce Suite 1.0</p>
      </div>

      {/* Connectors for Desktop */}
      <div className="w-full relative h-10 mt-2 mb-1 hidden sm:block">
        {/* Main vertical stem */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-1/2 bg-white/20"></div>
        {/* Horizontal bar */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[85%] h-px bg-white/20"></div>
        {/* Droppers from horizontal bar */}
        <div className="absolute top-1/2 left-[7.5%] w-px h-1/2 bg-white/20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-px h-1/2 bg-white/20"></div>
        <div className="absolute top-1/2 right-[7.5%] w-px h-1/2 bg-white/20"></div>
      </div>
      
      {/* Connector for Mobile */}
      <div className="w-px h-6 bg-white/20 my-2 sm:hidden"></div>
      
      {/* Bottom Level: Grid of 3 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-4 sm:gap-x-3 w-full">
        <BenefitCard
          icon={ShoppingCart}
          title="OSE-O2O/D2C"
          version="Commerce Platform 2.0"
          benefitsData={[
            { title: "Role & Strengths", items: ["Omnichannel management and automated operations"] },
            { title: "Expected Benefit", items: ["Increased sales", "Cost reduction"] }
          ]}
        />
        <BenefitCard
          icon={BrainCircuit}
          title="OSE-AI CRM"
          version="1.0"
          benefitsData={[
            { 
              title: "Expected Benefits", 
              items: [
                'AI-powered customer analysis and predictions',
                'Personalized marketing',
                'Enhanced customer loyalty',
                'Maximized marketing effectiveness',
              ] 
            }
          ]}
        />
        <BenefitCard
          icon={Code}
          title="OSE-API Generator"
          version="1.0"
          benefitsData={[
            { 
              title: "Expected Benefits", 
              items: [
                'Improved development productivity',
                'Enhanced system security',
                'Improved system security',
              ] 
            }
          ]}
        />
      </div>
    </div>
  );
};

export default CommerceInfographic;