import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";

const team = [
  {
    name: "Rahmat Hidayat",
    role: "CEO & Founder",
    description: "10+ tahun pengalaman di industri fintech dan teknologi"
  },
  {
    name: "Dewi Lestari",
    role: "CTO",
    description: "Expert dalam pengembangan aplikasi dan integrasi sistem"
  },
  {
    name: "Fajar Nugroho",
    role: "Head of Product",
    description: "Spesialis dalam user experience dan product development"
  },
  {
    name: "Linda Wati",
    role: "Head of Customer Success",
    description: "Berpengalaman dalam customer relationship dan business support"
  }
];

export const Team = () => {
  return (
    <section id="team" className="w-full py-20 md:py-32">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Tim Kami</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Didukung oleh profesional berpengalaman yang berdedikasi untuk kesuksesan bisnis Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-glow">
              <CardContent className="pt-6 space-y-4">
                <div className="h-32 w-32 mx-auto rounded-full bg-gradient-primary flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary-foreground">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="text-center space-y-2">
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-sm text-primary font-medium">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </div>
                <div className="flex justify-center gap-4">
                  <button className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <Linkedin className="h-4 w-4 text-primary" />
                  </button>
                  <button className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <Mail className="h-4 w-4 text-primary" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
