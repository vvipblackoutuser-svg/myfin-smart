import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import spreadsheetDemo from "@/assets/spreadsheet-demo.jpg";

export const Hero = () => {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-hero overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
                  ✨ Platform #1 untuk UMKM Indonesia
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
                Kelola Keuangan Bisnis dengan{" "}
                <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  WhatsApp
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Catat pemasukan dan pengeluaran melalui WhatsApp. Integrasi otomatis dengan Google Spreadsheets. 
                Dukung gambar, voice note, dan PDF.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup">
                <Button size="lg" className="bg-gradient-primary shadow-glow hover:shadow-xl group transition-all hover:scale-105 text-base">
                  Mulai Sekarang
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="#features">
                <Button size="lg" variant="outline" className="border-2 hover:bg-primary/5 text-base">
                  Lihat Fitur
                </Button>
              </a>
            </div>

            <div className="flex items-center gap-8 pt-6 border-t border-border/50">
              <div className="space-y-1">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">1000+</div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium">UMKM Terdaftar</div>
              </div>
              <div className="h-14 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
              <div className="space-y-1">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">50K+</div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium">Transaksi/Bulan</div>
              </div>
              <div className="h-14 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
              <div className="space-y-1">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">4.9/5</div>
                <div className="text-xs md:text-sm text-muted-foreground font-medium">Rating Pengguna</div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-[100px] rounded-full animate-pulse" />
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-accent/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            <img
              src={spreadsheetDemo}
              alt="MyFin Spreadsheet Dashboard"
              className="relative rounded-2xl shadow-2xl border-2 border-primary/20 hover:scale-[1.02] transition-transform duration-500 hover:shadow-glow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
