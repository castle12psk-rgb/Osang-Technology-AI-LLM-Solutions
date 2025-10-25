import React from 'react';
import { keyTechnologies } from '../constants';
import { Layers, GitMerge, SearchCode, Server, User, DatabaseZap, Combine, Bot, MessageSquare, MoveRight, UploadCloud, BrainCircuit, ShieldCheck, Activity, Sparkles } from 'lucide-react';

const icons = [<Layers key="1"/>, <GitMerge key="2"/>, <SearchCode key="3"/>, <Server key="4"/>];

const ArchCard = ({ icon, title, description, tech, highlight = false }: { icon: React.ElementType, title: string, description: React.ReactNode, tech: string[], highlight?: boolean }) => {
  const Icon = icon;
  return (
    <div className={`relative bg-white p-6 rounded-xl border transition-all duration-300 h-full flex flex-col ${highlight ? 'border-ai-blue/80 shadow-lg shadow-ai-blue/10' : 'border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1'}`}>
      {highlight && <div className="absolute -inset-2 bg-ai-blue/10 rounded-xl blur-xl opacity-50 -z-10 animate-pulse" style={{ animationDuration: '4s' }}></div>}
      <div className="flex items-start space-x-4">
        <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${highlight ? 'bg-ai-blue/10 text-ai-blue' : 'bg-gray-100 text-gray-500'}`}>
          <Icon size={24} strokeWidth={1.5} />
        </div>
        <div>
          <h4 className={`text-lg font-bold ${highlight ? 'text-ai-blue' : 'text-navy'}`}>{title}</h4>
        </div>
      </div>
      <p className="text-gray-600 text-sm mt-4 flex-grow leading-relaxed">{description}</p>
      <div className="mt-4 pt-4 border-t border-gray-200/60">
        <p className="text-xs font-semibold text-gray-400 mb-2">Key Tech Stack</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((t, i) => (
            <span key={i} className="text-xs text-gray-700 bg-gray-100 px-2 py-1 rounded-md">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

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

            <div className="mt-16 pt-10 border-t border-gray-200">
              <h4 className="text-xl font-bold text-center mb-8 text-navy">Technical Architecture Stack</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ArchCard
                  icon={UploadCloud}
                  title="Data Ingestion & Processing"
                  description={<>내부 문서, DB 등 다양한 소스에서 데이터를 <span className="font-semibold bg-blue-100 text-ai-blue rounded px-1 py-0.5">자동 수집 및 정제</span>하여 AI 학습을 위한 최적의 데이터셋을 구축합니다.</>}
                  tech={['Python', 'LangChain', 'Unstructured.io']}
                />
                <ArchCard
                  icon={DatabaseZap}
                  title="Vector & Graph Database"
                  description={<><span className="font-semibold bg-blue-100 text-ai-blue rounded px-1 py-0.5">Vector DB(의미 검색)와 Graph DB(관계 추론)를 결합</span>한 Dual-Retrieval 전략으로 답변의 정확도를 극대화합니다.</>}
                  tech={['Pinecone', 'Neo4j', 'FAISS']}
                  highlight={true}
                />
                <ArchCard
                  icon={Sparkles}
                  title="LLM Orchestration"
                  description={<>검색된 컨텍스트를 조합해 <span className="font-semibold bg-blue-100 text-ai-blue rounded px-1 py-0.5">최적의 프롬프트를 동적 생성</span>하며, Gemini·GPT 등 멀티 LLM을 지원하여 유연성을 확보합니다.</>}
                  tech={['LangChain Agents', 'Gemini API', 'FastAPI']}
                  highlight={true}
                />
                <ArchCard
                  icon={Server}
                  title="Application & API Layer"
                  description={<><span className="font-semibold bg-blue-100 text-ai-blue rounded px-1 py-0.5">MSA 기반의 안정적인 API</span>를 통해 시스템과 유연하게 통합하고, 확장성 높은 사용자 인터페이스를 제공합니다.</>}
                  tech={['React', 'Node.js', 'Docker']}
                />
                 <ArchCard
                  icon={ShieldCheck}
                  title="Security & Access Control"
                  description={<>E2E 암호화 및 <span className="font-semibold bg-blue-100 text-ai-blue rounded px-1 py-0.5">역할 기반 접근 제어(RBAC)</span>를 적용하여, 인가된 사용자만 민감 정보에 접근하도록 보장합니다.</>}
                  tech={['JWT', 'OAuth 2.0', 'KMS']}
                />
                 <ArchCard
                  icon={Activity}
                  title="Monitoring & Logging"
                  description={<>AI 상호작용을 <span className="font-semibold bg-blue-100 text-ai-blue rounded px-1 py-0.5">실시간 로깅 및 모니터링</span>하여 시스템 안정성을 확보하고 지속적으로 서비스 품질을 개선합니다.</>}
                  tech={['Prometheus', 'Grafana', 'ELK Stack']}
                />
              </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default TechSection;