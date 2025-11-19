import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import spreadsheetDemo from "@/assets/spreadsheet-demo.jpg";

export const Hero = () => {
  return (
    <section className="w-full py-20 md:py-32 bg-gradient-hero">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Kelola Keuangan Bisnis dengan{" "}
                <span className="text-primary">WhatsApp</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Catat pemasukan dan pengeluaran melalui WhatsApp. Integrasi otomatis dengan Google Spreadsheets. 
                Dukung gambar, voice note, dan PDF.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup">
                <Button size="lg" className="bg-gradient-primary shadow-glow group">
                  Mulai Sekarang
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="#features">
                <Button size="lg" variant="outline">
                  Lihat Fitur
                </Button>
              </a>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">UMKM Terdaftar</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Transaksi/Bulan</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
            <img
              src={spreadsheetDemo}
              alt="MyFin Spreadsheet Dashboard"
              className="relative rounded-2xl shadow-2xl border"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
