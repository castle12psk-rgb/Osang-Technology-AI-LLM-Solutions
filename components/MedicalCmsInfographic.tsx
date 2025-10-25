// Fix: Replaced corrupted file content with a valid React component.
import React from 'react';
import { Database, BrainCircuit, ShieldCheck, MonitorSmartphone, ArrowDown } from 'lucide-react';

const InfoRow = ({ icon: Icon1, title, description, highlight = false }: { icon: React.ElementType, title: string, description: string, highlight?: boolean }) => (
    <div className={`flex items-center w-full p-3 rounded-lg ${highlight ? 'bg-ai-blue/10 border border-ai-blue/50' : 'bg-white/5'}`}>
        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-navy border-2 border-white/20 z-10 flex-shrink-0 mr-4">
            <Icon1 size={18} className="text-ai-blue" />
        </div>
        <div>
            <p className="font-bold text-sm text-white">{title}</p>
            <p className="text-xs text-silver">{description}</p>
        </div>
    </div>
);

const MedicalCmsInfographic: React.FC = () => {
    return (
        <div className="p-4 h-full w-full flex flex-col items-center">
            <h4 className="font-bold text-base mb-4 text-white text-center flex-shrink-0">OSE-Medical CMS & AI Secretary</h4>
            <div className="flex flex-col items-center w-full flex-grow justify-around">
                
                <InfoRow 
                    icon={Database} 
                    title="EMR 및 의료 데이터" 
                    description="환자 기록, 의료 정보 연동 (비식별화)" 
                />

                <ArrowDown size={24} className="text-white/30 my-1" />
                
                <InfoRow 
                    icon={BrainCircuit} 
                    title="의료 특화 LLM" 
                    description="Fine-tuning된 LLM으로 정보 생성/응답" 
                    highlight={true}
                />

                <ArrowDown size={24} className="text-white/30 my-1" />

                 <InfoRow 
                    icon={ShieldCheck} 
                    title="보안 및 규정 준수" 
                    description="HIPAA, GDPR 등 의료 데이터 규정 준수" 
                />
                
                <ArrowDown size={24} className="text-white/30 my-1" />
                
                 <InfoRow 
                    icon={MonitorSmartphone} 
                    title="다채널 콘텐츠 제공" 
                    description="환자 포털, 모바일 앱, 챗봇" 
                />
            </div>
        </div>
    );
};

export default MedicalCmsInfographic;
