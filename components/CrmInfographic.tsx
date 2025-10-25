import React from 'react';
import { Users, Gift, TrendingUp, Archive, DollarSign, UserCheck, Zap, LineChart } from 'lucide-react';

const CrmInfographic: React.FC = () => {
  return (
    <div className="relative rounded-xl shadow-2xl w-full h-80 overflow-hidden bg-navy border border-white/20 p-6 flex flex-col justify-between transform hover:scale-105 transition-transform duration-300 text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-ai-blue/10 via-navy to-navy opacity-70"></div>
      
      <div className="relative z-10 grid grid-cols-2 gap-6 h-full">
        {/* Left Side: OSE-AI CRM Flow */}
        <div className="flex flex-col text-center">
          <h4 className="font-bold text-white text-base mb-2">성과로 이어지는 OSE-AI CRM</h4>
          <div className="flex-grow flex flex-col items-center justify-center space-y-2">
            <div className="flex items-center text-xs bg-white/5 py-1 px-3 rounded-full">
              <Users size={14} className="mr-2 text-ai-blue" />
              <span>고객 (사용자)</span>
            </div>
            <div className="w-px h-4 bg-white/20"></div>
            <div className="bg-navy border-2 border-ai-blue text-white font-bold py-2 px-4 rounded-lg shadow-lg">
              OSE-AI CRM
            </div>
            <div className="w-px h-4 bg-white/20"></div>
            <div className="grid grid-cols-3 gap-2 text-xs w-full">
              <div className="bg-white/5 p-1 rounded-md">
                <Gift size={16} className="mx-auto mb-1 text-ai-blue" />
                <p className="leading-tight">개인화<br/>추천</p>
              </div>
              <div className="bg-white/5 p-1 rounded-md">
                <TrendingUp size={16} className="mx-auto mb-1 text-ai-blue" />
                <p className="leading-tight">매출<br/>예측</p>
              </div>
              <div className="bg-white/5 p-1 rounded-md">
                <Archive size={16} className="mx-auto mb-1 text-ai-blue" />
                <p className="leading-tight">재고<br/>관리</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Core Benefits */}
        <div className="flex flex-col">
          <h4 className="font-bold text-white text-base mb-2">핵심 적용 영역</h4>
          <div className="space-y-2 flex-grow flex flex-col justify-center">
            {/* Highlighted: Sales Growth */}
            <div className="flex items-start space-x-2 bg-ai-blue/10 p-2 rounded-md border border-ai-blue/50">
              <DollarSign size={16} className="text-ai-blue mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-white text-sm">매출 성장</p>
                <p className="text-silver text-xs">개인화 추천, 매출 예측 지원</p>
              </div>
            </div>
            <div className="flex items-start space-x-2 bg-white/5 p-2 rounded-md">
              <UserCheck size={16} className="text-ai-blue mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-white text-sm">고객 유지</p>
                <p className="text-silver text-xs">이탈 예측 및 복귀 전략 제공</p>
              </div>
            </div>
            <div className="flex items-start space-x-2 bg-white/5 p-2 rounded-md">
              <Zap size={16} className="text-ai-blue mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-white text-sm">운영 효율성</p>
                <p className="text-silver text-xs">스마트 재고 관리 및 비용 절감</p>
              </div>
            </div>
            <div className="flex items-start space-x-2 bg-white/5 p-2 rounded-md">
              <LineChart size={16} className="text-ai-blue mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-white text-sm">데이터 기반 의사결정</p>
                <p className="text-silver text-xs">AI 인사이트 및 데이터 지원</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrmInfographic;