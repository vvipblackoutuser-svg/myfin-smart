import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Terms = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { returnTo, returnState } = location.state || {};

  const handleBack = () => {
    if (returnTo) {
      navigate(returnTo, { state: returnState });
    } else {
      navigate(-1);
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-8 max-w-4xl mx-auto">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={handleBack}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
            <p className="text-muted-foreground">Terakhir diperbarui: Desember 2024</p>
          </div>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h2>1. Penerimaan Syarat</h2>
          <p>
            Dengan menggunakan MyFin, Anda menyetujui syarat dan ketentuan ini. 
            Jika Anda tidak setuju, mohon tidak menggunakan layanan kami.
          </p>

          <h2>2. Layanan</h2>
          <p>
            MyFin menyediakan platform manajemen keuangan melalui integrasi WhatsApp dan Google Spreadsheets. 
            Kami berusaha memberikan layanan terbaik namun tidak menjamin ketersediaan 100% tanpa gangguan.
          </p>

          <h2>3. Akun Pengguna</h2>
          <p>
            Anda bertanggung jawab untuk menjaga kerahasiaan akun dan password Anda. 
            Segala aktivitas yang terjadi di akun Anda adalah tanggung jawab Anda.
          </p>

          <h2>4. Pembayaran</h2>
          <p>
            Pembayaran untuk paket langganan harus dilakukan sesuai dengan paket yang dipilih. 
            Tidak ada pengembalian dana untuk pembayaran yang telah dilakukan kecuali 
            dalam kondisi tertentu yang kami tentukan.
          </p>

          <h2>5. Penggunaan Layanan</h2>
          <p>
            Anda setuju untuk menggunakan layanan ini sesuai dengan hukum yang berlaku dan 
            tidak untuk tujuan ilegal atau merugikan pihak lain.
          </p>

          <h2>6. Penghentian Layanan</h2>
          <p>
            Kami berhak menghentikan akses Anda jika terdapat pelanggaran terhadap syarat dan ketentuan ini 
            atau aktivitas yang mencurigakan.
          </p>

          <h2>7. Batasan Tanggung Jawab</h2>
          <p>
            MyFin tidak bertanggung jawab atas kerugian langsung atau tidak langsung yang timbul 
            dari penggunaan atau ketidakmampuan menggunakan layanan kami.
          </p>

          <h2>8. Perubahan Syarat</h2>
          <p>
            Kami dapat memperbarui syarat dan ketentuan ini dari waktu ke waktu. 
            Penggunaan layanan setelah perubahan dianggap sebagai persetujuan terhadap syarat yang baru.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Terms;
