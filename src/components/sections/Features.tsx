import { MessageSquare, FileSpreadsheet, Mic, Image, FileText, BarChart3 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import whatsappBot from "@/assets/whatsapp-bot.jpg";

const features = [
  {
    icon: MessageSquare,
    title: "Chatbot WhatsApp",
    description: "Catat transaksi langsung dari WhatsApp tanpa perlu buka aplikasi lain"
  },
  {
    icon: FileSpreadsheet,
    title: "Integrasi Google Sheets",
    description: "Sinkronisasi otomatis dengan Google Spreadsheets untuk kemudahan akses"
  },
  {
    icon: Image,
    title: "Upload Gambar",
    description: "Kirim foto struk atau bukti pembayaran langsung melalui chat"
  },
  {
    icon: Mic,
    title: "Voice Note",
    description: "Rekam transaksi dengan suara, sistem akan otomatis mengkonversi"
  },
  {
    icon: FileText,
    title: "Upload PDF",
    description: "Kirim dokumen PDF untuk transaksi yang lebih kompleks"
  },
  {
    icon: BarChart3,
    title: "Rekap Harian",
    description: "Minta rekap keuangan harian kapan saja melalui WhatsApp"
  }
];

export const Features = () => {
  return (
    <section id="features" className="w-full py-20 md:py-32 lg:py-40 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background pointer-events-none" />
      
      <div className="container relative">
        <div className="text-center space-y-4 mb-20">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
              Fitur Unggulan
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Fitur Lengkap untuk <span className="text-primary">Bisnis Anda</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Semua yang Anda butuhkan untuk mengelola keuangan bisnis dengan mudah dan efisien
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="relative lg:order-first">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-[100px] rounded-full animate-pulse" />
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
            <img
              src={whatsappBot}
              alt="MyFin WhatsApp Bot Interface"
              className="relative rounded-2xl shadow-2xl border-2 border-primary/20 max-w-sm mx-auto hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
