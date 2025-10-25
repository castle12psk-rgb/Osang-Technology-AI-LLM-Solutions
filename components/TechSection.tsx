import React from 'react';
import { keyTechnologies } from '../constants';
import { Layers, GitMerge, SearchCode, Server, User, DatabaseZap, Combine, Bot, MessageSquare, MoveRight } from 'lucide-react';

const icons = [<Layers key="1"/>, <GitMerge key="2"/>, <SearchCode key="3"/>, <Server key="4"/>];

const TechSection: React.FC = () => {
  return (
    <section id="technologies" className="py-20 lg:py-32 bg-white text-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy">Key Technologies</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            AI 기술이 만들어내는 차별화된 경쟁력
          </p>
        </div>

        <div className="mb-16 mt-16 grid md:grid-cols-2 gap-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <div className="relative rounded-xl overflow-hidden group h-64 shadow-lg">
                <img src="https://cdn.prod.website-files.com/66d30e4e03308c30f799c1c9/677e37dff86808f1f6dba97d_3476024-0-12003600-1721826466-iStock-2149059417.webp" alt="RAG Architecture" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-navy/10"></div>
                <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-bold text-white">RAG Architecture</h3>
                    <p className="text-sm text-silver mt-1">Vector DB와 Graph RAG를 결합한 정확한 답변 생성</p>
                </div>
            </div>
            <div className="relative rounded-xl overflow-hidden group h-64 shadow-lg">
                <img src="https://puredigital.nl/wp-content/uploads/2025/10/geo-marketing.jpg.webp" alt="Generative Engine Optimization" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-navy/10"></div>
                <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-bold text-white">GEO (Generative Engine Optimization)</h3>
                    <p className="text-sm text-silver mt-1">AI 생성 콘텐츠의 검색 엔진 및 LLM 노출 효과 극대화</p>
                </div>
            </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {keyTechnologies.map((tech, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${200 + index * 100}ms` }}>
              <div className="text-ai-blue mb-4">
                {React.cloneElement(icons[index], { size: 32, strokeWidth: 1.5 })}
              </div>
              <h3 className="text-xl font-bold mb-2 text-navy">{tech.title}</h3>
              <p className="text-gray-600 text-sm">{tech.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-gray-50 p-8 rounded-xl border border-gray-200 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <h3 className="text-2xl font-bold text-center mb-10 text-navy">RAG Architecture (Vector + Graph RAG)</h3>
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-6 md:gap-x-4 text-center">
                {/* Node 1: User Query */}
                <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-white shadow-md border w-40 h-28 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: '700ms' }}>
                    <User className="w-7 h-7 mb-2 text-gray-500" />
                    <p className="font-semibold text-navy text-sm">User Query</p>
                </div>

                <MoveRight className="w-8 h-8 text-gray-300 animate-fade-in-up" style={{ animationDelay: '800ms' }}/>

                {/* Node 2: Retrieval (Highlighted) */}
                <div className="relative flex flex-col items-center justify-center p-4 rounded-lg bg-white shadow-lg border-2 border-ai-blue w-40 h-28 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: '900ms' }}>
                    <div className="absolute -inset-1.5 bg-ai-blue/80 rounded-lg blur-xl opacity-20 group-hover:opacity-40 transition duration-500 animate-pulse"></div>
                    <DatabaseZap className="w-7 h-7 mb-2 text-ai-blue" />
                    <p className="font-semibold text-navy text-sm">Vector & Graph DB</p>
                    <p className="text-xs text-gray-500">Retrieval</p>
                </div>

                <MoveRight className="w-8 h-8 text-gray-300 animate-fade-in-up" style={{ animationDelay: '1000ms' }}/>

                {/* Node 3: Context */}
                <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-white shadow-md border w-40 h-28 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: '1100ms' }}>
                    <Combine className="w-7 h-7 mb-2 text-gray-500" />
                    <p className="font-semibold text-navy text-sm">Retrieved Context</p>
                </div>
                
                <MoveRight className="w-8 h-8 text-gray-300 animate-fade-in-up" style={{ animationDelay: '1200ms' }}/>
                
                {/* Node 4: LLM (Highlighted) */}
                <div className="relative flex flex-col items-center justify-center p-4 rounded-lg bg-white shadow-lg border-2 border-ai-blue w-40 h-28 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: '1300ms' }}>
                    <div className="absolute -inset-1.5 bg-ai-blue/80 rounded-lg blur-xl opacity-20 group-hover:opacity-40 transition duration-500 animate-pulse"></div>
                    <Bot className="w-7 h-7 mb-2 text-ai-blue" />
                    <p className="font-semibold text-navy text-sm">LLM Prompting</p>
                    <p className="text-xs text-gray-500">Gemini, GPT, Claude</p>
                </div>
                
                <MoveRight className="w-8 h-8 text-gray-300 animate-fade-in-up" style={{ animationDelay: '1400ms' }}/>

                {/* Node 5: Answer */}
                <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-white shadow-md border w-40 h-28 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: '1500ms' }}>
                    <MessageSquare className="w-7 h-7 mb-2 text-gray-500" />
                    <p className="font-semibold text-navy text-sm">Generated Answer</p>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default TechSection;