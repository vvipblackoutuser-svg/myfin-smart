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
    <section id="faq" className="w-full py-20 md:py-32">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Pertanyaan Umum</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan yang sering diajukan
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 rounded-lg px-6 hover:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
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
