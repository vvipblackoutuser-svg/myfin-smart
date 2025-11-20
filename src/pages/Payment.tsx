import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, FileText, Shield } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);

  const { package: pkg } = location.state || {};

  if (!pkg) {
    navigate("/packages");
    return null;
  }

  const amount = pkg.priceValue;

  const handleProceedToPayment = () => {
    if (!agreedToTerms || !agreedToPrivacy) {
      toast({
        title: "Persetujuan Diperlukan",
        description: "Anda harus menyetujui Terms & Conditions dan Privacy Policy untuk melanjutkan.",
        variant: "destructive"
      });
      return;
    }
    navigate("/payment-status", { 
      state: { 
        package: pkg,
        amount
      } 
    });
  };


  return (
    <DashboardLayout>
      <div className="space-y-8 max-w-4xl mx-auto">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate("/packages")}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold mb-2">Ringkasan Pesanan</h1>
            <p className="text-muted-foreground">
              Periksa detail pesanan Anda sebelum melanjutkan pembayaran
            </p>
          </div>
        </div>

        {/* Order Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Detail Paket</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-lg">{pkg.name}</p>
                <p className="text-sm text-muted-foreground">Paket baru - berlangganan bulanan</p>
              </div>
              <Badge className="bg-gradient-primary">{pkg.price}/bulan</Badge>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between items-center text-lg font-bold">
                <span>Total Pembayaran</span>
                <span className="text-primary">Rp {amount.toLocaleString('id-ID')}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Terms & Conditions Agreement */}
        <Card>
          <CardHeader>
            <CardTitle>Persetujuan Syarat dan Ketentuan</CardTitle>
            <CardDescription>Mohon baca dan setujui dokumen berikut sebelum melanjutkan</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                <Checkbox 
                  id="terms" 
                  checked={agreedToTerms}
                  onCheckedChange={(checked) => setAgreedToTerms(checked === true)}
                  className="mt-1"
                />
                <div className="flex-1 space-y-2">
                  <label 
                    htmlFor="terms" 
                    className="text-sm font-medium leading-none cursor-pointer flex items-center gap-2"
                  >
                    <FileText className="h-4 w-4 text-primary" />
                    <span>Saya telah membaca dan menyetujui Terms & Conditions</span>
                  </label>
                  <Button
                    variant="link"
                    className="h-auto p-0 text-xs text-muted-foreground hover:text-primary"
                    onClick={() => navigate("/terms", { state: { returnTo: "/payment", returnState: location.state } })}
                  >
                    Baca Terms & Conditions →
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                <Checkbox 
                  id="privacy" 
                  checked={agreedToPrivacy}
                  onCheckedChange={(checked) => setAgreedToPrivacy(checked === true)}
                  className="mt-1"
                />
                <div className="flex-1 space-y-2">
                  <label 
                    htmlFor="privacy" 
                    className="text-sm font-medium leading-none cursor-pointer flex items-center gap-2"
                  >
                    <Shield className="h-4 w-4 text-primary" />
                    <span>Saya telah membaca dan menyetujui Privacy Policy</span>
                  </label>
                  <Button
                    variant="link"
                    className="h-auto p-0 text-xs text-muted-foreground hover:text-primary"
                    onClick={() => navigate("/privacy", { state: { returnTo: "/payment", returnState: location.state } })}
                  >
                    Baca Privacy Policy →
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Button */}
        <div className="flex gap-4">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => navigate("/packages")}
          >
            Batal
          </Button>
          <Button
            className="flex-1 bg-gradient-primary"
            onClick={handleProceedToPayment}
            disabled={!agreedToTerms || !agreedToPrivacy}
          >
            Bayar Sekarang
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Payment;
