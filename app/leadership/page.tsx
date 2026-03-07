import { PageHeader } from "@/components/ui/page-header"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { User } from "lucide-react"

const leadershipTimeline = [
  {
    period: "2026-2028",
    current: true,
    members: [
      { role: "Hon'ble President", name: "Shri C. U. Hari", title: "Former Director, DRDO, Bangalore" },
      { role: "Hon'ble Vice President", name: "Shri T. K. Sundaramurthy", title: "Former Scientist, ISAC-ISRO, Bangalore" },
      { role: "Honorary Vice President", name: "T.V. Nagarajan", title: "Ex GM, HAL" },
      { role: "Honorary Vice President", name: "Dr. Isham Panigrahi", title: "Professor, KIIT Bhubaneswar" },
      { role: "Honorary Secretary General", name: "Mr. C. S. Karunakaran", title: "Manager, StepUp (SIMATS University) & CEO, Pullinam Aerospace Technologies" },
      { role: "Honorary Jt Secretary", name: "Dr. Satyanarayana Gupta", title: "Professor, MLRIT, Hyderabad" },
      { role: "Honorary Treasurer", name: "Mrs. V. Suganya", title: "Manager, IAAA Foundation Chennai" },
      { role: "Honorary Jt Treasurer", name: "Mr. Vasantha Kumar", title: "MD, Raven Aerial Technologies, Chennai" },
    ],
  },
  {
    period: "2023-2025",
    current: false,
    members: [
      { role: "Hon'ble President", name: "Shri C. U. Hari", title: "Former Director, DRDO, Bangalore" },
      { role: "Hon'ble Vice President", name: "Shri T. K. Sundaramurthy", title: "Former Scientist, ISAC-ISRO, Bangalore" },
      { role: "Honorary Vice President", name: "Dr. N. Ramesh", title: "Former Head MAV, NAL Bangalore" },
      { role: "Honorary Vice President", name: "Dr. Isham Panigrahi", title: "Professor, KIIT Bhubaneswar" },
      { role: "Honorary Secretary General", name: "Mr. C. S. Karunakaran", title: "Manager, StepUp (SIMATS University) & CEO, Pullinam Aerospace Technologies" },
      { role: "Honorary Jt Secretary", name: "Dr. Satyanarayana Gupta", title: "Professor, MLRIT, Hyderabad" },
      { role: "Honorary Treasurer", name: "Mrs. V. Suganya", title: "Manager, IAAA Foundation Chennai" },
      { role: "Honorary Jt Treasurer", name: "Mr. Vasantha Kumar", title: "MD, Raven Aerial Technologies, Chennai" },
    ],
  },
  {
    period: "2020-2022",
    current: false,
    members: [
      { role: "Hon'ble President", name: "Shri C. U. Hari", title: "Former Director, DRDO, Bangalore" },
      { role: "Hon'ble Vice President", name: "Shri T. K. Sundaramurthy", title: "Former Scientist, ISAC-ISRO, Bangalore" },
      { role: "Honorary Vice President", name: "Dr. N. Ramesh", title: "Former Head MAV, NAL Bangalore" },
      { role: "Honorary Secretary General", name: "Dr. Isham Panigrahi", title: "Professor, KIIT Bhubaneswar" },
      { role: "Honorary Jt Secretary", name: "Dr. Satyanarayana Gupta", title: "Professor, MLRIT, Hyderabad" },
      { role: "Honorary Treasurer", name: "Mrs. V. Suganya", title: "Manager, IAAA Foundation Chennai" },
      { role: "Honorary Jt Treasurer", name: "Mr. Vasantha Kumar", title: "MD, Raven Technologies" },
    ],
  },
  {
    period: "2017-2019",
    current: false,
    members: [
      { role: "Hon'ble President", name: "Shri C. U. Hari", title: "Former Director, DRDO, Bangalore" },
      { role: "Hon'ble Vice President", name: "Shri T. K. Sundaramurthy", title: "Former Scientist, ISAC-ISRO, Bangalore" },
      { role: "Hon'ble Vice President", name: "Dr. Isham Panigrahi", title: "Professor, KIIT Bhubaneswar" },
      { role: "Honorary Secretary General", name: "Mr. C. S. Karunakaran", title: "Asst. Professor, HITS Chennai" },
      { role: "Honorary Treasurer", name: "Mrs. V. Suganya", title: "Manager, IAAA Foundation Chennai" },
      { role: "Honorary Jt Treasurer", name: "Mr. Vasantha Kumar", title: "MD, Raven Technologies" },
      { role: "Honorary Jt Secretary", name: "Dr. N. Ramesh", title: "Former Head MAV, NAL Bangalore" },
    ],
  },
]

export default function LeadershipPage() {
  return (
    <>
      
      
      <PageHeader
        title="Leadership Council"
        tagline="Guiding India's Aerospace Future Since 2017"
        breadcrumbs={[
          { label: "About", href: "/about" },
          { label: "Leadership" },
        ]}
      />

      {/* Leadership Timeline */}
      <SectionWrapper pattern="dots">
        <div className="space-y-12">
          {leadershipTimeline.map((term) => (
            <div key={term.period} className="relative">
              {/* Period Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`px-4 py-2 rounded-full font-semibold ${
                  term.current 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-muted text-muted-foreground"
                }`}>
                  {term.period}
                </div>
                {term.current && (
                  <span className="text-sm text-primary font-medium">Current Term</span>
                )}
              </div>

              {/* Members Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {term.members.map((member) => (
                  <div
                    key={`${term.period}-${member.name}`}
                    className={`p-5 rounded-xl border transition-all ${
                      term.current 
                        ? "bg-card border-border hover:border-primary/30 hover:shadow-md" 
                        : "bg-muted/50 border-transparent"
                    }`}
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <User className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-xs font-medium text-primary mb-1">{member.role}</p>
                    <h3 className="font-semibold text-foreground">{member.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{member.title}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      
    </>
  )
}
