import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, TrendingUp, TrendingDown, Wallet, MessageSquare, FileSpreadsheet, ArrowRight, Calendar, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  {
    title: "Total Transaksi",
    value: "1,234",
    change: "+12.5%",
    trend: "up",
    icon: Wallet,
    description: "Bulan ini"
  },
  {
    title: "Pemasukan",
    value: "Rp 45.2M",
    change: "+8.2%",
    trend: "up",
    icon: TrendingUp,
    description: "Bulan ini"
  },
  {
    title: "Pengeluaran",
    value: "Rp 32.8M",
    change: "-3.1%",
    trend: "down",
    icon: TrendingDown,
    description: "Bulan ini"
  }
];

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

const recentActivities = [
  {
    action: "Transaksi tercatat",
    detail: "Pemasukan Rp 500.000 dari Penjualan Produk A",
    time: "2 menit lalu",
    status: "success"
  },
  {
    action: "Spreadsheet disinkronkan",
    detail: "Data berhasil tersimpan ke Google Sheets",
    time: "15 menit lalu",
    status: "info"
  },
  {
    action: "Transaksi tercatat",
    detail: "Pengeluaran Rp 200.000 untuk Operasional",
    time: "1 jam lalu",
    status: "success"
  }
];

const quickActions = [
  {
    title: "Pengaturan WhatsApp",
    description: "Kelola bot dan nomor terhubung",
    icon: MessageSquare,
    href: "/settings/whatsapp",
    color: "bg-green-500/10 text-green-600 dark:text-green-400"
  },
  {
    title: "Kelola Paket",
    description: "Lihat dan upgrade paket aktif",
    icon: Wallet,
    href: "/packages",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400"
  },
  {
    title: "Riwayat Transaksi",
    description: "Lihat semua transaksi Anda",
    icon: FileSpreadsheet,
    href: "/transactions",
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400"
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

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardDescription className="text-xs font-medium">{stat.description}</CardDescription>
                  <div className={`h-10 w-10 rounded-lg ${stat.trend === 'up' ? 'bg-success/10' : 'bg-muted'} flex items-center justify-center`}>
                    <stat.icon className={`h-5 w-5 ${stat.trend === 'up' ? 'text-success' : 'text-muted-foreground'}`} />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <h3 className="text-2xl md:text-3xl font-bold">{stat.value}</h3>
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <Badge variant={stat.trend === 'up' ? 'default' : 'secondary'} className="text-xs">
                      {stat.change}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content - 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Actions */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Aksi Cepat</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {quickActions.map((action, index) => (
                  <Link key={index} to={action.href}>
                    <Card className="hover:shadow-lg transition-all border-2 hover:border-primary/50 cursor-pointer h-full">
                      <CardHeader className="pb-3">
                        <div className={`h-12 w-12 rounded-lg ${action.color} flex items-center justify-center mb-3`}>
                          <action.icon className="h-6 w-6" />
                        </div>
                        <CardTitle className="text-base">{action.title}</CardTitle>
                        <CardDescription className="text-xs">{action.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            {/* Video Tutorials */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Video Tutorial</h2>
                <Badge variant="outline">{videos.length} Video</Badge>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {videos.map((video, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-all border-2 hover:border-primary/50">
                    <CardContent className="p-0">
                      <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative overflow-hidden group cursor-pointer">
                        <button className="relative h-12 w-12 rounded-full bg-primary hover:bg-primary/90 flex items-center justify-center transition-all group-hover:scale-110 shadow-glow z-10">
                          <Play className="h-5 w-5 text-primary-foreground ml-0.5" />
                        </button>
                        <div className="absolute top-2 left-2">
                          <Badge variant="secondary" className="text-xs">
                            {video.category}
                          </Badge>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                          {video.duration}
                        </div>
                      </div>
                    </CardContent>
                    <CardHeader className="pb-4">
                      <CardTitle className="text-sm leading-tight line-clamp-1">{video.title}</CardTitle>
                      <CardDescription className="text-xs line-clamp-2">
                        {video.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - 1 column */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-lg">Aktivitas Terbaru</CardTitle>
                <CardDescription className="text-xs">Update terkini dari sistem</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex gap-3 pb-4 border-b last:border-0 last:pb-0">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium leading-tight">{activity.action}</p>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{activity.detail}</p>
                      <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Package Info */}
            <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-success">Paket Aktif</Badge>
                  <Badge variant="outline">UMKM</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Transaksi Tersisa</span>
                    <span className="font-semibold">247 / 500</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-primary" style={{ width: '49.4%' }} />
                  </div>
                </div>
                <div className="pt-2 border-t space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Perpanjangan</span>
                    <span className="font-medium">15 Jan 2025</span>
                  </div>
                </div>
                <Link to="/packages">
                  <Button className="w-full bg-gradient-primary group" size="sm">
                    Upgrade Paket
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
