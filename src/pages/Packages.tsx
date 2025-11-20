import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
    ],
    isActive: true
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
    isActive: false,
    popular: true
  }
];

const Packages = () => {
  const navigate = useNavigate();

  const handleBuyPackage = (pkg: typeof packages[0]) => {
    navigate("/packages/purchase", { 
      state: { package: pkg } 
    });
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Paket Langganan</h1>
          <p className="text-muted-foreground">
            Pilih paket yang sesuai dengan kebutuhan bisnis Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative border-2 ${
                pkg.isActive
                  ? "border-primary shadow-glow"
                  : pkg.popular
                  ? "border-primary/50"
                  : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-primary">Populer</Badge>
                </div>
              )}
              {pkg.isActive && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-success">Paket Aktif</Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                <CardDescription>{pkg.description}</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold">{pkg.price}</span>
                  <span className="text-muted-foreground">{pkg.period}</span>
                </div>
                {pkg.isActive && (
                  <div className="pt-4 border-t mt-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Tanggal Expired</span>
                      <span className="font-semibold">15 Januari 2025</span>
                    </div>
                  </div>
                )}
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
                <Button
                  className={`w-full ${
                    pkg.isActive ? "bg-muted text-muted-foreground" : "bg-gradient-primary"
                  }`}
                  disabled={pkg.isActive}
                  onClick={() => !pkg.isActive && handleBuyPackage(pkg)}
                >
                  {pkg.isActive ? "Paket Saat Ini" : "Beli Paket"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Packages;
