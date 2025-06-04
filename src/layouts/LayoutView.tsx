import { Outlet } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";

export default function LayoutView() {
  const menuItems = [
    { label: "Beranda", href: "/" },
    { label: "Dataset", href: "/datasets" },
    { label: "Sektoral", href: "/sectorals" },
    { label: "Urusan", href: "/urusan" },
    { label: "Organisasi", href: "/organizations" },
    { label: "Publikasi", href: "/publications" },
    { label: "Kontak", href: "/contacts" },
  ];

  return (
    <div className="mx-auto px-2 sm:px-16 lg:px-20">
      <Navbar menuItems={menuItems} />
      <Outlet />
      <Footer />
    </div>
  );
}
