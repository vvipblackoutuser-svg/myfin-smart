import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const currentPackage = {
  id: "umkm",
  name: "UMKM",
  price: "Rp 99.000",
  priceValue: 99000
};

const upgradePackage = {
  id: "bisnis",
  name: "BISNIS",
  price: "Rp 299.000",
  priceValue: 299000,
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
  newFeatures: [
    "Upload PDF",
    "Multi-user access",
    "Analitik mendalam",
    "Priority support",
    "Custom spreadsheet template"
  ]
};

const PackageUpgrade = () => {
  const navigate = useNavigate();
  const priceDifference = upgradePackage.priceValue - currentPackage.priceValue;

  const handleUpgrade = () => {
    navigate("/payment", { 
      state: { 
        package: upgradePackage,
        currentPackage: currentPackage,
        type: "upgrade",
        priceDifference: priceDifference
      } 
    });
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold mb-2">Upgrade Paket</h1>
            <p className="text-muted-foreground">
              Tingkatkan paket Anda dan dapatkan lebih banyak fitur
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Comparison */}
          <Card>
            <CardHeader>
              <CardTitle>Perbandingan Paket</CardTitle>
              <CardDescription>
                Lihat fitur tambahan yang akan Anda dapatkan
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Paket Saat Ini</p>
                  <h3 className="text-2xl font-bold">{currentPackage.name}</h3>
                  <p className="text-3xl font-bold text-muted-foreground mt-2">
                    {currentPackage.price}
                  </p>
                </div>
                
                <div className="flex justify-center">
                  <ArrowRight className="h-8 w-8 text-primary" />
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Upgrade Ke</p>
                  <h3 className="text-2xl font-bold text-primary">{upgradePackage.name}</h3>
                  <p className="text-3xl font-bold text-primary mt-2">
                    {upgradePackage.price}
                  </p>
                  <Badge className="bg-success mt-2">
                    +{upgradePackage.newFeatures.length} Fitur Baru
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Upgrade Package Details */}
          <Card className="border-2 border-primary shadow-glow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">{upgradePackage.name}</CardTitle>
                  <CardDescription>{upgradePackage.description}</CardDescription>
                </div>
                <Badge className="bg-gradient-primary">Rekomendasi</Badge>
              </div>
              <div className="pt-4">
                <span className="text-4xl font-bold">{upgradePackage.price}</span>
                <span className="text-muted-foreground">{upgradePackage.period}</span>
                <p className="text-sm text-muted-foreground mt-2">
                  Biaya tambahan: <span className="font-semibold text-foreground">Rp {priceDifference.toLocaleString('id-ID')}/bulan</span>
                </p>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Badge variant="outline" className="bg-success/10 text-success border-success">
                    Fitur Baru
                  </Badge>
                </h4>
                <ul className="space-y-3">
                  {upgradePackage.newFeatures.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-success shrink-0 mt-0.5" />
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-muted-foreground">Semua Fitur</h4>
                <ul className="space-y-3">
                  {upgradePackage.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button
                className="w-full bg-gradient-primary"
                onClick={handleUpgrade}
              >
                Upgrade Sekarang
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PackageUpgrade;
