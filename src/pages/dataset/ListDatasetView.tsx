import { InputField } from "../../components/input/InputField";
import emptyIcon from "../../assets/empty.webp";
import Pagination from "../../components/pagination/Pagination";
import { CalendarDays, Clock, Building2 } from "lucide-react";
import folderIcon from "../../assets/folder.webp";
import { useNavigate } from "react-router-dom";
import { useHttp } from "../../hooks/http";
import { useCallback, useEffect, useState } from "react";
import type { IOpd } from "../../types/opd.interface";
import type { IDataset } from "../../types/dataset.interface";
import { convertTime } from "../../utils/convertTime";

const dataSetProdusen = [
  { title: "Sarana & Infrastruktur", total: 0 },
  { title: "Ekonomi & Pembangunan", total: 0 },
  { title: "Sosial & Kesejahteraan Masyarakat", total: 0 },
  { title: "Kebijakan & Legislasi", total: 0 },
];

export default function ListDataSetView() {
  const navigation = useNavigate();
  const { handleGetRequest, handleGetPaginatedData } = useHttp();
  const [loading, setLoading] = useState(true);
  const [opdList, setOpdList] = useState<IOpd[]>([]);
  const [datasetList, setDatasetList] = useState<IDataset[]>([]);
  const [userOpdSelected, setUserOpdSelected] = useState<number>(0);

  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const fetchDropdownOptions = useCallback(async () => {
    try {
      const response = (await handleGetRequest({
        path: "/list-opd",
      })) as IOpd[];

      if (response && Array.isArray(response)) {
        setOpdList(response);
      }
    } catch (err) {
      console.error("Dropdown fetch error:", err);
    } finally {
      setLoading(false);
    }
  }, [handleGetRequest]);

  const fetchDataset = useCallback(async () => {
    try {
      const response = await handleGetPaginatedData({
        path: "/dataset",
        size: 10,
        filter: {
          id_user_opd: userOpdSelected,
        },
      });

      if (response && Array.isArray(response?.items)) {
        setDatasetList(response.items);
        setTotalPage(response.totalPage);
      }
    } catch (err) {
      console.error("Dropdown fetch error:", err);
    }
  }, [handleGetRequest, userOpdSelected]);

  const handleSelectUserOpd = (userOpdId: number) => {
    setUserOpdSelected(userOpdId);
  };

  useEffect(() => {
    fetchDropdownOptions();
    fetchDataset();
  }, []);

  useEffect(() => {
    fetchDataset();
  }, [userOpdSelected]);

  if (loading) return <div>...loading</div>;

  return (
    <div className="min-h-screen">
      <h2 className="text-h2 text-orange-300 mb-2">Dataset</h2>
      <p className="text-p mb-6">
        Temukan kumpulan data-data mentah berupa tabel yang bisa diolah lebih
        lanjut di sini. Open Data menyediakan akses ke beragam koleksi dataset
        dari seluruh Organisasi Perangkat Daerah di Lampung Timur.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-6 ">
        {/* Sidebar: Produsen Dataset */}
        <div className="lg:col-span-2 space-y-2  md:mr-5 mb-5 md:mb-0 ">
          <div className="h-[500px] p-5 mb-5 border rounded border-gray-300">
            <p className="text-h4 mb-2">Produsen Dataset</p>

            <InputField placeholder="Cari Produsen" fullWidth />
            <div className="h-96 overflow-y-scroll">
              {opdList.map((item, i) => (
                <button
                  key={`${i}-${item.id_opd}`}
                  className="w-full text-left px-3 py-2 border border-gray-200 rounded hover:bg-gray-200 text-sm"
                  onClick={() => handleSelectUserOpd(item.id_opd)}
                >
                  {item.nama_opd}
                </button>
              ))}
            </div>
          </div>
          <div className="p-5 border rounded border-gray-300">
            <p className="text-xl mb-2">Kategori Data Sektoral</p>
            {dataSetProdusen.map((item, i) => (
              <div className="flex justify-between items-center">
                <button
                  key={`${i}-${item}`}
                  className="w-full text-left text-blue-500 py-2 border border-gray-200 rounded hover:bg-gray-100 text-sm"
                >
                  {item.title}
                </button>
                <div className="bg-blue-500 w-5 h-5 rounded-full flex items-center justify-center">
                  <span className="text-sm text-white text-center">
                    {item.total}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content: List Dataset */}
        <div className="lg:col-span-4">
          <div className="p-5 border rounded border-gray-300">
            <p className="text-h4 mb-2">List Dataset</p>
            <InputField
              placeholder="Cari Dataset"
              label={""}
              fullWidth
              className="mb-2"
            />
            <div className="flex items-center justify-between gap-4 mb-2 flex-wrap">
              <p className="text-sm text-gray-500">
                {datasetList.length || 0} Dataset Ditemukan
              </p>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Urutkan :</span>
                <select className="p-2 border rounded text-sm">
                  <option>Abjad</option>
                  <option>Terbaru</option>
                  <option>Terlama</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              {datasetList.map((item, i) => (
                <div
                  key={`${i}-${item.id}`}
                  onClick={() => navigation(`detail/${item.id}`)}
                  className="border cursor-pointer border-gray-300 rounded-md shadow p-4 gap-2 w-full grid grid-cols-12 gap-5"
                >
                  <img
                    src={folderIcon}
                    alt="Empty box"
                    className="mx-auto w-20 col-span-2"
                  />

                  <div className="col-span-10">
                    <h1 className="font-extrabold mb-2">{item.uraian_dssd}</h1>
                    <p
                      dangerouslySetInnerHTML={{ __html: item.description }}
                      className="text-sm"
                    />
                    <div className="flex items-center gap-6 text-sm text-gray-500 mt-2">
                      <div className="flex items-center gap-1">
                        <Building2 size={16} />
                        <span className="text-xs font-bold">
                          {item.nama_opd}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CalendarDays size={16} />
                        <span className="text-xs font-bold">
                          {convertTime(item.modified)}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        <span className="text-xs font-bold">
                          1 hari yang lalu
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {Array.isArray(datasetList) && datasetList.length === 0 && (
                <div className="text-center py-20">
                  <img
                    src={emptyIcon}
                    alt="Empty box"
                    className="mx-auto mb-4 w-24"
                  />
                  <p className="text-lg font-semibold text-gray-600">
                    Dataset Tidak Ditemukan!
                  </p>
                </div>
              )}
            </div>

            {/* Pagination */}
            <Pagination
              currentPage={page}
              totalPages={totalPage}
              onPrev={() => setPage((prev) => Math.max(prev - 1, 1))}
              onNext={() => setPage((prev) => prev + 1)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
