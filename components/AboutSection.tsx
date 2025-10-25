import React from 'react';
import { CloudCog, Shuffle, BadgeCheck, CheckCircle2 } from 'lucide-react';
import { aboutData } from '../constants';
import Infographic from './Infographic';
import KnowledgeInfographic from './KnowledgeInfographic';
import CrmInfographic from './CrmInfographic';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white text-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy">About Osang Technology</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            {aboutData.description}
          </p>
        </div>

        {/* Strengths section with redesigned cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {aboutData.strengths.map((strength, index) => {
            const Icon = [CloudCog, Shuffle, BadgeCheck][index];
            return (
              <div key={index} className="relative rounded-xl overflow-hidden group hover:-translate-y-1 transition-transform duration-300 shadow-lg min-h-[250px]">
                <img 
                  src={strength.image} 
                  alt={strength.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-navy/40"></div>
                <div className="relative z-10 flex flex-col items-center text-center p-8 h-full justify-center">
                  <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-white/10 text-ai-blue border border-white/20 flex-shrink-0">
                    <Icon size={32} strokeWidth={2} />
                  </div>
                  <h3 className="font-bold text-lg text-white mb-2">{strength.title}</h3>
                  <p className="text-white/90 text-sm">{strength.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline and Image section */}
        <div className="grid lg:grid-cols-2 lg:gap-16 items-start">
          <div className="mb-12 lg:mb-0">
            <h3 className="text-2xl font-bold text-navy mb-10">Our Journey of Innovation</h3>
            <div className="relative border-l-2 border-ai-blue/30 ml-4">
              {aboutData.timeline.map((item, index) => (
                <div key={index} className="mb-2 pl-12 relative last:mb-0">
                   <div className="absolute -left-[9px] top-2 w-4 h-4 bg-white rounded-full border-2 border-ai-blue"></div>
                   <p className="absolute -left-14 top-0 text-ai-blue font-bold text-lg">{item.year}</p>
                   <div className="space-y-3">
                       {item.events.map((event, eventIndex) => (
                            <div key={eventIndex} className={`p-4 rounded-lg border transition-all duration-300 ${event.highlight ? 'bg-blue-50 border-ai-blue/50 shadow-sm' : 'bg-transparent border-gray-200'}`}>
                                <div className="flex items-start">
                                    <CheckCircle2 className={`w-5 h-5 mt-0.5 mr-3 flex-shrink-0 ${event.highlight ? 'text-ai-blue' : 'text-gray-400'}`} />
                                    <p className={`flex-1 text-gray-700 ${event.highlight ? 'font-semibold text-navy' : ''}`}>{event.text}</p>
                                </div>
                            </div>
                       ))}
                   </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <Infographic />
            <KnowledgeInfographic />
            <CrmInfographic />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;