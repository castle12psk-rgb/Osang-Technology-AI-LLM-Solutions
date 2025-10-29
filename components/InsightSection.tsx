import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend, AreaChart, Area, RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';
import { insightData } from '../constants';
import { Bot, FileCode, ArrowUp, BrainCircuit, Database, MessageSquare, Sparkles, User, ShieldCheck } from 'lucide-react';

const InsightSection: React.FC = () => {
  return (
    <section id="insights" className="pt-12 lg:pt-20 pb-20 lg:pb-32 bg-white text-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy">데이터에서 인사이트로</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            AI가 바꾸는 의사결정, 비즈니스의 미래를 예측합니다.
          </p>
        </div>

        <div className="mb-16 grid md:grid-cols-2 gap-8 animate-fade-in-up" style={{ animationDelay: '50ms' }}>
          <div className="shine-effect relative rounded-xl overflow-hidden group h-64 shadow-lg">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="AI Analytics" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-xl font-bold text-white">AI 기반 데이터 분석</h3>
              <p className="text-sm text-white/90 mt-1">정형/비정형 데이터에서 패턴을 발견합니다.</p>
            </div>
          </div>
          <div className="shine-effect relative rounded-xl overflow-hidden group h-64 shadow-lg">
            <img src="https://specials-images.forbesimg.com/imageserve/6708ca2918b6b479c3dcd3e6/Kraft-Heinz-is-leveraging-AI-to-revolutionize-its-supply-chain--from-farm-to-fork-/960x0.jpg?fit=scale" alt="Predictive Intelligence" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-xl font-bold text-white">예측적 비즈니스 인텔리전스</h3>
              <p className="text-sm text-white/90 mt-1">미래 성과를 예측하고 리스크를 최소화합니다.</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* RAG Dashboard */}
          <div className="bg-gray-50 p-6 lg:p-8 rounded-xl border border-gray-200 h-full flex flex-col animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <h3 className="text-xl font-bold mb-4 flex items-center text-navy"><Sparkles className="text-ai-blue mr-3" size={24}/>RAG 기반 사내지식 솔루션</h3>
            <div className="bg-white p-4 rounded-lg flex-grow flex flex-col border border-gray-200">
              <div className="bg-gray-100 p-3 rounded-lg flex items-center">
                 <User className="text-gray-500 mr-3" size={18}/>
                 <p className="text-sm text-gray-800">"최근 3분기 의료 CMS 솔루션의 주요 업데이트 내용은?"</p>
              </div>
              <div className="bg-ai-blue/5 border border-ai-blue/20 p-4 rounded-lg mt-4 flex-grow">
                <div className="flex items-start">
                  <Bot className="text-ai-blue mr-4 mt-1 flex-shrink-0" size={24}/>
                  <div>
                    <p className="text-sm font-semibold text-navy">답변: 3분기 주요 업데이트는 다음과 같습니다:</p>
                    <ul className="mt-3 space-y-2">
                        {insightData.ragAnswer.points.map((point, index) => (
                             <li key={index} className="flex items-start text-sm">
                                <ShieldCheck className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0"/>
                                <p className="text-gray-600">
                                    {point.text}
                                    {point.highlight && <span className="ml-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-ai-blue py-1 px-2 rounded-md">{point.highlight}</span>}
                                </p>
                             </li>
                        ))}
                    </ul>
                    <div className="mt-4 pt-3 border-t border-gray-200">
                        <p className="text-xs text-ai-blue font-semibold">참조 문서:</p>
                        <div className="flex space-x-3 mt-2">
                             {insightData.ragAnswer.references.map((ref, index) => (
                                <div key={index} className="flex items-center text-xs bg-gray-100 py-1 px-2 rounded">
                                    <FileCode size={12} className="mr-1.5 text-gray-500"/>
                                    <span className="text-gray-700">{ref.name}</span>
                                </div>
                             ))}
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs text-gray-500 mt-4 text-center p-2 bg-gray-100 rounded-lg">
                <div className="flex flex-col items-center"><Database size={18} className="text-ai-blue mb-1"/><span>내부 데이터</span></div>
                <span className="text-gray-800 font-bold">→</span>
                <div className="flex flex-col items-center"><BrainCircuit size={18} className="text-ai-blue mb-1"/><span>Vector+Graph RAG</span></div>
                <span className="text-gray-800 font-bold">→</span>
                <div className="flex flex-col items-center"><MessageSquare size={18} className="text-ai-blue mb-1"/><span>신뢰성 있는 답변</span></div>
            </div>
          </div>

          {/* AI Medical CMS */}
          <div className="bg-gray-50 p-6 lg:p-8 rounded-xl border border-gray-200 h-full flex flex-col animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <h3 className="text-xl font-bold mb-4 text-navy">AI Medical CMS: 환자 개인화 대시보드</h3>
            <div className="bg-white p-4 rounded-lg flex-grow border border-gray-200">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="font-bold text-lg text-navy">{insightData.medicalCMS.patient.name}</p>
                        <p className="text-sm text-gray-500">{insightData.medicalCMS.patient.details} | 최근 진료: {insightData.medicalCMS.patient.lastVisit}</p>
                    </div>
                    <div className="text-center">
                        <p className="text-xs text-gray-500 mb-1">AI 참여도 점수</p>
                        <div className="w-16 h-16 -mt-2">
                            <ResponsiveContainer width="100%" height="100%">
                                <RadialBarChart 
                                    innerRadius="70%" 
                                    outerRadius="100%" 
                                    data={[{ value: insightData.medicalCMS.patient.engagementScore }]} 
                                    startAngle={90} 
                                    endAngle={-270}
                                >
                                    <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
                                    <RadialBar background={{fill: '#e5e7eb'}} dataKey="value" cornerRadius={10} fill="#007AFF" />
                                    <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="fill-navy font-bold text-lg">
                                        {insightData.medicalCMS.patient.engagementScore}
                                    </text>
                                </RadialBarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                    <p className="text-xs text-gray-500 font-semibold mb-1">건강 추세 (AI 예측)</p>
                    <div className="h-24">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={insightData.medicalCMS.healthTrend} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                                <XAxis dataKey="month" stroke="#6B7280" tick={{ fontSize: 10 }} />
                                <YAxis stroke="#6B7280" tick={{ fontSize: 10 }}/>
                                <Tooltip contentStyle={{ backgroundColor: 'white', border: '1px solid #e5e7eb' }}/>
                                <Line type="monotone" dataKey="level" name="건강 수치" stroke="#34D399" strokeWidth={2} dot={false} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm font-semibold text-navy mb-2">AI 맞춤 건강 정보 추천:</p>
                    <div className="space-y-2">
                        {insightData.medicalCMS.recommendations.map((rec, index) => (
                            <div key={index} className="bg-gray-100 p-3 rounded-lg text-sm hover:bg-gray-200 cursor-pointer transition-colors">
                                <span className="font-semibold text-ai-blue mr-2">{rec.category}</span>
                                <span className="text-gray-800">{rec.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
          </div>
        </div>

        {/* GEO Analysis */}
        <div className="mt-8 bg-gray-50 p-6 lg:p-8 rounded-xl border border-gray-200 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <h3 className="text-xl font-bold text-navy mb-6 text-center">GEO 분석 리포트: AI 기반 성과 최적화</h3>
          <div className="grid lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-2 space-y-6">
                 <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <p className="text-sm text-gray-500">최고 CTR</p>
                    <p className="text-4xl font-bold text-ai-blue">{insightData.geoReport.kpis.peakCTR.value}</p>
                    <p className="text-sm font-semibold text-green-500 flex items-center"><ArrowUp size={16} className="mr-1"/>{insightData.geoReport.kpis.peakCTR.change} vs. 이전 분기</p>
                </div>
                 <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <p className="text-sm text-gray-500">검색 순위 개선</p>
                    <p className="text-4xl font-bold text-navy">{insightData.geoReport.kpis.rankingImprovement.value} 단계</p>
                    <p className="text-sm font-semibold text-green-500">{insightData.geoReport.kpis.rankingImprovement.change}</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="text-base font-bold flex items-center mb-2 text-navy"><BrainCircuit size={18} className="mr-2 text-ai-blue"/>{insightData.geoReport.aiSummary.title}</h4>
                    <p className="text-sm text-gray-600">{insightData.geoReport.aiSummary.text}</p>
                </div>
            </div>
            <div className="lg:col-span-3 h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={insightData.geoReport.data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                    <defs>
                        <linearGradient id="colorCtr" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#007AFF" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#007AFF" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorRanking" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#34D399" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#34D399" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="month" stroke="#6B7280" />
                    <YAxis yAxisId="left" stroke="#007AFF" orientation="left" />
                    <YAxis yAxisId="right" stroke="#34D399" orientation="right" reversed={true} domain={[1, 'dataMax + 2']}/>
                    <Tooltip contentStyle={{ backgroundColor: 'white', border: '1px solid #e5e7eb' }} />
                    <Legend wrapperStyle={{color: "#4B5563"}}/>
                    <Area yAxisId="left" type="monotone" dataKey="ctr" name="CTR (%)" stroke="#007AFF" fill="url(#colorCtr)" strokeWidth={2} />
                    <Area yAxisId="right" type="monotone" dataKey="ranking" name="노출 순위" stroke="#34D399" fill="url(#colorRanking)" strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightSection;