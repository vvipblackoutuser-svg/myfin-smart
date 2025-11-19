import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Play } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="container">
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
              <p className="text-muted-foreground">
                Selamat datang di MyFin! Pelajari cara menggunakan platform kami.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Video Tutorial</CardTitle>
                <CardDescription>
                  Tonton video tutorial untuk memahami cara menggunakan MyFin
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-primary opacity-10" />
                  <button className="relative h-20 w-20 rounded-full bg-primary hover:bg-primary/90 flex items-center justify-center transition-all hover:scale-110 shadow-glow">
                    <Play className="h-8 w-8 text-primary-foreground ml-1" />
                  </button>
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="font-semibold">Panduan Lengkap MyFin</h3>
                  <p className="text-sm text-muted-foreground">
                    Pelajari cara menghubungkan WhatsApp, mencatat transaksi, dan menggunakan semua fitur MyFin dalam 10 menit.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Setup WhatsApp</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Hubungkan nomor WhatsApp Anda untuk mulai mencatat transaksi
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Integrasi Spreadsheet</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Sinkronkan dengan Google Spreadsheets untuk akses data real-time
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Mulai Mencatat</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Kirim transaksi via WhatsApp dalam berbagai format
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
