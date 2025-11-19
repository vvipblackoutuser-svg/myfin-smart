import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Play } from "lucide-react";

const videos = [
  {
    title: "Panduan Lengkap MyFin",
    description: "Pelajari cara menghubungkan WhatsApp, mencatat transaksi, dan menggunakan semua fitur MyFin dalam 10 menit.",
    duration: "10:30"
  },
  {
    title: "Setup WhatsApp Bot",
    description: "Tutorial lengkap menghubungkan nomor WhatsApp Anda dengan chatbot MyFin untuk pencatatan otomatis.",
    duration: "5:45"
  },
  {
    title: "Integrasi Google Spreadsheets",
    description: "Cara mengintegrasikan MyFin dengan Google Spreadsheets untuk akses data real-time.",
    duration: "7:20"
  },
  {
    title: "Mencatat Transaksi dengan Gambar",
    description: "Pelajari cara mengirim foto struk atau nota melalui WhatsApp untuk pencatatan otomatis.",
    duration: "4:15"
  },
  {
    title: "Voice Note untuk Transaksi",
    description: "Gunakan voice note untuk mencatat transaksi dengan cepat dan mudah.",
    duration: "3:50"
  },
  {
    title: "Upload dan Analisis PDF",
    description: "Tutorial upload dokumen PDF dan analisis data keuangan mendalam (Paket Bisnis).",
    duration: "8:30"
  }
];

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">
            Selamat datang di MyFin! Pelajari cara menggunakan platform kami.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {videos.map((video, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{video.title}</CardTitle>
                <CardDescription>{video.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-primary opacity-10" />
                  <button className="relative h-16 w-16 rounded-full bg-primary hover:bg-primary/90 flex items-center justify-center transition-all hover:scale-110 shadow-glow">
                    <Play className="h-6 w-6 text-primary-foreground ml-1" />
                  </button>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
