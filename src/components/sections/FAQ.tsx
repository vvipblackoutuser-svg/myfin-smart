import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Bagaimana cara memulai menggunakan MyFin?",
    answer: "Cukup daftar akun, pilih paket yang sesuai, dan hubungkan nomor WhatsApp Anda. Tim kami akan memandu setup awal dan integrasi Google Spreadsheets."
  },
  {
    question: "Apakah data saya aman?",
    answer: "Keamanan data adalah prioritas utama kami. Semua data dienkripsi dan disimpan dengan standar keamanan tinggi. Kami tidak pernah membagikan data Anda ke pihak ketiga."
  },
  {
    question: "Berapa lama waktu setup?",
    answer: "Setup awal hanya membutuhkan waktu 5-10 menit. Setelah itu, Anda langsung bisa mulai mencatat transaksi melalui WhatsApp."
  },
  {
    question: "Apa perbedaan paket UMKM dan Bisnis?",
    answer: "Paket UMKM cocok untuk usaha kecil dengan fitur dasar. Paket Bisnis menawarkan fitur lebih lengkap seperti multi-user, analitik mendalam, dan dukungan prioritas."
  },
  {
    question: "Bisakah saya upgrade atau downgrade paket?",
    answer: "Ya, Anda bisa mengubah paket kapan saja sesuai kebutuhan bisnis Anda. Perubahan akan berlaku pada periode billing berikutnya."
  },
  {
    question: "Apakah ada batasan jumlah transaksi?",
    answer: "Paket UMKM mendukung hingga 500 transaksi per bulan, sedangkan paket Bisnis unlimited transaksi."
  }
];

export const FAQ = () => {
  return (
    <section id="faq" className="w-full py-20 md:py-32 lg:py-40">
      <div className="container">
        <div className="text-center space-y-4 mb-20">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
              ❓ FAQ
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="text-primary">Pertanyaan</span> Umum
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan yang sering diajukan
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 rounded-xl px-6 hover:border-primary/50 transition-all hover:shadow-lg bg-gradient-to-br from-card to-card/50"
              >
                <AccordionTrigger className="text-left hover:no-underline text-base font-semibold py-5 hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
