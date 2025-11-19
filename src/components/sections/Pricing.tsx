import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const packages = [
  {
    name: "UMKM",
    price: "Rp 99.000",
    period: "/bulan",
    description: "Cocok untuk usaha kecil dan menengah",
    features: [
      "500 transaksi per bulan",
      "Integrasi WhatsApp",
      "Google Spreadsheets",
      "Upload gambar & voice note",
      "Rekap harian",
      "Support email"
    ]
  },
  {
    name: "BISNIS",
    price: "Rp 299.000",
    period: "/bulan",
    description: "Untuk bisnis yang sedang berkembang",
    features: [
      "Unlimited transaksi",
      "Semua fitur UMKM",
      "Upload PDF",
      "Multi-user access",
      "Analitik mendalam",
      "Priority support",
      "Custom spreadsheet template"
    ],
    popular: true
  }
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 md:py-32 lg:py-40 bg-gradient-to-b from-muted/30 via-muted/50 to-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-20">
          <div className="inline-block mb-4">
            <Badge variant="outline" className="text-sm px-4 py-2 border-primary/30">💰 Harga Terjangkau</Badge>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Paket yang Sesuai untuk <span className="text-primary">Bisnis Anda</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Pilih paket yang tepat untuk kebutuhan pencatatan keuangan bisnis Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative border-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                pkg.popular 
                  ? "border-primary shadow-glow bg-gradient-to-br from-primary/5 to-accent/5" 
                  : "hover:border-primary/50"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-primary shadow-lg text-base px-4 py-1">⭐ Populer</Badge>
                </div>
              )}
              <CardHeader className="space-y-4 pb-6">
                <div className="space-y-2">
                  <CardTitle className="text-2xl md:text-3xl">{pkg.name}</CardTitle>
                  <CardDescription className="text-base">{pkg.description}</CardDescription>
                </div>
                <div className="pt-4 border-t border-border/50">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {pkg.price}
                    </span>
                    <span className="text-muted-foreground text-lg">{pkg.period}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 group">
                      <div className="rounded-full bg-primary/10 p-1 group-hover:bg-primary/20 transition-colors">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full text-base py-6 ${
                    pkg.popular 
                      ? "bg-gradient-primary hover:shadow-glow" 
                      : "bg-gradient-primary hover:opacity-90"
                  } transition-all hover:scale-105`}
                >
                  Mulai Sekarang
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
