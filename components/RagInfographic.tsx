
import React from 'react';
import { BarChart3, FileText, Search, History, User, LogOut, Bot, ThumbsUp, ThumbsDown } from 'lucide-react';

const RagInfographic: React.FC = () => {
  return (
    <div className="bg-navy/50 rounded-lg border border-white/10 p-2 h-[380px] w-full flex text-sm text-white overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className="w-1/3 bg-white/5 rounded-l-md p-4 flex flex-col">
        <h1 className="text-base font-bold text-ai-blue mb-6">OSANGTECH</h1>
        <nav className="flex-grow space-y-1 text-xs">
          <a href="#" className="flex items-center p-2 rounded-md text-silver hover:bg-white/10 hover:text-white transition-colors">
            <BarChart3 size={16} className="mr-3" />
            RFP 분석
          </a>
          <a href="#" className="flex items-center p-2 rounded-md text-silver hover:bg-white/10 hover:text-white transition-colors">
            <FileText size={16} className="mr-3" />
            제안서 목차 생성
          </a>
          <a href="#" className="flex items-center p-2 rounded-md bg-ai-blue/20 text-white font-semibold border border-ai-blue/50">
            <Search size={16} className="mr-3 text-ai-blue" />
            사내 지식 검색
          </a>
          <a href="#" className="flex items-center p-2 rounded-md text-silver hover:bg-white/10 hover:text-white transition-colors">
            <History size={16} className="mr-3" />
            내 질문 기록
          </a>
        </nav>
        <div className="border-t border-white/10 pt-3 text-xs">
          <div className="flex items-center mb-2">
            <User size={18} className="mr-2 p-1 bg-white/10 rounded-full" />
            <div>
              <p className="font-semibold">김철수</p>
              <p className="text-silver text-[10px]">일반 사용자</p>
            </div>
          </div>
          <a href="#" className="flex items-center text-silver hover:text-white text-[11px]">
            <LogOut size={12} className="mr-2" />
            로그아웃
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="w-2/3 p-3 flex flex-col bg-navy/40 rounded-r-md">
        <header className="flex-shrink-0">
          <h2 className="text-lg font-bold">사내 지식 검색</h2>
          <p className="text-[11px] text-silver mt-1">AI가 정확한 답변과 근거를 제시합니다.</p>
        </header>

        {/* Chat Area */}
        <div className="flex-grow my-3 space-y-3 overflow-y-auto text-xs pr-2">
          {/* User Question */}
          <div className="flex justify-end items-start gap-2">
            <div className="bg-ai-blue rounded-lg rounded-br-none p-2 max-w-[85%]">
              <p>서울대병원 프로젝트의 UI/UX 개선 상세 내용을 더 알아볼까요?</p>
            </div>
            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center font-bold flex-shrink-0 text-[10px]">나</div>
          </div>
          
          {/* AI Answer */}
          <div className="flex items-start gap-2">
            <div className="w-5 h-5 rounded-full bg-ai-blue flex items-center justify-center flex-shrink-0">
              <Bot size={12} />
            </div>
            <div className="bg-white/5 rounded-lg rounded-bl-none p-2 max-w-[85%] border border-white/10">
              <p className="text-silver mb-2">
                서울대병원 통합 운영체계 고도화 프로젝트의 주요 성과는 다음과 같습니다. 첫째, 진료 프로세스 효율성 증대를 통해 환자 대기 시간을 단축하고...
              </p>
              <div className="border-t border-white/20 pt-1.5">
                <h4 className="font-semibold mb-1 text-[11px]">근거 자료</h4>
                <div className="bg-navy/50 p-1.5 rounded-md text-[10px]">
                    <a href="#" className="font-semibold text-ai-blue hover:underline">서울대병원_통합운영체계_제안서.pdf</a>
                    <p className="text-silver mt-0.5">페이지: <span className="font-mono">p.15, p.22, p.30</span></p>
                </div>
              </div>
              <div className="mt-2 pt-1.5 border-t border-white/10 flex items-center justify-end space-x-2 text-silver text-[10px]">
                <span>도움이 되었나요?</span>
                <button className="hover:text-white"><ThumbsUp size={12} /></button>
                <button className="hover:text-white"><ThumbsDown size={12} /></button>
              </div>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <footer className="flex-shrink-0 border-t border-white/10 pt-2">
           <div className="bg-white/5 border border-white/10 rounded-lg p-2">
                <textarea 
                    className="w-full bg-transparent text-silver placeholder-silver/50 resize-none focus:outline-none text-[11px]" 
                    rows={1}
                    placeholder="자유롭게 질문을 입력해주세요..."
                ></textarea>
                <div className="flex justify-end items-center mt-1">
                    <button className="bg-ai-blue text-white px-3 py-1 rounded-md text-xs font-bold hover:bg-blue-600 transition-colors">검색</button>
                </div>
           </div>
        </footer>
      </main>
    </div>
  );
};

export default RagInfographic;
