import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="w-full border-t bg-card">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
                <span className="text-lg font-bold text-primary-foreground">M</span>
              </div>
              <span className="text-xl font-bold">MyFin</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Platform manajemen keuangan terpercaya untuk UMKM dan perusahaan Indonesia.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Produk</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground transition-colors">Fitur</a></li>
              <li><Link to="/packages" className="hover:text-foreground transition-colors">Paket</Link></li>
              <li><Link to="/dashboard" className="hover:text-foreground transition-colors">Dashboard</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Perusahaan</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#team" className="hover:text-foreground transition-colors">Tim</a></li>
              <li><a href="#testimonials" className="hover:text-foreground transition-colors">Testimoni</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors">Kontak</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
              <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} MyFin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
