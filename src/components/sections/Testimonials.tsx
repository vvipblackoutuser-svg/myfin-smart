import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Owner Warung Makan",
    content: "MyFin sangat membantu saya mencatat transaksi harian. Tinggal kirim foto struk via WhatsApp, langsung tercatat rapi di spreadsheet!",
    rating: 5
  },
  {
    name: "Siti Nurhaliza",
    role: "Pemilik Toko Online",
    content: "Fitur voice note-nya keren banget. Kalau lagi sibuk, tinggal rekam suara aja. Praktis dan cepat!",
    rating: 5
  },
  {
    name: "Ahmad Yani",
    role: "CEO PT Maju Jaya",
    content: "Untuk perusahaan kecil seperti kami, MyFin adalah solusi sempurna. Harga terjangkau dengan fitur lengkap.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container">
        <div className="text-center space-y-4 mb-20">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
              💬 Testimoni
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Dipercaya oleh <span className="text-primary">Ribuan Bisnis</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Dengar langsung dari pelanggan yang telah merasakan manfaat MyFin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 group bg-gradient-to-br from-card to-card/50"
            >
              <CardContent className="pt-8 space-y-6">
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
                <blockquote className="text-muted-foreground italic leading-relaxed text-base">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center font-bold text-primary text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold group-hover:text-primary transition-colors">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
