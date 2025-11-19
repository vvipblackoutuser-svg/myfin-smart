import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const Signup = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!agreedToPrivacy || !agreedToTerms) {
      toast({
        title: "Persetujuan Diperlukan",
        description: "Anda harus menyetujui Privacy Policy dan Terms of Service untuk mendaftar.",
        variant: "destructive"
      });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Password Tidak Cocok",
        description: "Password dan konfirmasi password harus sama.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Pendaftaran Berhasil!",
      description: "Akun Anda telah dibuat. Silakan login.",
    });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-12 bg-gradient-hero">
        <div className="container max-w-md">
          <Card className="border-2">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Daftar MyFin</CardTitle>
              <CardDescription>
                Mulai kelola keuangan bisnis Anda dengan mudah
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nama Lengkap</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Nama Anda"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Nomor WhatsApp</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="628123456789"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Minimal 8 karakter"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                    minLength={8}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Konfirmasi Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Ulangi password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-4 pt-4">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="privacy"
                      checked={agreedToPrivacy}
                      onCheckedChange={(checked) => setAgreedToPrivacy(checked as boolean)}
                      required
                    />
                    <label htmlFor="privacy" className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Saya telah membaca dan menyetujui{" "}
                      <Dialog>
                        <DialogTrigger asChild>
                          <button type="button" className="text-primary hover:underline">
                            Privacy Policy
                          </button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>Privacy Policy</DialogTitle>
                            <DialogDescription>
                              Kebijakan privasi MyFin
                            </DialogDescription>
                          </DialogHeader>
                          <ScrollArea className="h-96">
                            <div className="space-y-4 text-sm">
                              <p>Terakhir diperbarui: Desember 2024</p>
                              <h3 className="font-semibold">1. Pengumpulan Data</h3>
                              <p>Kami mengumpulkan data yang Anda berikan saat mendaftar dan menggunakan layanan kami, termasuk nama, email, nomor WhatsApp, dan data transaksi keuangan.</p>
                              <h3 className="font-semibold">2. Penggunaan Data</h3>
                              <p>Data Anda digunakan untuk menyediakan layanan, meningkatkan pengalaman pengguna, dan berkomunikasi dengan Anda terkait layanan kami.</p>
                              <h3 className="font-semibold">3. Keamanan Data</h3>
                              <p>Kami menggunakan enkripsi dan protokol keamanan standar industri untuk melindungi data Anda. Data disimpan dengan aman dan tidak dibagikan kepada pihak ketiga tanpa persetujuan Anda.</p>
                              <h3 className="font-semibold">4. Hak Anda</h3>
                              <p>Anda memiliki hak untuk mengakses, mengubah, atau menghapus data pribadi Anda kapan saja melalui pengaturan akun atau dengan menghubungi kami.</p>
                            </div>
                          </ScrollArea>
                        </DialogContent>
                      </Dialog>
                    </label>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="terms"
                      checked={agreedToTerms}
                      onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                      required
                    />
                    <label htmlFor="terms" className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Saya telah membaca dan menyetujui{" "}
                      <Dialog>
                        <DialogTrigger asChild>
                          <button type="button" className="text-primary hover:underline">
                            Terms of Service
                          </button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>Terms of Service</DialogTitle>
                            <DialogDescription>
                              Syarat dan ketentuan penggunaan MyFin
                            </DialogDescription>
                          </DialogHeader>
                          <ScrollArea className="h-96">
                            <div className="space-y-4 text-sm">
                              <p>Terakhir diperbarui: Desember 2024</p>
                              <h3 className="font-semibold">1. Penerimaan Syarat</h3>
                              <p>Dengan menggunakan MyFin, Anda menyetujui syarat dan ketentuan ini. Jika Anda tidak setuju, mohon tidak menggunakan layanan kami.</p>
                              <h3 className="font-semibold">2. Layanan</h3>
                              <p>MyFin menyediakan platform manajemen keuangan melalui integrasi WhatsApp dan Google Spreadsheets. Kami berusaha memberikan layanan terbaik namun tidak menjamin ketersediaan 100% tanpa gangguan.</p>
                              <h3 className="font-semibold">3. Akun Pengguna</h3>
                              <p>Anda bertanggung jawab untuk menjaga kerahasiaan akun dan password Anda. Segala aktivitas yang terjadi di akun Anda adalah tanggung jawab Anda.</p>
                              <h3 className="font-semibold">4. Pembayaran</h3>
                              <p>Pembayaran untuk paket langganan harus dilakukan sesuai dengan paket yang dipilih. Tidak ada pengembalian dana untuk pembayaran yang telah dilakukan.</p>
                              <h3 className="font-semibold">5. Penghentian Layanan</h3>
                              <p>Kami berhak menghentikan akses Anda jika terdapat pelanggaran terhadap syarat dan ketentuan ini.</p>
                            </div>
                          </ScrollArea>
                        </DialogContent>
                      </Dialog>
                    </label>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-gradient-primary">
                  Daftar Sekarang
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  Sudah punya akun?{" "}
                  <Link to="/dashboard" className="text-primary hover:underline">
                    Login
                  </Link>
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Signup;
