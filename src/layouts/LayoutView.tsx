import { Outlet } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";
import { useAppContext } from "../context/app.context";
import Snackbar from "../components/snackbar/Snackbar";

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

  const { appAlert, setAppAlert } = useAppContext();

  return (
    <div className="mx-auto px-2 sm:px-16 lg:px-20">
      <Navbar menuItems={menuItems} />
      <div className="md:py-5">
        <Outlet />
      </div>
      <Snackbar
        open={appAlert.isDisplayAlert}
        severity="error"
        message={appAlert.message}
        onClose={() =>
          setAppAlert({
            isDisplayAlert: false,
            alertType: undefined,
            message: "",
          })
        }
      />
      <Footer />
    </div>
  );
}
