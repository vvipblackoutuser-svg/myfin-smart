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
    <section id="pricing" className="py-24 bg-muted/50">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="text-sm">Harga</Badge>
          <h2 className="text-3xl md:text-4xl font-bold">
            Paket yang Sesuai untuk Bisnis Anda
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Pilih paket yang tepat untuk kebutuhan pencatatan keuangan bisnis Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative border-2 ${
                pkg.popular ? "border-primary shadow-glow" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-primary">Populer</Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                <CardDescription>{pkg.description}</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold">{pkg.price}</span>
                  <span className="text-muted-foreground">{pkg.period}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-gradient-primary hover:opacity-90">
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
