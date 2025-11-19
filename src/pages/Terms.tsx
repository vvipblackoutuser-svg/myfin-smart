import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const Terms = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="container max-w-4xl">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
              <p className="text-muted-foreground">Terakhir diperbarui: Desember 2024</p>
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
