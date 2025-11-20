import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";


const videos = [
  {
    title: "Panduan Lengkap MyFin",
    description: "Pelajari cara menghubungkan WhatsApp dan mencatat transaksi.",
    duration: "10:30",
    category: "Pemula",
    thumbnail: "primary"
  },
  {
    title: "Setup WhatsApp Bot",
    description: "Tutorial menghubungkan nomor WhatsApp Anda dengan bot.",
    duration: "5:45",
    category: "Setup",
    thumbnail: "success"
  },
  {
    title: "Integrasi Google Spreadsheets",
    description: "Sinkronkan dengan Google Sheets untuk data real-time.",
    duration: "7:20",
    category: "Setup",
    thumbnail: "purple"
  },
  {
    title: "Mencatat dengan Gambar",
    description: "Kirim foto struk melalui WhatsApp untuk pencatatan otomatis.",
    duration: "4:15",
    category: "Tutorial",
    thumbnail: "orange"
  }
];


const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Selamat Datang Kembali! 👋</h1>
          <p className="text-muted-foreground">
            Kelola keuangan bisnis Anda dengan mudah melalui MyFin
          </p>
          <Badge variant="outline" className="text-sm mt-3 inline-flex">
            <Calendar className="h-3 w-3 mr-1" />
            {new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
          </Badge>
        </div>

        {/* Video Tutorials */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Video Tutorial</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {videos.map((video, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all group cursor-pointer">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="relative aspect-video bg-muted rounded-lg flex items-center justify-center group-hover:bg-muted/80 transition-colors">
                      <Play className="h-12 w-12 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-2 text-xs">{video.category}</Badge>
                      <h4 className="font-semibold text-sm mb-1">{video.title}</h4>
                      <p className="text-xs text-muted-foreground mb-2">{video.description}</p>
                      <p className="text-xs text-muted-foreground">{video.duration}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Package Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Paket Aktif</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="border-primary/50">
              <CardHeader>
                <CardTitle>UMKM</CardTitle>
                <CardDescription>Paket langganan Anda saat ini</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Status</span>
                    <Badge className="bg-success">Aktif</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Durasi</span>
                    <span className="text-sm font-semibold">30 hari</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Expired</span>
                    <span className="text-sm font-semibold">15 Jan 2025</span>
                  </div>
                </div>
                <Link to="/packages">
                  <Button className="w-full bg-gradient-primary">
                    Kelola Paket
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
