'use client';

import { PageHeader } from '@/components/ui/page-header';
import { SectionWrapper } from '@/components/ui/section-wrapper';
import { SimpleCard } from '@/components/ui/simple-card';
import { Award, CheckCircle, Building2, Globe, Shield, Zap } from 'lucide-react';

export default function AccreditationsPage() {
  const accreditations = [
    {
      id: 1,
      title: 'ISO 9001:2015',
      category: 'Quality Management',
      icon: CheckCircle,
      description: 'International quality management system certification ensuring consistent service delivery',
      year: '2020',
      issuer: 'International Organization for Standardization',
    },
    {
      id: 2,
      title: 'NAAC Accreditation',
      category: 'Education',
      icon: Building2,
      description: 'National Assessment and Accreditation Council recognition for educational excellence',
      year: '2021',
      issuer: 'Ministry of Education, India',
    },
    {
      id: 3,
      title: 'International Recognition',
      category: 'Global Standards',
      icon: Globe,
      description: 'Recognized as a leading aerospace institution by international bodies',
      year: '2022',
      issuer: 'International Aerospace Associations',
    },
    {
      id: 4,
      title: 'Safety & Compliance',
      category: 'Regulatory',
      icon: Shield,
      description: 'Full compliance with all regulatory requirements and safety standards',
      year: 'Ongoing',
      issuer: 'Ministry of Civil Aviation',
    },
    {
      id: 5,
      title: 'Innovation Excellence',
      category: 'Research',
      icon: Zap,
      description: 'Recognition for cutting-edge research and innovation in aerospace technology',
      year: '2023',
      issuer: 'National Innovation Council',
    },
    {
      id: 6,
      title: 'Institutional Excellence',
      category: 'Overall',
      icon: Award,
      description: 'Award for outstanding contribution to aerospace education and research',
      year: '2023',
      issuer: 'Government of India',
    },
  ];

  const recognitions = [
    { text: 'Recognized by Ministry of Education, Government of India' },
    { text: 'Member of International Aerospace Associations' },
    { text: 'Approved Training Provider for DGCA' },
    { text: 'Partner with National Institutions and International Universities' },
    { text: 'Certified Research Organization' },
    { text: 'Industry-Endorsed Training Programs' },
  ];

  return (
    <>
      <PageHeader
        title="Accreditations & Recognition"
        description="Certified excellence in aerospace education and research"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Accreditations' }]}
      />

      {/* Main Accreditations */}
      <SectionWrapper className="bg-gradient-to-br from-blue-50 via-white to-blue-50" pattern="dots">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Certifications & Awards
            </h2>
            <p className="text-lg text-gray-600">
              Recognized for excellence, quality, and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accreditations.map(accred => {
              const IconComponent = accred.icon;
              return (
                <SimpleCard key={accred.id} className="hover:border-blue-400 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-blue-500 uppercase tracking-wide">
                        {accred.category}
                      </span>
                      <p className="text-sm text-gray-500">{accred.year}</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{accred.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{accred.description}</p>
                  <p className="text-xs text-gray-500 italic">Issued by: {accred.issuer}</p>
                </SimpleCard>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* Recognition Badges */}
      <SectionWrapper className="bg-gradient-to-br from-white via-blue-50 to-white" pattern="grid">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Official Recognitions
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Approved and recognized by leading government and international bodies
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {recognitions.map((rec, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all duration-300"
              >
                <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{rec.text}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Quality Commitment */}
      <SectionWrapper className="bg-gradient-to-br from-blue-900 to-blue-800 text-white" pattern="dots">
        <div className="max-w-4xl mx-auto text-center">
          <Award className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Commitment to Excellence</h2>
          <p className="text-blue-100 text-lg mb-6">
            We maintain the highest standards in aerospace education, research, and training. Our accreditations
            reflect our dedication to quality, innovation, and compliance with international best practices.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-blue-700 p-6 rounded-lg">
              <div className="text-4xl font-bold mb-2">100%</div>
              <p className="text-blue-100">Standards Compliance</p>
            </div>
            <div className="bg-blue-700 p-6 rounded-lg">
              <div className="text-4xl font-bold mb-2">6+</div>
              <p className="text-blue-100">Major Accreditations</p>
            </div>
            <div className="bg-blue-700 p-6 rounded-lg">
              <div className="text-4xl font-bold mb-2">Global</div>
              <p className="text-blue-100">Recognition Level</p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
