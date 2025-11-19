import { Home, Settings, CreditCard, Receipt, Package } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Dashboard", url: "/dashboard", icon: Home },
  { title: "Paket Aktif", url: "/packages", icon: Package },
  { title: "Riwayat Transaksi", url: "/transactions", icon: Receipt },
  { title: "Pengaturan WhatsApp", url: "/settings/whatsapp", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar collapsible="icon" className="border-r">
      <SidebarHeader className="border-b p-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0">
            <CreditCard className="h-5 w-5 text-primary-foreground" />
          </div>
          {state === "expanded" && (
            <span className="font-bold text-lg bg-gradient-primary bg-clip-text text-transparent">
              MyFin
            </span>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <nav className="flex-1 p-4">
          <div className="space-y-1">
            {menuItems.map((item) => (
              <NavLink
                key={item.title}
                to={item.url}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${
                  isActive(item.url)
                    ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.title}</span>
              </NavLink>
            ))}
          </div>
        </nav>
      </SidebarContent>
    </Sidebar>
  );
}
