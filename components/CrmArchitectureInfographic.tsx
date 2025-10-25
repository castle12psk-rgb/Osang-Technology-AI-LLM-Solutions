import React from 'react';
import { User, Database, ArrowDown, Network, FunctionSquare, BrainCircuit, TrendingUp, Gift, Sparkles } from 'lucide-react';

const InfoRow = ({ icon: Icon1, icon2: Icon2, title, description, highlight = false }) => (
    <div className={`flex items-center w-full p-3 rounded-lg ${highlight ? 'bg-ai-blue/10 border border-ai-blue/50' : 'bg-white/5'}`}>
        <div className="flex -space-x-2 mr-4">
            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-navy border-2 border-white/20 z-10 flex-shrink-0">
                <Icon1 size={18} className="text-ai-blue" />
            </div>
            {Icon2 && (
                 <div className="w-9 h-9 flex items-center justify-center rounded-full bg-navy border-2 border-white/20 flex-shrink-0">
                    <Icon2 size={18} className="text-ai-blue" />
                </div>
            )}
        </div>
        <div>
            <p className="font-bold text-sm text-white">{title}</p>
            <p className="text-xs text-silver">{description}</p>
        </div>
    </div>
);

const CrmArchitectureInfographic: React.FC = () => {
    return (
        <div className="p-4 h-full w-full flex flex-col items-center">
            <h4 className="font-bold text-base mb-4 text-white text-center flex-shrink-0">OSE-AI CRM 1.0 아키텍처 구성</h4>
            <div className="flex flex-col items-center w-full flex-grow justify-around">
                
                <InfoRow 
                    icon={User} 
                    icon2={Database}
                    title="고객 및 데이터 소스" 
                    description="온/오프라인 고객 데이터 통합" 
                />

                <ArrowDown size={24} className="text-white/30 my-1" />
                
                <InfoRow 
                    icon={Network} 
                    icon2={FunctionSquare}
                    title="데이터 처리 및 정제" 
                    description="API Gateway & Lambda" 
                />

                <ArrowDown size={24} className="text-white/30 my-1" />

                 <InfoRow 
                    icon={BrainCircuit} 
                    icon2={Sparkles}
                    title="OSE-AI CRM Core" 
                    description="이탈 예측, LTV 분석, 개인화" 
                    highlight={true}
                />
                
                <ArrowDown size={24} className="text-white/30 my-1" />
                
                 <InfoRow 
                    icon={TrendingUp} 
                    icon2={Gift}
                    title="비즈니스 성과" 
                    description="매출 증대 및 고객 충성도 향상" 
                />
            </div>
        </div>
    );
};

export default CrmArchitectureInfographic;
