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
    <section id="features" className="w-full py-20 md:py-32">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Fitur Lengkap untuk Bisnis Anda</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Semua yang Anda butuhkan untuk mengelola keuangan bisnis dengan mudah dan efisien
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
            <img
              src={whatsappBot}
              alt="MyFin WhatsApp Bot Interface"
              className="relative rounded-2xl shadow-2xl border max-w-sm mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
