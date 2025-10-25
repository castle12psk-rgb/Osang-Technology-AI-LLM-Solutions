
import React from 'react';
import { ArrowRight, Cpu, Link2, GitBranch, Database } from 'lucide-react';

const flowchartItems = [
    { icon: Cpu, label: 'OSE-AI CRM', description: 'AI 기반 고객관계관리' },
    { icon: Link2, label: 'OSE-O2O/D2C', description: 'AI 커머스 스위트' },
    { icon: Database, label: 'OSE-Medical CMS', description: 'AI 의료 콘텐츠/비서' },
    { icon: GitBranch, label: 'OSE-RAG System', description: 'RAG 지식허브' },
];

const HeroSection: React.FC = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

  return (
    <section id="home" className="relative h-screen min-h-[800px] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.theyoungtimes.com/news/photo/202502/2651_6043_3119.jpg"
          alt="Abstract Technology Background"
          className="w-full h-full object-cover animate-bg-pan"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/75 to-navy"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center">
        <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-400 to-ai-blue">
              AI와 LLM으로 산업을 새롭게 정의하다
            </h1>
            <p className="text-2xl md:text-3xl font-medium text-silver mb-8 max-w-5xl">
              Osang Technology — <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-ai-blue font-bold">Where AI Becomes Business.</span>
            </p>
        </div>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-16 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <button onClick={() => scrollToSection('solutions')} className="bg-gradient-to-r from-ai-blue to-blue-500 text-white font-bold py-3 px-8 rounded-full flex items-center justify-center space-x-2 hover:scale-105 hover:shadow-lg hover:shadow-ai-blue/40 transform transition-all duration-300">
            <span>솔루션 보기</span>
            <ArrowRight size={20} />
          </button>
          <button onClick={() => scrollToSection('about')} className="bg-white/10 border border-white/20 backdrop-blur-lg text-white font-bold py-3 px-8 rounded-full hover:bg-white/20 transition-colors">
            회사 소개
          </button>
        </div>

        <div className="w-full max-w-5xl mt-8 md:mt-16 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <div className="hidden md:flex items-start justify-between">
                {flowchartItems.map((item, index) => (
                    <React.Fragment key={item.label}>
                        <div 
                          className="flex flex-col items-center group text-center w-40 animate-float"
                          style={{ animationDelay: `${index * 0.3}s` }}
                        >
                            <div className="w-20 h-20 mb-3 flex items-center justify-center rounded-full bg-white/5 border-2 border-ai-blue/30 group-hover:bg-ai-blue/20 group-hover:border-ai-blue transition-all duration-300 transform group-hover:scale-110">
                                <item.icon size={32} className="text-ai-blue" />
                            </div>
                            <span className="font-semibold text-white text-base leading-tight">{item.label}</span>
                            <span className="text-xs text-silver mt-1">{item.description}</span>
                        </div>
                        {index < flowchartItems.length - 1 && (
                             <div className="flex-1 mt-10 mx-2 relative">
                                <div className="border-t-2 border-dashed border-white/20"></div>
                                <ArrowRight size={20} className="text-white/40 absolute -right-2.5 -top-[11px]" />
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
            {/* Mobile view for flowchart */}
            <div className="md:hidden flex flex-wrap justify-center gap-4">
                {flowchartItems.map((item, index) => (
                   <div key={index} className="bg-white/10 border border-white/20 rounded-lg p-3 w-40 text-center">
                       <item.icon className="text-ai-blue mx-auto mb-2" size={24}/>
                       <span className="text-base font-semibold">{item.label}</span>
                       <p className="text-xs text-silver mt-1 font-normal">{item.description}</p>
                   </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;