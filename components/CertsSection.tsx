import React from 'react';
import { certifications } from '../constants';
import { Award, ShieldCheck, Star, Lock, Palette, FileCode2, CheckCircle, FlaskConical } from 'lucide-react';

const icons: { [key: string]: React.ReactElement } = {
    Star: <Star size={32} />,
    Award: <Award size={32} />,
    ShieldCheck: <ShieldCheck size={32} />,
    Lock: <Lock size={32} />,
    Palette: <Palette size={32} />,
    FlaskConical: <FlaskConical size={32} />,
};

const CertsSection: React.FC = () => {
  return (
    <section id="certifications" className="pt-12 lg:pt-20 pb-20 lg:pb-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop"
          alt="Certifications Background"
          className="w-full h-full object-cover animate-bg-pan"
          aria-hidden="true"
        />
      </div>
      <div className="absolute inset-0 bg-navy/[.65] backdrop-blur-sm" aria-hidden="true"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold">Certifications & Achievements</h2>
          <p className="mt-4 text-lg text-silver max-w-3xl mx-auto">
            신뢰할 수 있는 기술력, 공인된 인증과 지적재산권으로 증명합니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {certifications.certs.map((cert, index) => (
                        <div 
                            key={index} 
                            className={`animate-fade-in-up relative bg-white/5 border rounded-xl px-6 py-8 transition-all duration-300 group hover:-translate-y-2 hover:shadow-2xl hover:shadow-ai-blue/20
                                ${cert.highlight ? 'border-ai-blue/50' : 'border-white/10'}`
                            }
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {cert.highlight && <div className="absolute top-0 right-0 m-3 bg-ai-blue text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">CORE</div>}
                            <div className="flex items-start space-x-4">
                                <div className={`flex-shrink-0 w-16 h-16 rounded-lg flex items-center justify-center bg-navy group-hover:bg-ai-blue/20 transition-colors duration-300 ${cert.highlight ? 'text-ai-blue' : 'text-silver group-hover:text-ai-blue'}`}>
                                    {icons[cert.icon] ? React.cloneElement(icons[cert.icon]) : <Award size={32}/>}
                                </div>
                                <div>
                                    <p className="text-sm text-silver">{cert.authority}</p>
                                    <h3 className="text-lg font-bold text-white mt-1">{cert.name}</h3>
                                    <p className="text-ai-blue font-semibold mt-2">{cert.year} 획득</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-xl p-6 lg:p-8 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                    <FileCode2 className="text-ai-blue mr-3" size={28}/>
                    주요 저작권 등록 S/W
                </h3>
                <div className="space-y-4">
                    {certifications.software.map((sw, index) => (
                        <div key={index} className="bg-navy/50 p-4 rounded-lg border border-transparent hover:border-ai-blue/50 transition-colors duration-300">
                            <p className="font-semibold text-white">{sw.name}</p>
                            <p className="text-xs text-silver mt-1">등록번호: {sw.regNo}</p>
                        </div>
                    ))}
                </div>
                 <div className="mt-8 pt-6 border-t border-white/10">
                    <h4 className="text-lg font-bold text-white mb-4">기술 신뢰도</h4>
                    <ul className="space-y-3 text-sm text-silver">
                        <li className="flex items-center"><CheckCircle size={16} className="text-green-400 mr-3 flex-shrink-0"/>다수 공공/금융 프로젝트 수행</li>
                        <li className="flex items-center"><CheckCircle size={16} className="text-green-400 mr-3 flex-shrink-0"/>특허 출원: Vector + Graph RAG</li>
                        <li className="flex items-center"><CheckCircle size={16} className="text-green-400 mr-3 flex-shrink-0"/>클라우드 파트너십 (AWS, Google)</li>
                    </ul>
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default CertsSection;