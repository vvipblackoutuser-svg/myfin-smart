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
    <section id="testimonials" className="w-full py-20 md:py-32 bg-muted/50">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Dipercaya oleh Ribuan Bisnis</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dengar langsung dari pelanggan yang telah merasakan manfaat MyFin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2">
              <CardContent className="pt-6 space-y-4">
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
