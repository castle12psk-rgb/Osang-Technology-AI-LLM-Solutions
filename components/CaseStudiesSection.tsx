
import React from 'react';
import { caseStudies } from '../constants';

const CaseStudiesSection: React.FC = () => {
  return (
    <section id="references" className="py-20 lg:py-32 bg-navy/70 relative">
      <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://picsum.photos/seed/dataviz/1920/1080')", opacity: '0.05'}}></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold">Industry References & Case Studies</h2>
          <p className="mt-4 text-lg text-silver max-w-3xl mx-auto">
            다양한 산업 분야에서 입증된 오상테크놀로지의 기술력
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden group">
              <div className="overflow-hidden h-48">
                <img src={study.image} alt={study.client} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <p className="text-sm text-ai-blue font-semibold">{study.industry}</p>
                <h3 className="text-xl font-bold mt-1 mb-2">{study.client}</h3>
                <p className="text-silver text-sm">{study.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;