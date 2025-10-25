import React, { useState, useEffect } from 'react';
import { X, TrendingUp, UserCheck, Archive, BarChart3, Bot, ShieldCheck, Megaphone } from 'lucide-react';

const popupData = {
  crm: {
    title: "OSE-AI CRM",
    catchphrase: "데이터 기반으로 고객 유지부터 매출 성장까지!",
    image: "https://www.unite.ai/wp-content/uploads/2024/11/CRM.webp",
    keyPoints: [
      { icon: TrendingUp, title: "매출 성장 촉진 (+30%)", description: "AI 기반 개인화 추천 및 정확한 매출 예측으로 성과를 극대화합니다." },
      { icon: UserCheck, title: "고객 이탈 방지 (-40%)", description: "이탈 위험 고객을 사전에 예측하고 선제적인 복귀 전략을 제공합니다." },
      { icon: Archive, title: "재고 관리 효율성 (-25%)", description: "AI 수요 예측을 통해 재고 과잉 및 부족 문제를 해결하고 비용을 절감합니다." },
      { icon: BarChart3, title: "데이터 기반 의사결정 (+30%)", description: "분산된 데이터를 통합 분석하여 비즈니스 인사이트를 신속하게 제공합니다." }
    ],
    ctaLink: "#solutions"
  },
  geo: {
    title: "GEO 최적화",
    catchphrase: "AI가 이끄는 검색방향, 차세대 디지털 홍보전략",
    image: "https://www.journalduweb.org/wp-content/uploads/2025/08/generative-engine-optimization.png",
    keyPoints: [
      { icon: Bot, title: "AI 검색 최적화", description: "생성형 AI 시대, 검색엔진과 LLM 모두에게 최적화된 콘텐츠로 노출을 극대화합니다." },
      { icon: ShieldCheck, title: "신뢰성 있는 정보 제공", description: "구조화된 데이터(JSON-LD)로 AI에게 명확하고 신뢰도 높은 정보를 제공하여 답변 인용 확률을 높입니다." },
      { icon: Megaphone, title: "전략적 콘텐츠 홍보", description: "단순 노출을 넘어, 브랜드의 핵심 가치를 AI가 이해하고 사용자에게 전달하는 전략적 홍보가 가능해집니다." }
    ],
    ctaLink: "#technologies"
  }
};

const PromotionalPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'crm' | 'geo'>('crm');
  const [dontShowAgain, setDontShowAgain] = useState(false);

  useEffect(() => {
    const lastClosed = localStorage.getItem('popupLastClosed');
    const today = new Date().toDateString();

    if (lastClosed !== today) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000); // Show popup after 2 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    if (dontShowAgain) {
      localStorage.setItem('popupLastClosed', new Date().toDateString());
    }
    setIsOpen(false);
  };
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    handleClose();
  };

  if (!isOpen) {
    return null;
  }

  const activeData = popupData[activeTab];

  return (
    <div className="fixed bottom-8 right-8 z-[100] animate-fade-in">
      <div 
        className="bg-navy border border-white/20 rounded-2xl w-full max-w-md max-h-[85vh] flex flex-col overflow-hidden shadow-2xl shadow-ai-blue/20 animate-fade-in-up"
        style={{ animationDelay: '0.1s', animationDuration: '0.5s' }}
      >
        
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-white/10 flex-shrink-0">
          <h2 className="text-lg font-bold">
            OSANG <span className="text-ai-blue">TECH</span> PROMO
          </h2>
          <button onClick={handleClose} className="text-silver hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>
        
        {/* Tabs */}
        <div className="flex space-x-2 px-4 pt-3 pb-3 border-b border-white/10 flex-shrink-0">
            <button 
                onClick={() => setActiveTab('crm')} 
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors w-full ${activeTab === 'crm' ? 'bg-ai-blue text-white' : 'text-silver hover:bg-white/10'}`}
            >
                OSE-AI CRM
            </button>
            <button 
                onClick={() => setActiveTab('geo')} 
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors w-full ${activeTab === 'geo' ? 'bg-ai-blue text-white' : 'text-silver hover:bg-white/10'}`}
            >
                GEO 최적화
            </button>
        </div>

        {/* Content */}
        <div className="flex-grow overflow-y-auto">
            <div key={activeTab} className="animate-fade-in" style={{ animationDuration: '0.5s' }}>
                {/* Image Banner */}
                <div className="relative h-24 w-full">
                    <img src={activeData.image} alt={activeData.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"></div>
                </div>

                {/* Text Content */}
                <div className="p-6">
                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-ai-blue mb-2">{activeData.title}</h3>
                    <p className="text-base text-silver mb-4">{activeData.catchphrase}</p>
                    
                    <div className="space-y-3">
                        {activeData.keyPoints.map((point, index) => (
                            <div key={index} className="flex items-start">
                                <div className="bg-white/10 text-ai-blue rounded-full p-1.5 mr-3 flex-shrink-0">
                                    <point.icon size={16} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white text-sm">{point.title}</h4>
                                    <p className="text-xs text-silver">{point.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button onClick={() => scrollToSection(activeData.ctaLink)} className="mt-6 w-full bg-gradient-to-r from-ai-blue to-blue-500 text-white font-bold py-2.5 px-6 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-ai-blue/40 transform transition-all duration-300 text-sm">
                        자세히 보기
                    </button>
                </div>
            </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-navy/80 border-t border-white/10 flex-shrink-0">
          <div className="flex items-center">
            <input 
              type="checkbox" 
              id="dontShowAgain" 
              checked={dontShowAgain} 
              onChange={(e) => setDontShowAgain(e.target.checked)} 
              className="w-4 h-4 text-ai-blue bg-gray-700 border-gray-600 rounded focus:ring-ai-blue focus:ring-offset-navy"
            />
            <label htmlFor="dontShowAgain" className="ml-2 text-sm text-silver">
              오늘 하루 보지 않기
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionalPopup;