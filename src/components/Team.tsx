import { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import svg1 from "@/assets/1.png";
import svg2 from "@/assets/2.png";
import svg3 from "@/assets/3.png";
import svg4 from "@/assets/4.png";

interface TeamMember {
  id: number;
  name: string;
  title: string;
  shortTitle: string;
  avatar: string;
  bio: string[];
  achievements?: string[];
  education?: string[];
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Prof. Emeka Aniagolu",
    title: "Chief Executive Officer",
    shortTitle: "CEO",
    avatar: svg1,
    bio: [
      "Professor Emeka Aniagolu is a distinguished leader in the field of technology and innovation, serving as the CEO of Midpoint Innovations Nigeria Ltd. Under his leadership, the company is dedicated to harnessing the intellectual and technical expertise of Nigerians and other Africans to drive research and development initiatives that address pressing challenges in Africa.",
      "Born in Enugu State, Nigeria, Professor Aniagolu is the son of the esteemed late jurist, Honorable Justice A.N. Aniagolu (JSC). He is married and has two daughters, one a lawyer and the other a medical doctor.",
      "As CEO, Professor Aniagolu fosters an environment where Associate Consultants are empowered to innovate and collaborate on research projects that can lead to impactful solutions for Africa's challenges. His vision is to position Midpoint Innovations as a leader in technological advancement and sustainable development across the continent.",
    ],
    achievements: [
      "The Ohio State University Teaching Excellence Award (1992)",
      "The Living Faith Award in the State of Ohio (2005)",
      "The Martin Luther King Commission Educational Excellence Award (2013)",
      "Nigerians in Diaspora Organization America (NIDOA) Outstanding Community Service Award (2014)",
    ],
    education: [
      "Professor in Black World Studies at Ohio Wesleyan University",
      "Visiting Professor at Veritas University, Bwari, Abuja",
      "Graduate studies in Political Science and African Studies at The Ohio State University",
      "Published author: Black Mustard Seed (Commonwealth Writers Prize nominee, 2002)",
    ],
  },
  {
    id: 2,
    name: "Haruna Ibrahim Isaac",
    title: "Chief Technology Officer",
    shortTitle: "CTO",
    avatar: svg2,
    bio: [
      "Haruna Ibrahim Isaac is an innovative technology leader serving as the Chief Technology Officer at Midpoint Innovations Nigeria Ltd. With a strong commitment to leveraging technology for sustainable development, he plays a pivotal role in driving projects that create impactful solutions for communities across Africa.",
      "Currently, Haruna is a Programmer II Officer in the ICT unit at Veritas University Abuja and a Technology Officer at the Veritas University Endowment Foundation (VUEF). He also serves as a Senior Developer at Synegytech Solutions Ltd, where he has honed his skills in software development and project management.",
      "As the leader of the development team at Midpoint Innovations, Haruna is spearheading the creation of the MeterBuddy™ application. This innovative mobile technology radically transforms how customers interact with electric utilities.",
    ],
    achievements: [
      "Advocate for United Nations Sustainable Development Goals (UN SDGs)",
      "Support for Onyeisi Care Foundation and the Chinua Achebe Literary Prize",
      "Leading MeterBuddy™ application development",
    ],
    education: [
      "Postgraduate degree in Information Systems and Technology (in progress)",
      "Cybersecurity Awareness (HP Life/HP Foundation)",
      "Effective Leadership (HP Life/HP Foundation)",
      "Cisco Cybersecurity Certification",
      "Lecturer: User Interaction Design, Usability Engineering, and User Experience Design at Veritas University Abuja",
    ],
  },
  {
    id: 3,
    name: "Ugoji Adanma Eze, Esq., PhD",
    title: "International Associate Consultant",
    shortTitle: "IAC",
    avatar: svg3,
    bio: [
      "Barrister Ugoji Adanma Eze is a skilled producer of events and programs at the United Nations Headquarters in New York, who speaks on US National and Cybersecurity; Artificial Intelligence, Cybersecurity and Data Privacy. She earned her law degree in London and is a barrister-at-law of the Honorable Society of Grays Inn, London.",
      "Barrister Eze is a counter terrorism expert and a national security analyst. Her areas of expertise are cyber-security and global counter terrorism; Artificial Intelligence; Cybersecurity and Data Privacy.",
      "In 2020, Barrister Eze hosted 'Building Back Better: Risk-Informed COVID-19 Recovery and Rehabilitation And Strengthening Resilience To Climate Change-Related Disasters In Africa And The Caribbean.' On the margins of the 77th Session of the United Nations General Assembly in September 2022, she moderated two High Level panel discussions.",
    ],
    achievements: [
      "Chairman, Human Rights and Constitutional Law Committee, African Bar Association",
      "Consultant to the Senate Federal Republic Of Nigeria, Committee on ICT and Cybersecurity",
      "New York City Bar Association International Women's Day recognition (2023)",
      "Huntington Her Hero Award Lifetime Achievement Award",
      "Proclamations from the City of Houston, Texas, and Albany, New York",
    ],
    education: [
      "Barrister-at-Law, The Honorable Society of Grays Inn, UK",
      "PhD",
      "Member: The New York City Bar Association, The African Bar Association, Nigeria Bar Association",
      "Former Intern at the United Nations High Commission for Refugees, New York Office (2009)",
    ],
  },
  {
    id: 4,
    name: "Dr. Ifediora C. Amobi",
    title: "Associate Consultant",
    shortTitle: "AC",
    avatar: svg4,
    bio: [
      "Dr. Ifediora Amobi is a policy economist, adviser and consultant to governments and agencies with a professional career that started in 1983 as an Economist with the US Department of Housing and Urban Development in Washington, DC from where he joined the World Bank.",
      "He has held various top-level positions in banking, investment, and consulting, serving as an Adviser to the President of Nigeria on National Development, assisting the Office of the Vice President in guiding policies relating to national economic and sustainable development issues in the country.",
      "An ardent researcher, he lectures part-time at ESUT Business School in Enugu, Nigeria and has authored many papers.",
    ],
    education: [
      "Ph.D. in International Economics from Howard University in Washington DC, USA",
      "Lecturer at ESUT Business School in Enugu, Nigeria",
      "Former Economist with the US Department of Housing and Urban Development",
      "World Bank experience",
    ],
  },
];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <>
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-4xl md:text-5xl mb-6">
              Meet Our <span className="text-primary">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our leadership team brings together expertise from across technology, law, economics,
              and innovation to drive transformative change across Africa.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card
                key={member.id}
                onClick={() => setSelectedMember(member)}
                className="group cursor-pointer border-2 hover:border-primary transition-smooth shadow-soft hover:shadow-glow animate-scale-in hover:scale-105 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square bg-muted/30 overflow-hidden">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-heading text-xl mb-2 group-hover:text-primary transition-smooth">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">{member.title}</p>
                  <p className="text-xs font-semibold text-primary">{member.shortTitle}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Profile Dialog */}
      <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          {selectedMember && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary/20">
                    <img
                      src={selectedMember.avatar}
                      alt={selectedMember.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <DialogTitle className="text-2xl">{selectedMember.name}</DialogTitle>
                    <DialogDescription className="text-base">
                      {selectedMember.title} ({selectedMember.shortTitle})
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-6">
                {/* Biography */}
                <div>
                  <h4 className="font-heading text-lg mb-3 text-primary">Biography</h4>
                  <div className="space-y-3 text-muted-foreground">
                    {selectedMember.bio.map((paragraph, idx) => (
                      <p key={idx} className="leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Education */}
                {selectedMember.education && (
                  <div>
                    <h4 className="font-heading text-lg mb-3 text-primary">
                      Education & Experience
                    </h4>
                    <ul className="space-y-2 text-muted-foreground">
                      {selectedMember.education.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Achievements */}
                {selectedMember.achievements && (
                  <div>
                    <h4 className="font-heading text-lg mb-3 text-primary">
                      Awards & Achievements
                    </h4>
                    <ul className="space-y-2 text-muted-foreground">
                      {selectedMember.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Team;
