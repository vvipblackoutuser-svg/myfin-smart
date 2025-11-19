import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, BookOpen, MessageSquare, FileSpreadsheet } from "lucide-react";

const videos = [
  {
    title: "Panduan Lengkap MyFin",
    description: "Pelajari cara menghubungkan WhatsApp, mencatat transaksi, dan menggunakan semua fitur MyFin.",
    duration: "10:30",
    category: "Pemula"
  },
  {
    title: "Setup WhatsApp Bot",
    description: "Tutorial lengkap menghubungkan nomor WhatsApp Anda dengan chatbot MyFin.",
    duration: "5:45",
    category: "Setup"
  },
  {
    title: "Integrasi Google Spreadsheets",
    description: "Cara mengintegrasikan MyFin dengan Google Spreadsheets untuk akses data real-time.",
    duration: "7:20",
    category: "Setup"
  },
  {
    title: "Mencatat Transaksi dengan Gambar",
    description: "Pelajari cara mengirim foto struk atau nota melalui WhatsApp untuk pencatatan otomatis.",
    duration: "4:15",
    category: "Tutorial"
  },
  {
    title: "Voice Note untuk Transaksi",
    description: "Gunakan voice note untuk mencatat transaksi dengan cepat dan mudah.",
    duration: "3:50",
    category: "Tutorial"
  },
  {
    title: "Upload dan Analisis PDF",
    description: "Tutorial upload dokumen PDF dan analisis data keuangan mendalam (Paket Bisnis).",
    duration: "8:30",
    category: "Lanjutan"
  }
];

const quickLinks = [
  {
    title: "Panduan Cepat",
    description: "Mulai gunakan MyFin dalam 5 menit",
    icon: BookOpen,
    color: "text-blue-500"
  },
  {
    title: "WhatsApp Bot",
    description: "Hubungkan nomor WhatsApp Anda",
    icon: MessageSquare,
    color: "text-green-500"
  },
  {
    title: "Spreadsheet",
    description: "Sinkronkan dengan Google Sheets",
    icon: FileSpreadsheet,
    color: "text-purple-500"
  }
];

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-7xl mx-auto">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground text-sm md:text-base">
            Selamat datang di MyFin! Pelajari cara menggunakan platform kami melalui video tutorial.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {quickLinks.map((link, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-primary/50">
              <CardHeader className="pb-3">
                <div className="flex items-start gap-3">
                  <div className={`h-10 w-10 rounded-lg bg-muted flex items-center justify-center shrink-0 ${link.color}`}>
                    <link.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-base">{link.title}</CardTitle>
                    <CardDescription className="text-xs mt-1">{link.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Video Tutorials */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Video Tutorial</h2>
            <Badge variant="outline">{videos.length} Video</Badge>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {videos.map((video, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all">
                <CardContent className="p-0">
                  <div className="aspect-video bg-muted flex items-center justify-center relative overflow-hidden group cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-primary opacity-10 group-hover:opacity-20 transition-opacity" />
                    <button className="relative h-14 w-14 md:h-16 md:w-16 rounded-full bg-primary hover:bg-primary/90 flex items-center justify-center transition-all group-hover:scale-110 shadow-glow">
                      <Play className="h-5 w-5 md:h-6 md:w-6 text-primary-foreground ml-0.5" />
                    </button>
                    <div className="absolute top-3 left-3">
                      <Badge variant="secondary" className="text-xs">
                        {video.category}
                      </Badge>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                </CardContent>
                <CardHeader className="pb-4">
                  <CardTitle className="text-base md:text-lg leading-tight">{video.title}</CardTitle>
                  <CardDescription className="text-xs md:text-sm line-clamp-2">
                    {video.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
