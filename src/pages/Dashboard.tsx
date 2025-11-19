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
      <div className="space-y-6 max-w-[1600px] mx-auto">
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Selamat Datang Kembali! 👋</h1>
            <p className="text-muted-foreground">
              Kelola keuangan bisnis Anda dengan mudah melalui MyFin
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-sm">
              <Calendar className="h-3 w-3 mr-1" />
              {new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
            </Badge>
          </div>
        </div>

        {/* Video Tutorials */}
        <Card>
          <CardHeader>
            <CardTitle>Video Tutorial</CardTitle>
            <CardDescription>Pelajari cara menggunakan MyFin dengan mudah</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
          </CardContent>
        </Card>

        {/* Package Info */}
        <Card className="border-primary/50 max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Paket Aktif</CardTitle>
            <CardDescription>Informasi langganan Anda</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Paket</span>
                <Badge className="bg-gradient-primary">UMKM</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Durasi</span>
                <span className="text-sm font-semibold">30 hari</span>
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
    </DashboardLayout>
  );
};

export default Dashboard;
