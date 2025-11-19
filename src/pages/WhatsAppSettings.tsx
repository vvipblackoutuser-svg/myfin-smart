import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { MessageSquare, Save } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const WhatsAppSettings = () => {
  const { toast } = useToast();
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Berhasil Disimpan!",
      description: "Nomor WhatsApp telah berhasil terhubung dengan bot.",
    });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="container max-w-2xl">
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Pengaturan WhatsApp</h1>
              <p className="text-muted-foreground">
                Kelola nomor WhatsApp yang terhubung dengan bot MyFin
              </p>
            </div>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>Nomor WhatsApp Owner</CardTitle>
                    <CardDescription>
                      Nomor utama yang akan terhubung dengan chatbot MyFin
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSave} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Nomor WhatsApp</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Contoh: 628123456789"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                    />
                    <p className="text-sm text-muted-foreground">
                      Format: 62 (kode negara) + nomor tanpa angka 0 di depan
                    </p>
                  </div>

                  <div className="rounded-lg bg-muted p-4 space-y-2">
                    <h4 className="font-semibold text-sm">Cara Menghubungkan:</h4>
                    <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                      <li>Pastikan nomor WhatsApp aktif</li>
                      <li>Masukkan nomor dengan format yang benar</li>
                      <li>Klik simpan dan tunggu verifikasi</li>
                      <li>Cek WhatsApp Anda untuk kode verifikasi</li>
                    </ol>
                  </div>

                  <Button type="submit" className="w-full bg-gradient-primary">
                    <Save className="mr-2 h-4 w-4" />
                    Simpan Pengaturan
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card className="border-primary/50">
              <CardHeader>
                <CardTitle className="text-lg">Status Koneksi</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Status Bot</span>
                  <span className="px-3 py-1 rounded-full bg-success/10 text-success text-sm font-medium">
                    Aktif
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WhatsAppSettings;
