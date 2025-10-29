
import React, { useState } from 'react';
import { solutions } from '../constants';
import * as LucideIcons from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell } from 'recharts';
import CommerceInfographic from './CommerceInfographic';
import CrmArchitectureInfographic from './CrmArchitectureInfographic';
import MedicalCmsInfographic from './MedicalCmsInfographic';
import RagInfographic from './RagInfographic';

const SolutionsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const activeSolution = solutions[activeTab];
  
  const COLORS = ['#BFBFBF', '#007AFF'];

  return (
    <section id="solutions" className="pt-12 lg:pt-20 pb-20 lg:pb-32 bg-navy/70 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop"
          alt="Abstract AI technology background"
          className="absolute inset-0 w-full h-full object-cover animate-bg-pan"
          style={{
            opacity: '0.25',
            mixBlendMode: 'luminosity'
          }}
        />
        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold">AI & LLM Solutions</h2>
                <p className="mt-4 text-lg text-silver max-w-3xl mx-auto">
                    산업별 맞춤형 AI 솔루션으로 비즈니스 혁신을 주도합니다.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                {/* Tabs */}
                <div className="flex lg:flex-col lg:w-1/4 overflow-x-auto pb-4 -mx-6 px-6 lg:mx-0 lg:px-0">
                    {solutions.map((solution, index) => {
                        const Icon = (LucideIcons as any)[solution.icon];
                        return (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`shine-effect relative overflow-hidden text-left py-6 px-4 rounded-lg transition-all duration-300 w-full min-w-[280px] lg:min-w-full group flex items-start space-x-4 ${
                                    activeTab === index
                                    ? 'bg-white/10 border border-ai-blue/50'
                                    : 'bg-transparent text-silver hover:bg-white/5'
                                }`}
                            >
                                {Icon && <Icon className={`w-6 h-6 mt-1 flex-shrink-0 transition-colors ${activeTab === index ? 'text-ai-blue' : 'text-silver group-hover:text-ai-blue'}`} />}
                                <div>
                                    <h3 className={`font-bold text-lg ${activeTab === index ? 'text-white' : 'text-silver group-hover:text-white'}`}>{solution.title}</h3>
                                    <p className={`text-sm ${activeTab === index ? 'text-ai-blue' : 'opacity-70'}`}>{solution.subtitle}</p>
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Content */}
                <div className="lg:w-3/4">
                    <div key={activeTab} className="bg-white/5 border border-white/10 rounded-xl p-6 lg:p-8 backdrop-blur-lg animate-fade-in-up lg:min-h-[480px]">
                        {/* 1. Overview */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-2">{activeSolution.title}</h3>
                            <p className="text-silver">{activeSolution.description}</p>
                        </div>

                        {/* 2. Key Features */}
                        <div className="mb-10">
                            <h4 className="text-xl font-semibold mb-4 text-ai-blue">핵심 기능</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {activeSolution.features.map((feature, idx) => (
                                    <div key={idx} className="bg-navy/50 p-4 rounded-lg border border-white/10">
                                        <div className="flex items-start">
                                            {(LucideIcons as any)[feature.icon] && React.createElement((LucideIcons as any)[feature.icon], { className: "w-5 h-5 text-ai-blue mt-1 mr-3 flex-shrink-0" })}
                                            <div>
                                                <h5 className="font-bold text-white">{feature.title}</h5>
                                                <p className="text-sm text-silver mt-1">{feature.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        {/* 3. Showcase & Architecture */}
                        <div className="grid lg:grid-cols-2 gap-8">
                            {/* 3a. Showcase Prototype */}
                            <div>
                                <h4 className="text-xl font-semibold mb-4 text-ai-blue">주요 기능 예시</h4>
                                <div className="bg-navy/50 p-2 rounded-lg border border-white/10 h-full">
                                    {activeSolution.title === "OSE-O2O/D2C AI Commerce Suite" ? (
                                        <CommerceInfographic />
                                    ) : activeSolution.title === "OSE-AI CRM / Medical CRM" ? (
                                        <CrmArchitectureInfographic />
                                    ) : activeSolution.title === "OSE-Medical CMS & AI Health Secretary" ? (
                                        <MedicalCmsInfographic />
                                    ) : activeSolution.title === "OSE-RAG Knowledge Hub" ? (
                                        <RagInfographic />
                                    ) : (
                                        <>
                                            <p className="font-bold text-white px-4 pt-4">{activeSolution.showcase.title}</p>
                                            <p className="text-sm text-silver mt-1 mb-4 px-4">{activeSolution.showcase.description}</p>
                                            <div className="h-48">
                                                <ResponsiveContainer width="100%" height="100%">
                                                    <BarChart data={activeSolution.showcase.chartData} layout="vertical" margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
                                                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />
                                                        <XAxis type="number" stroke="#BFBFBF" domain={[0, 'dataMax + 5']} />
                                                        <YAxis type="category" dataKey="name" stroke="#BFBFBF" width={80} tick={{ fontSize: 12 }} />
                                                        <Tooltip contentStyle={{ backgroundColor: '#001C40', border: '1px solid rgba(255, 255, 255, 0.2)'}} cursor={{fill: 'rgba(255,255,255,0.1)'}} />
                                                        <Bar dataKey={Object.keys(activeSolution.showcase.chartData[0])[1]} name={Object.keys(activeSolution.showcase.chartData[0])[1]}>
                                                        {activeSolution.showcase.chartData.map((entry, index) => (
                                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                            ))}
                                                        </Bar>
                                                    </BarChart>
                                                </ResponsiveContainer>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                            {/* 3b. Architecture Infographic */}
                            <div>
                                <h4 className="text-xl font-semibold mb-4 text-ai-blue">솔루션 아키텍처</h4>
                                <div className="bg-navy/50 p-6 rounded-lg border border-white/10 h-full">
                                    <div className="relative">
                                        {activeSolution.architecture.steps.map((step, idx) => (
                                            <div key={idx} className="flex items-start mb-4 last:mb-0">
                                                <div className="flex flex-col items-center mr-4">
                                                    <div className="bg-white/10 border-2 border-ai-blue/50 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                                                        {(LucideIcons as any)[step.icon] && React.createElement((LucideIcons as any)[step.icon], { className: "w-6 h-6 text-ai-blue" })}
                                                    </div>
                                                    {idx < activeSolution.architecture.steps.length - 1 && <div className="w-0.5 h-8 bg-white/20 mt-2"></div>}
                                                </div>
                                                <div>
                                                    <h5 className="font-bold text-white mt-3">{step.title}</h5>
                                                    <p className="text-xs text-silver mt-1">{step.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default SolutionsSection;