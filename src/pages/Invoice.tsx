import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Download, CheckCircle2, Clock } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Invoice = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { package: pkg, type, currentPackage, amount, paymentMethod, timestamp } = location.state || {};

  if (!pkg) {
    navigate("/packages");
    return null;
  }

  const isUpgrade = type === "upgrade";
  const date = new Date(timestamp);
  const invoiceNumber = `INV/${date.getFullYear()}/${String(date.getMonth() + 1).padStart(2, '0')}/${Math.floor(Math.random() * 100000).toString().padStart(5, '0')}`;

  const getPaymentMethodName = () => {
    switch (paymentMethod) {
      case "qris": return "QRIS";
      case "bank": return "Transfer Bank";
      case "ewallet": return "E-Wallet";
      default: return "-";
    }
  };

  const handleDownload = () => {
    // In a real app, this would generate and download a PDF
    alert("Invoice akan diunduh sebagai PDF");
  };

  return (
    <DashboardLayout>
      <div className="space-y-8 max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate("/packages")}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-3xl font-bold mb-2">Invoice</h1>
              <p className="text-muted-foreground">
                Detail transaksi dan invoice pembayaran
              </p>
            </div>
          </div>
          <Button variant="outline" onClick={handleDownload}>
            <Download className="h-4 w-4 mr-2" />
            Download PDF
          </Button>
        </div>

        {/* Status Card */}
        <Card className="border-2 border-warning">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-warning/10 p-3">
                <Clock className="h-6 w-6 text-warning" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">Pembayaran Sedang Diverifikasi</h3>
                <p className="text-sm text-muted-foreground">
                  Kami sedang memverifikasi pembayaran Anda. Proses verifikasi memakan waktu maksimal 1x24 jam. 
                  Anda akan menerima notifikasi setelah pembayaran dikonfirmasi.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Invoice Details */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-2xl mb-2">MyFin</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Platform Manajemen Keuangan<br />
                  Jl. Contoh No. 123, Jakarta<br />
                  Email: support@myfin.id
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground mb-1">Invoice</p>
                <p className="font-mono font-semibold">{invoiceNumber}</p>
                <p className="text-sm text-muted-foreground mt-2">
                  {date.toLocaleDateString('id-ID', { 
                    day: 'numeric', 
                    month: 'long', 
                    year: 'numeric' 
                  })}
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <Separator />
            
            {/* Customer Info */}
            <div>
              <p className="text-sm text-muted-foreground mb-2">Pelanggan</p>
              <p className="font-semibold">John Doe</p>
              <p className="text-sm text-muted-foreground">john.doe@example.com</p>
            </div>

            <Separator />

            {/* Order Details */}
            <div className="space-y-4">
              <p className="font-semibold">Detail Pesanan</p>
              
              <div className="space-y-3">
                {isUpgrade && currentPackage && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Paket Sebelumnya:</span>
                    <span>{currentPackage.name}</span>
                  </div>
                )}
                
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium">{pkg.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {isUpgrade ? "Upgrade Paket" : "Paket Baru"} - Langganan Bulanan
                    </p>
                  </div>
                  <p className="font-semibold">{pkg.price}</p>
                </div>

                {isUpgrade && (
                  <div className="bg-muted p-3 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      Biaya prorata untuk sisa periode bulan ini
                    </p>
                  </div>
                )}
              </div>
            </div>

            <Separator />

            {/* Payment Details */}
            <div className="space-y-3">
              <p className="font-semibold">Detail Pembayaran</p>
              
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Metode Pembayaran:</span>
                <span>{getPaymentMethodName()}</span>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Status:</span>
                <Badge variant="outline" className="bg-warning/10 text-warning border-warning">
                  Menunggu Verifikasi
                </Badge>
              </div>
            </div>

            <Separator />

            {/* Total */}
            <div className="bg-muted p-4 rounded-lg space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal:</span>
                <span>Rp {amount.toLocaleString('id-ID')}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Biaya Admin:</span>
                <span>Rp 0</span>
              </div>
              <Separator />
              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span className="text-primary">Rp {amount.toLocaleString('id-ID')}</span>
              </div>
            </div>

            {/* Notes */}
            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="text-sm font-semibold mb-2">Catatan:</p>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Invoice ini akan diperbarui setelah pembayaran diverifikasi</li>
                <li>Simpan invoice ini sebagai bukti pembayaran</li>
                <li>Hubungi support jika ada pertanyaan mengenai invoice ini</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex gap-4">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => navigate("/transactions")}
          >
            Lihat Riwayat Transaksi
          </Button>
          <Button
            className="flex-1 bg-gradient-primary"
            onClick={() => navigate("/packages")}
          >
            Kembali ke Paket
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Invoice;
