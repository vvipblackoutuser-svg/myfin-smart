import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Privacy = () => {
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
            <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
            <p className="text-muted-foreground">Terakhir diperbarui: Desember 2024</p>
          </div>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h2>1. Pengumpulan Data</h2>
          <p>
            Kami mengumpulkan data yang Anda berikan saat mendaftar dan menggunakan layanan kami, 
            termasuk nama, email, nomor WhatsApp, dan data transaksi keuangan.
          </p>

          <h2>2. Penggunaan Data</h2>
          <p>
            Data Anda digunakan untuk menyediakan layanan, meningkatkan pengalaman pengguna, 
            dan berkomunikasi dengan Anda terkait layanan kami.
          </p>

          <h2>3. Keamanan Data</h2>
          <p>
            Kami menggunakan enkripsi dan protokol keamanan standar industri untuk melindungi data Anda. 
            Data disimpan dengan aman dan tidak dibagikan kepada pihak ketiga tanpa persetujuan Anda.
          </p>

          <h2>4. Hak Anda</h2>
          <p>
            Anda memiliki hak untuk mengakses, mengubah, atau menghapus data pribadi Anda kapan saja 
            melalui pengaturan akun atau dengan menghubungi kami.
          </p>

          <h2>5. Cookies</h2>
          <p>
            Kami menggunakan cookies untuk meningkatkan pengalaman pengguna dan menganalisis 
            penggunaan layanan kami.
          </p>

          <h2>6. Perubahan Kebijakan</h2>
          <p>
            Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. 
            Perubahan akan diinformasikan melalui email atau notifikasi di platform.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Privacy;
