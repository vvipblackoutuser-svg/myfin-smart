import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, CheckCircle2, XCircle, Clock, Download, FileText, Shield } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type PaymentStatus = "success" | "failed" | "pending";

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [step, setStep] = useState<1 | 2>(1);
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>("pending");
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
    setStep(2);
  };

  const handleDownloadInvoice = () => {
    navigate("/invoice", { 
      state: { 
        package: pkg,
        amount,
        paymentStatus,
        timestamp: new Date().toISOString()
      } 
    });
  };

  const getStatusConfig = () => {
    switch (paymentStatus) {
      case "success":
        return {
          icon: CheckCircle2,
          color: "text-success",
          bgColor: "bg-success/10",
          borderColor: "border-success",
          title: "Pembayaran Berhasil",
          description: "Pembayaran Anda telah dikonfirmasi. Paket sudah aktif dan siap digunakan."
        };
      case "failed":
        return {
          icon: XCircle,
          color: "text-destructive",
          bgColor: "bg-destructive/10",
          borderColor: "border-destructive",
          title: "Pembayaran Gagal",
          description: "Pembayaran Anda gagal diproses. Silakan coba lagi atau hubungi support."
        };
      case "pending":
      default:
        return {
          icon: Clock,
          color: "text-warning",
          bgColor: "bg-warning/10",
          borderColor: "border-warning",
          title: "Menunggu Pembayaran",
          description: "Silakan selesaikan pembayaran menggunakan Midtrans Snap. Status akan diperbarui otomatis."
        };
    }
  };

  const statusConfig = getStatusConfig();
  const StatusIcon = statusConfig.icon;

  return (
    <DashboardLayout>
      <div className="space-y-8 max-w-4xl mx-auto">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => step === 2 ? setStep(1) : navigate("/packages")}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold mb-2">
              {step === 1 ? "Ringkasan Pesanan" : "Status Pembayaran"}
            </h1>
            <p className="text-muted-foreground">
              {step === 1 
                ? "Periksa detail pesanan Anda sebelum melanjutkan pembayaran" 
                : "Informasi status pembayaran paket Anda"
              }
            </p>
          </div>
        </div>

        {step === 1 ? (
          <>
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
                <CardTitle>Persetujuan</CardTitle>
                <CardDescription>Silakan baca dan setujui syarat dan ketentuan berikut</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Checkbox 
                    id="terms" 
                    checked={agreedToTerms}
                    onCheckedChange={(checked) => setAgreedToTerms(checked === true)}
                  />
                  <div className="flex-1">
                    <Label 
                      htmlFor="terms" 
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      Saya menyetujui{" "}
                      <Button
                        variant="link"
                        className="h-auto p-0 text-primary"
                        onClick={() => window.open("/terms", "_blank")}
                      >
                        <FileText className="h-3 w-3 mr-1" />
                        Terms & Conditions
                      </Button>
                    </Label>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox 
                    id="privacy" 
                    checked={agreedToPrivacy}
                    onCheckedChange={(checked) => setAgreedToPrivacy(checked === true)}
                  />
                  <div className="flex-1">
                    <Label 
                      htmlFor="privacy" 
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      Saya menyetujui{" "}
                      <Button
                        variant="link"
                        className="h-auto p-0 text-primary"
                        onClick={() => window.open("/privacy", "_blank")}
                      >
                        <Shield className="h-3 w-3 mr-1" />
                        Privacy Policy
                      </Button>
                    </Label>
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
          </>
        ) : (
          <>
            {/* Preview Status Selector */}
            <Card className="border-primary/50">
              <CardHeader>
                <CardTitle>Preview Mode</CardTitle>
                <CardDescription>Ubah status untuk melihat tampilan berbeda (untuk preview saja)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Label>Status Pembayaran</Label>
                  <Select value={paymentStatus} onValueChange={(value: PaymentStatus) => setPaymentStatus(value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending - Menunggu Pembayaran</SelectItem>
                      <SelectItem value="success">Success - Pembayaran Berhasil</SelectItem>
                      <SelectItem value="failed">Failed - Pembayaran Gagal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Payment Status */}
            <Card className={`border-2 ${statusConfig.borderColor}`}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className={`rounded-full ${statusConfig.bgColor} p-3`}>
                    <StatusIcon className={`h-6 w-6 ${statusConfig.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{statusConfig.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {statusConfig.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Order Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Ringkasan Pesanan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{pkg.name}</p>
                    <p className="text-sm text-muted-foreground">Paket baru</p>
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

            {/* Actions */}
            <div className="flex gap-4">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => navigate("/packages")}
              >
                Kembali ke Paket
              </Button>
              <Button
                className="flex-1 bg-gradient-primary"
                onClick={handleDownloadInvoice}
              >
                <Download className="h-4 w-4 mr-2" />
                Lihat Invoice
              </Button>
            </div>
          </>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Payment;
