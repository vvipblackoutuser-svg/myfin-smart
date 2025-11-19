import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Pesan Terkirim!",
      description: "Tim kami akan segera menghubungi Anda.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-b from-muted/30 via-muted/50 to-background">
      <div className="container">
        <div className="text-center space-y-4 mb-20">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
              📞 Hubungi Kami
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Ada Pertanyaan? <span className="text-primary">Hubungi Kami</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Tim kami siap membantu Anda 24/7
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="space-y-6">
            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg group">
              <CardContent className="pt-6 space-y-4">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-lg">Email</h3>
                  <a href="mailto:support@myfin.id" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    support@myfin.id
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg group">
              <CardContent className="pt-6 space-y-4">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-lg">Telepon</h3>
                  <a href="tel:+6281234567890" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    +62 812-3456-7890
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-lg group">
              <CardContent className="pt-6 space-y-4">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-lg">Alamat</h3>
                  <p className="text-sm text-muted-foreground">Jakarta, Indonesia</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="lg:col-span-2 border-2 shadow-lg">
            <CardHeader className="space-y-2">
              <CardTitle className="text-2xl">Kirim Pesan</CardTitle>
              <CardDescription className="text-base">
                Isi form di bawah dan kami akan segera menghubungi Anda
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Input
                    placeholder="Nama Lengkap"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12 border-2 focus:border-primary"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-12 border-2 focus:border-primary"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Pesan Anda"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="border-2 focus:border-primary resize-none"
                  />
                </div>
                <Button type="submit" className="w-full h-12 bg-gradient-primary hover:shadow-glow transition-all hover:scale-105 text-base">
                  Kirim Pesan
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
