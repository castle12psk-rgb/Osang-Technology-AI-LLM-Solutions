import React from 'react';
import { User, KeyRound, FileText, Search, Sparkles, MousePointerClick, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react';

const KnowledgeInfographic: React.FC = () => {
  return (
    <div className="relative rounded-xl shadow-2xl w-full h-72 overflow-hidden bg-navy border border-white/20 p-6 flex flex-col justify-between transform hover:scale-105 transition-transform duration-300 text-white">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-ai-blue/10 opacity-70"></div>
      
      <div className="relative z-10 grid grid-cols-2 gap-6 h-full">
        {/* Left Side: AI Flow */}
        <div className="flex flex-col">
          <div className="mb-4">
            <h4 className="font-bold text-white text-base">지식 기반 AI 흐름</h4>
            <p className="text-xs text-silver">질문에서 답변까지 한번에</p>
          </div>
          <div className="space-y-3 text-xs flex-grow flex flex-col justify-center">
            <div className="flex items-center">
              <User size={16} className="text-ai-blue mr-2" /> <span>질문 입력</span>
            </div>
            <div className="h-4 w-px bg-white/20 ml-2"></div>
            <div className="flex items-center">
              <Search size={16} className="text-ai-blue mr-2" /> <span>내부 문서 검색 및 분석</span>
            </div>
            <div className="h-4 w-px bg-white/20 ml-2"></div>
            <div className="flex items-center font-semibold text-ai-blue/90">
              <Sparkles size={16} className="mr-2" /> <span>AI 답변 생성</span>
            </div>
          </div>
        </div>

        {/* Right Side: Core Values */}
        <div className="flex flex-col">
          <h4 className="font-bold text-white text-base mb-4">핵심 가치</h4>
          <div className="space-y-2 text-xs flex-grow flex flex-col justify-center">
            <div className="flex items-start space-x-2 bg-white/5 p-2 rounded-md">
              <MousePointerClick size={14} className="text-ai-blue mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-white">쉬운 활용</p>
                <p className="text-silver">복잡한 설정 없는 정보 관리</p>
              </div>
            </div>
            {/* Highlighted section for 'Work Efficiency' */}
            <div className="flex items-start space-x-2 bg-ai-blue/10 p-2 rounded-md border border-ai-blue/50">
              <TrendingUp size={14} className="text-ai-blue mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-white">업무 효율 향상</p>
                <p className="text-silver">반복 업무 및 검색 시간 단축</p>
              </div>
            </div>
             <div className="flex items-start space-x-2 bg-white/5 p-2 rounded-md">
              <ShieldCheck size={14} className="text-ai-blue mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-white">정보 보호</p>
                <p className="text-silver">권한 기반 접근 제어</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeInfographic;