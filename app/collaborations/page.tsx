'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/page-header';
import { SectionWrapper } from '@/components/ui/section-wrapper';
import { SimpleCard } from '@/components/ui/simple-card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Globe, Users, Lightbulb, Award } from 'lucide-react';

export default function CollaborationsPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const collaborations = [
    {
      id: 1,
      name: 'Airports Authority of India',
      category: 'government',
      description: 'Strategic partnership for aerospace infrastructure and safety training across Indian airports.',
      icon: Globe,
      focus: ['Infrastructure', 'Aviation Safety', 'Training'],
    },
    {
      id: 2,
      name: 'IIT Madras & IIT Guwahati',
      category: 'academia',
      description: 'Collaborative academic programs including specialized B.S. and research initiatives.',
      icon: Users,
      focus: ['Academic Programs', 'Research', 'STEM'],
    },
    {
      id: 3,
      name: 'ISRO',
      category: 'government',
      description: 'Scientific collaboration for space technology awareness and research outreach programs.',
      icon: Award,
      focus: ['Space Research', 'Technology', 'Missions'],
    },
    {
      id: 4,
      name: 'StartupTN',
      category: 'government',
      description: 'Empowering aerospace startups in Tamil Nadu through incubation and ecosystem support.',
      icon: Lightbulb,
      focus: ['Startups', 'Incubation', 'Policy'],
    },
    {
      id: 5,
      name: 'ICAO & UN-SGAC',
      category: 'international',
      description: 'Global partnerships for international aviation standards and space generation participation.',
      icon: Globe,
      focus: ['Global Standards', 'Space Policy', 'Youth'],
    },
    {
      id: 6,
      name: 'Professional Societies',
      category: 'industry',
      description: 'Collaborations with AeSI, IEI, and HEMSI for professional development and certification.',
      icon: Users,
      focus: ['Professional Growth', 'Networking', 'Certification'],
    },
  ];

  const filters = [
    { value: 'all', label: 'All Partners' },
    { value: 'government', label: 'Government' },
    { value: 'academia', label: 'Academia' },
    { value: 'industry', label: 'Industry' },
    { value: 'international', label: 'International' },
  ];

  const filtered = activeFilter === 'all' ? collaborations : collaborations.filter(c => c.category === activeFilter);

  return (
    <>
      <PageHeader
        title="Our Collaborations"
        tagline="Building India's aerospace ecosystem through strategic partnerships"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Collaborations' }]}
      />

      <SectionWrapper className="bg-muted/30" pattern="dots">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Strategic Partnerships Driving Innovation
            </h2>
            <p className="text-lg text-muted-foreground">
              Collaborating with leading organizations across government, academia, and industry
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map(filter => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.value
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-background text-muted-foreground border border-border hover:border-primary/30 hover:text-primary'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Collaborations Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((collab) => (
              <SimpleCard
                key={collab.id}
                title={collab.name}
                description={collab.description}
                icon={collab.icon}
                className="group h-full border-primary/10 hover:border-primary/30"
              >
                <div className="flex flex-wrap gap-2 mt-4">
                  {collab.focus.map(item => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-primary/5 text-primary text-[10px] font-medium uppercase tracking-wider rounded-full border border-primary/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </SimpleCard>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Partnership Opportunities */}
      <SectionWrapper className="bg-primary text-primary-foreground" pattern="grid">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Interested in Partnering?</h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Join our growing network of organizations driving aerospace innovation in India
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Explore Partnership <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent" asChild>
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
