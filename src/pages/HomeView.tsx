import heroImage from "../assets/hero.webp";
import cardImage from "../assets/card-image.webp";
import whyMeImage from "../assets/whyme.webp";
import Button from "../components/buttons/Button";
import { WavesIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useHttp } from "../hooks/http";
import Loading from "../components/loading/Loading";
import type { ITotalData, ITotalResponse } from "../types/home.interface";

export default function HomeView() {
  const navigation = useNavigate();
  const { handleGetRequest } = useHttp();

  const [loading, setLoading] = useState(true);
  const [totalData, setTotalData] = useState<ITotalData>({
    data_sektoral: 0,
    dataset: 0,
    urusan: 0,
  });

  const fetchTotalData = async () => {
    try {
      const response = (await handleGetRequest({
        path: "/data-sektoral/beranda",
      })) as ITotalResponse;

      if (response) {
        setTotalData(response?.total!);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTotalData();
  }, []);

  if (loading) return <Loading />;

  return (
    <div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="w-full md:w-1/2 mb-10 md:mb-0 order-2 md:order-1 flex flex-col items-center text-center md:items-start md:text-left">
          <p className="text-gray-400 text-h6 mb-1 font-bold">
            PORTAL SATU DATA LAMPUNG TIMUR
          </p>
          <h1 className="text-h1 mb-1">
            <span className="text-indigo-700">Akses Data</span>
            <br />
            <span className="text-red-600">Dalam Satu Portal</span>
          </h1>
          <p className="text-gray-600 mb-8">
            Dalam satu sentuhan, dunia data terbuka lebar.
            <br />
            Mari temukan apa yang akan anda cari.
          </p>
          <div className="flex space-x-4">
            <Button onClick={() => navigation("/datasets")}>CARI DATA</Button>
            <Button variant="outlined" onClick={() => navigation("/datasets")}>
              LIHAT DATASET
            </Button>
          </div>
        </div>

        <div className="w-full md:w-1/2 order-1 md:order-2 mb-8 md:mb-0">
          <img
            src={heroImage}
            alt="Data Portal Illustration"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 pb-20 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className={`bg-white shadow-md p-3 w-full flex flex-col gap-2`}>
          <div className="flex justify-center">
            <div>
              <div className="flex justify-center mb-4 rounded-xl">
                <img src={cardImage} alt="card image" loading="lazy" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Dataset
              </h3>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-600 mb-4">
              Kumpulan data yang diatur dalam format terstruktur dan tersedia di
              Portal Satu Data Indonesia.
            </p>
          </div>
          <div className="mt-auto">
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold">{totalData.dataset}</span>
              <button
                onClick={() => navigation("/datasets")}
                className="text-sm font-semibold text-white bg-black rounded px-4 py-2 hover:bg-gray-800 transition"
              >
                Lihat Data →
              </button>
            </div>
          </div>
        </div>

        <div className={`bg-white shadow-md p-3 w-full flex flex-col gap-2`}>
          <div className="flex justify-center">
            <div>
              <div className="flex justify-center mb-4 rounded-xl">
                <img src={cardImage} alt="card image" loading="lazy" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Statistik Sektoral
              </h3>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-600 mb-4">
              Data statistik yang digunakan untuk memenuhi kebutuhan instansi
              pemerintah tertentu.
            </p>
          </div>
          <div className="mt-auto">
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold">
                {totalData.data_sektoral}
              </span>
              <button
                onClick={() => navigation("/sectorals")}
                className="text-sm font-semibold text-white bg-black rounded px-4 py-2 hover:bg-gray-800 transition"
              >
                Lihat Data →
              </button>
            </div>
          </div>
        </div>

        <div className={`bg-white shadow-md p-3 w-full flex flex-col gap-2`}>
          <div className="flex justify-center">
            <div>
              <div className="flex justify-center mb-4 rounded-xl">
                <img src={cardImage} alt="card image" loading="lazy" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Urusan
              </h3>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-600 mb-4">
              Kebijakan tata kelola data pemerintah yang bertujuan untuk
              menghasilkan data berkualitas dan mudah diakses.
            </p>
          </div>
          <div className="mt-auto">
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold">{totalData.urusan}</span>
              <button
                onClick={() => navigation("/urusan")}
                className="text-sm font-semibold text-white bg-black rounded px-4 py-2 hover:bg-gray-800 transition"
              >
                Lihat Data →
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-h1 text-gray-800 mb-4">
            Mengapa Menggunakan <br className="hidden md:block" />
            Satu Data Lamtim?
          </h2>
          <p className="text-gray-600 leading-relaxed ">
            Satu Data adalah sebuah inisiatif pemerintah Indonesia untuk
            mendorong pengambilan kebijakan berdasarkan data. Untuk mewujudkan
            hal tersebut, maka diperlukan pemenuhan atas data pemerintah yang
            akurat, terbuka, dan interoperable.
          </p>
        </div>
        <div className="flex justify-center order-1 md:order-2">
          <img
            src={whyMeImage}
            alt="Mengapa Satu Data"
            className="w-full max-w-md md:max-w-lg h-auto"
            loading="lazy"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            id: 0,
            title: "Menemukan Data Dengan Mudah",
            description:
              "Cari data dari Pemerintah Lampung timur dalam beberapa klik saja",
          },
          {
            id: 1,
            title: "Mendapatkan Data Dengan Cepat",
            description:
              "Nikmati proses akses data tanpa proses birokrasi panjang.",
          },
          {
            id: 2,
            title: "Data Akurat dan Muatkhir",
            description:
              "Dapatkan data lengkap dan terkini resmi dari Organisasi Perangkat Daerah terkait.",
          },
        ].map((item) => (
          <div
            key={`_${item.id}`}
            className={`bg-white shadow-md p-3 w-full flex flex-col gap-2`}
          >
            <div>
              <WavesIcon className="mb-2" />
              <h3 className="text-h2 text-gray-800 mb-2">{item.title}</h3>
            </div>
            <div className="flex flex-colgap-2">
              <p className="text-sm text-gray-600 mb-4">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
