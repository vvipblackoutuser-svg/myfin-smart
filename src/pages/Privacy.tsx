import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const Privacy = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="container max-w-4xl">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-muted-foreground">Terakhir diperbarui: Desember 2024</p>
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
