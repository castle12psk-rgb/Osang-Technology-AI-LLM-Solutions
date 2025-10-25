import React from 'react';
import { Layers, Cpu, TrendingUp, Sparkles } from 'lucide-react';

const Infographic: React.FC = () => {
  return (
    <div className="relative rounded-xl shadow-2xl w-full h-72 overflow-hidden bg-navy border border-white/20 p-6 flex flex-col justify-between transform hover:scale-105 transition-transform duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-ai-blue/20 via-navy to-navy opacity-50"></div>
      <div className="relative z-10">
        <div className="inline-block p-3 bg-black/30 backdrop-blur-sm rounded-lg">
          <div className="flex items-center space-x-2">
            <Sparkles className="text-ai-blue" size={20}/>
            <h3 className="font-bold text-lg text-white">AI-Powered Business Transformation</h3>
          </div>
          <p className="text-xs text-silver mt-1">AI 기술을 통한 비즈니스 핵심 역량 강화</p>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-3 gap-4 text-center">
        <div className="bg-white/5 p-3 rounded-lg">
          <Layers className="mx-auto text-ai-blue mb-1" size={24} />
          <p className="font-semibold text-sm leading-tight">Advanced Architecture</p>
          <p className="text-xs text-silver mt-1">Vector+Graph RAG</p>
        </div>
        <div className="bg-white/5 p-3 rounded-lg">
          <Cpu className="mx-auto text-ai-blue mb-1" size={24} />
          <p className="font-semibold text-sm leading-tight">Custom Solutions</p>
          <p className="text-xs text-silver mt-1">Medical, CRM, Commerce</p>
        </div>
        <div className="bg-white/5 p-3 rounded-lg">
          <TrendingUp className="mx-auto text-ai-blue mb-1" size={24} />
          <p className="font-semibold text-sm leading-tight">Proven Impact</p>
          <p className="text-xs text-silver mt-1">Efficiency & Accuracy</p>
        </div>
      </div>
      
      <div className="relative z-10 bg-gradient-to-r from-ai-blue to-blue-500 rounded-lg p-3 text-center text-white">
        <p className="text-xs font-semibold uppercase tracking-wider">Highlight: Knowledge Hub</p>
        <p className="font-bold text-lg leading-tight">정보 검색 시간 <span className="text-2xl">80%</span> 단축</p>
      </div>
    </div>
  );
};

export default Infographic;