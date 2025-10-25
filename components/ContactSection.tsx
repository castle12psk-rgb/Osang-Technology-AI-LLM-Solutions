
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { contactInfo } from '../constants';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="pt-12 lg:pt-20 pb-20 lg:pb-32 bg-white text-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy">Contact & Inquiry</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            AI 전환 파트너십, 오상테크놀로지와 함께 시작하세요.
          </p>
        </div>
        
        <div className="bg-white rounded-xl p-8 lg:p-12 flex flex-col lg:flex-row gap-8 lg:gap-16 shadow-2xl border border-gray-100">
            <div className="lg:w-1/2">
                <h3 className="text-2xl font-bold mb-6 text-navy">{contactInfo.companyName}</h3>
                <div className="space-y-4 text-gray-700">
                    <div className="flex items-start">
                        <MapPin className="text-ai-blue mt-1 mr-4 flex-shrink-0" size={20}/>
                        <span>{contactInfo.address}</span>
                    </div>
                    <div className="flex items-center">
                        <Phone className="text-ai-blue mr-4 flex-shrink-0" size={20}/>
                        <span>{contactInfo.tel}</span>
                    </div>
                    <div className="flex items-center">
                        <Mail className="text-ai-blue mr-4 flex-shrink-0" size={20}/>
                        <span>{contactInfo.email}</span>
                    </div>
                </div>
                 <div className="mt-10">
                    <h4 className="font-bold mb-4 text-navy">Global Partners</h4>
                    <div className="flex items-center space-x-8">
                        {contactInfo.partners.map((partner, index) => (
                           <img key={index} src={partner.logo} alt={partner.name} className="h-8 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
                        ))}
                    </div>
                </div>
            </div>
            <div className="lg:w-1/2 h-80 lg:h-auto">
                <div className="w-full h-full rounded-lg overflow-hidden">
                    {/* Placeholder for map. An actual implementation would use an iframe from Google Maps. */}
                    <img src="https://picsum.photos/seed/map/800/600" alt="Map to Osang Technology" className="w-full h-full object-cover opacity-50"/>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;