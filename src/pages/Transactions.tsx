import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, CreditCard, Package } from "lucide-react";

const transactions = [
  {
    id: "TRX001",
    date: "15 Des 2024",
    package: "UMKM",
    amount: "Rp 99.000",
    status: "success",
    method: "Transfer Bank"
  },
  {
    id: "TRX002",
    date: "15 Nov 2024",
    package: "UMKM",
    amount: "Rp 99.000",
    status: "success",
    method: "E-Wallet"
  },
  {
    id: "TRX003",
    date: "15 Okt 2024",
    package: "UMKM",
    amount: "Rp 99.000",
    status: "success",
    method: "Transfer Bank"
  }
];

const Transactions = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Riwayat Transaksi</h1>
          <p className="text-muted-foreground">
            Lihat semua transaksi pembelian paket Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Total Transaksi</CardDescription>
              <CardTitle className="text-3xl">3</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Total Pengeluaran</CardDescription>
              <CardTitle className="text-3xl">Rp 297K</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Paket Aktif</CardDescription>
              <CardTitle className="text-3xl">UMKM</CardTitle>
            </CardHeader>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Daftar Transaksi</CardTitle>
            <CardDescription>Riwayat pembelian paket UMKM dan Bisnis</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {transactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg border-2 hover:border-primary/50 transition-colors"
                >
                  <div className="space-y-1 mb-4 sm:mb-0">
                    <div className="flex items-center gap-2">
                      <Package className="h-4 w-4 text-primary" />
                      <span className="font-semibold">{transaction.package}</span>
                      <Badge variant="outline" className="text-xs">
                        {transaction.id}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {transaction.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <CreditCard className="h-3 w-3" />
                        {transaction.method}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end gap-4">
                    <span className="font-bold text-lg">{transaction.amount}</span>
                    <Badge className="bg-success">Berhasil</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Transactions;
