import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Wallet, CreditCard, Check, Copy, CheckCircle2 } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

type PaymentMethod = "qris" | "bank" | "ewallet";

const paymentMethods = [
  {
    id: "qris" as PaymentMethod,
    name: "QRIS",
    icon: CreditCard,
    description: "Scan QR code untuk bayar"
  },
  {
    id: "bank" as PaymentMethod,
    name: "Transfer Bank",
    icon: Wallet,
    description: "BCA, Mandiri, BNI, BRI"
  },
  {
    id: "ewallet" as PaymentMethod,
    name: "E-Wallet",
    icon: Wallet,
    description: "GoPay, OVO, Dana, ShopeePay"
  }
];

const bankAccounts = [
  { name: "BCA", number: "1234567890", holder: "PT MyFin Indonesia" },
  { name: "Mandiri", number: "0987654321", holder: "PT MyFin Indonesia" },
  { name: "BNI", number: "5678901234", holder: "PT MyFin Indonesia" }
];

const ewallets = [
  { name: "GoPay", number: "081234567890", holder: "PT MyFin Indonesia" },
  { name: "OVO", number: "081234567890", holder: "PT MyFin Indonesia" },
  { name: "Dana", number: "081234567890", holder: "PT MyFin Indonesia" },
  { name: "ShopeePay", number: "081234567890", holder: "PT MyFin Indonesia" }
];

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(null);
  const [proofFile, setProofFile] = useState<File | null>(null);
  const [paymentData, setPaymentData] = useState<any>(null);

  const { package: pkg, type, currentPackage, priceDifference } = location.state || {};

  if (!pkg) {
    navigate("/packages");
    return null;
  }

  const amount = type === "upgrade" ? priceDifference : pkg.priceValue;
  const isUpgrade = type === "upgrade";

  const handleContinue = async () => {
    if (!selectedMethod) {
      toast({
        title: "Pilih metode pembayaran",
        description: "Silakan pilih metode pembayaran terlebih dahulu",
        variant: "destructive"
      });
      return;
    }

    // TODO: Call Midtrans API through edge function
    // For now, simulate payment data
    setPaymentData({
      qr_url: "https://api.sandbox.midtrans.com/v2/gopay/example/qr-code",
      expiry_time: new Date(Date.now() + 15 * 60 * 1000).toISOString()
    });
    
    setStep(2);
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Berhasil disalin",
      description: `${label} telah disalin ke clipboard`,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProofFile(e.target.files[0]);
    }
  };

  const handlePayment = () => {
    if (!selectedMethod) {
      toast({
        title: "Pilih metode pembayaran",
        description: "Silakan pilih metode pembayaran terlebih dahulu",
        variant: "destructive"
      });
      return;
    }

    if (!proofFile) {
      toast({
        title: "Upload bukti pembayaran",
        description: "Silakan upload bukti pembayaran terlebih dahulu",
        variant: "destructive"
      });
      return;
    }

    // Simulate payment processing
    toast({
      title: "Pembayaran sedang diproses",
      description: "Kami akan memverifikasi pembayaran Anda dalam 1x24 jam",
    });

    setTimeout(() => {
      navigate("/invoice", { 
        state: { 
          package: pkg,
          type,
          currentPackage,
          amount,
          paymentMethod: selectedMethod,
          timestamp: new Date().toISOString()
        } 
      });
    }, 1500);
  };

  return (
    <DashboardLayout>
      <div className="space-y-8 max-w-4xl mx-auto">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => step === 2 ? setStep(1) : navigate(-1)}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold mb-2">Pembayaran</h1>
            <p className="text-muted-foreground">
              {step === 1 
                ? "Pilih metode pembayaran" 
                : "Selesaikan pembayaran Anda"}
            </p>
          </div>
        </div>

        {/* Order Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Ringkasan Pesanan</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold">{pkg.name}</p>
                <p className="text-sm text-muted-foreground">
                  {isUpgrade ? `Upgrade dari ${currentPackage.name}` : "Paket baru"}
                </p>
              </div>
              <Badge className="bg-gradient-primary">{pkg.price}/bulan</Badge>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between items-center text-lg font-bold">
                <span>Total Pembayaran</span>
                <span className="text-primary">Rp {amount.toLocaleString('id-ID')}</span>
              </div>
              {isUpgrade && (
                <p className="text-sm text-muted-foreground mt-1">
                  Biaya prorata untuk bulan berjalan
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {step === 1 ? (
          <>
            {/* Payment Method Selection */}
            <Card>
              <CardHeader>
                <CardTitle>Pilih Metode Pembayaran</CardTitle>
                <CardDescription>Pilih metode pembayaran yang Anda inginkan</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {paymentMethods.map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setSelectedMethod(method.id)}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        selectedMethod === method.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <method.icon className="h-8 w-8 text-primary mb-2" />
                      <p className="font-semibold">{method.name}</p>
                      <p className="text-xs text-muted-foreground mt-1">{method.description}</p>
                    </button>
                  ))}
                </div>
                <Button
                  className="w-full bg-gradient-primary"
                  onClick={handleContinue}
                  disabled={!selectedMethod}
                >
                  Lanjutkan
                </Button>
              </CardContent>
            </Card>
          </>
        ) : (
          <>

        {/* Payment Details */}
        {selectedMethod === "qris" && (
          <Card>
            <CardHeader>
              <CardTitle>Scan QRIS</CardTitle>
              <CardDescription>Gunakan aplikasi pembayaran Anda untuk scan QR code</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4">
              <div className="w-64 h-64 bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground text-center">
                  QR Code<br />
                  <span className="text-sm">Rp {amount.toLocaleString('id-ID')}</span>
                </p>
              </div>
              <div className="text-center space-y-2">
                <p className="text-sm text-muted-foreground">
                  Scan QR code di atas dengan aplikasi pembayaran Anda
                </p>
                <Badge variant="outline" className="bg-success/10 text-success">
                  <CheckCircle2 className="h-3 w-3 mr-1" />
                  Valid sampai 24 jam
                </Badge>
              </div>
            </CardContent>
          </Card>
        )}

        {selectedMethod === "bank" && (
          <Card>
            <CardHeader>
              <CardTitle>Transfer Bank</CardTitle>
              <CardDescription>Pilih bank dan transfer ke nomor rekening berikut</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {bankAccounts.map((bank) => (
                <div key={bank.name} className="p-4 border rounded-lg space-y-2">
                  <div className="flex justify-between items-center">
                    <p className="font-semibold">{bank.name}</p>
                    <Badge variant="outline">Bank</Badge>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Nomor Rekening:</span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono">{bank.number}</span>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-6 w-6"
                          onClick={() => copyToClipboard(bank.number, "Nomor rekening")}
                        >
                          <Copy className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Atas Nama:</span>
                      <span className="text-sm font-medium">{bank.holder}</span>
                    </div>
                  </div>
                </div>
              ))}
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm font-semibold mb-2">Jumlah Transfer:</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">Rp {amount.toLocaleString('id-ID')}</span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard(amount.toString(), "Jumlah transfer")}
                  >
                    <Copy className="h-3 w-3 mr-2" />
                    Salin
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {selectedMethod === "ewallet" && (
          <Card>
            <CardHeader>
              <CardTitle>E-Wallet</CardTitle>
              <CardDescription>Pilih e-wallet dan transfer ke nomor berikut</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {ewallets.map((ewallet) => (
                <div key={ewallet.name} className="p-4 border rounded-lg space-y-2">
                  <div className="flex justify-between items-center">
                    <p className="font-semibold">{ewallet.name}</p>
                    <Badge variant="outline">E-Wallet</Badge>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Nomor:</span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono">{ewallet.number}</span>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="h-6 w-6"
                          onClick={() => copyToClipboard(ewallet.number, "Nomor e-wallet")}
                        >
                          <Copy className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Atas Nama:</span>
                      <span className="text-sm font-medium">{ewallet.holder}</span>
                    </div>
                  </div>
                </div>
              ))}
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm font-semibold mb-2">Jumlah Transfer:</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">Rp {amount.toLocaleString('id-ID')}</span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard(amount.toString(), "Jumlah transfer")}
                  >
                    <Copy className="h-3 w-3 mr-2" />
                    Salin
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

            {/* Upload Proof */}
            <Card>
              <CardHeader>
                <CardTitle>Upload Bukti Pembayaran</CardTitle>
                <CardDescription>
                  Upload screenshot atau foto bukti pembayaran Anda
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="proof">Bukti Pembayaran</Label>
                  <Input
                    id="proof"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="mt-2"
                  />
                  {proofFile && (
                    <p className="text-sm text-muted-foreground mt-2 flex items-center gap-2">
                      <Check className="h-4 w-4 text-success" />
                      {proofFile.name}
                    </p>
                  )}
                </div>
                <Button
                  className="w-full bg-gradient-primary"
                  onClick={handlePayment}
                >
                  Konfirmasi Pembayaran
                </Button>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Payment;
