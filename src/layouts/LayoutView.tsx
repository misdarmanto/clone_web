import { Outlet } from "react-router-dom";
import Navbar from "../components/header/Navbar";

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
    <div>
      <Navbar menuItems={menuItems} />
      <div className="mx-auto px-2 sm:px-16 lg:px-20">
        <Outlet />
      </div>
    </div>
  );
}
