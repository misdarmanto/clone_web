import { useEffect, useState } from "react";
import organizationImage from "../assets/oragnization.webp";
import { useHttp } from "../hooks/http";
import type { IOrganization } from "../types/organization.interface";
import Loading from "../components/loading/Loading";
import { useNavigate } from "react-router-dom";

const categories = [
  "Semua",
  "Puskesmas",
  "Badan",
  "Bagian",
  "Dinas",
  "Sekretariat",
  "Inspektorat",
  "Satuan",
  "Rumah",
];

export default function OrganizationView() {
  const { handleGetRequest } = useHttp();
  const navigation = useNavigate();

  const [activeCategory, setActiveCategory] = useState("Semua");
  const [loading, setLoading] = useState(true);
  const [organizationList, setOrganizationList] = useState<IOrganization[]>([]);

  const fetchOrganizationList = async () => {
    try {
      const response = (await handleGetRequest({
        path: "/list-opd",
      })) as IOrganization[];

      if (response) {
        setOrganizationList(response);
      }
    } catch (err) {
      console.error("Dropdown fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrganizationList();
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-h2 text-orange-400 font-bold mb-6">Organisasi</h2>

      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded text-sm font-semibold ${
              activeCategory === cat
                ? "bg-orange-500 text-white"
                : "bg-gray-400 text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {organizationList.map((org, index) => (
          <div
            key={index}
            className="bg-white rounded shadow p-6 text-center hover:shadow-lg transition cursor-pointer"
            onClick={() => navigation(`/sectorals?id_user_opd=${org.id_opd}`)}
          >
            <img
              src={organizationImage}
              alt="Organization"
              loading="lazy"
              className="mx-auto mb-4 h-20"
            />
            <p className="text-xl font-bold text-orange-500 mb-1">
              {org.total_ref_sektoral}
            </p>
            <p className="font-semibold text-gray-700 mb-2">Data Sektoral</p>
            <p className="text-sm text-gray-500">{org.nama_opd}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
