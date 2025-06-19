import { InputField } from "../../components/input/InputField";
import emptyIcon from "../../assets/empty.webp";
import Pagination from "../../components/pagination/Pagination";
import { CalendarDays, Clock, Building2 } from "lucide-react";
import folderIcon from "../../assets/folder.webp";
import { useNavigate } from "react-router-dom";

const dataSetProdusen = [
  "Kecamatan Purbolinggo",
  "Puskesmas Trimulyo",
  "Puskesmas Adirejo",
  "Kecamatan Marga Tiga",
  "Badan Pendapatan Daerah",
  "Puskesmas Jabung",
  "Puskesmas Labuhan Maringgai",
  "Puskesmas Raman Utara",
];

const dataSet = [1, 2, 3];

export default function ListDataSetView() {
  const navigation = useNavigate();

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
        <div className="lg:col-span-2 space-y-2  sm:mr-5 mb-5 sm:mb-0 ">
          <div className="h-[500px] p-5 mb-5 border rounded border-gray-300">
            <p className="text-h4 mb-2">Produsen Dataset</p>

            <InputField placeholder="Cari Produsen" fullWidth />
            <div className="h-96 overflow-y-scroll">
              {dataSetProdusen.map((name, i) => (
                <button
                  key={i}
                  className="w-full text-left px-3 py-2 border border-gray-200 rounded hover:bg-gray-100 text-sm"
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
          <div className="p-5 border rounded border-gray-300">
            <p className="text-xl mb-2">Kategori Data Sektoral</p>
            {dataSetProdusen.map((name, i) => (
              <button
                key={i}
                className="w-full text-left text-blue-500 px-3 py-2 border border-gray-200 rounded hover:bg-gray-100 text-sm"
              >
                {name}
              </button>
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
                {dataSet.length || 0} Dataset Ditemukan
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
              {dataSet.map((_) => (
                <div
                  key={_}
                  onClick={() => navigation(`detail/${_}`)}
                  className="border cursor-pointer border-gray-300 rounded-md shadow p-4 flex flex-col gap-2 w-full"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={folderIcon}
                      alt="Empty box"
                      className="mx-auto w-20"
                    />

                    <div>
                      <h2 className="font-semibold text-sm">
                        Anak Telantar yang mendapat permakanan sesuai dengan
                        Standar Gizi Minimal
                      </h2>
                      <p className="text-sm text-gray-600">11 orang.</p>
                      <div className="flex items-center gap-6 text-sm text-gray-500 mt-2">
                        <div className="flex items-center gap-1">
                          <Building2 size={16} />
                          <span>Dinas Sosial</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <CalendarDays size={16} />
                          <span>10-12-2024</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={16} />
                          <span>1 hari yang lalu</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {Array.isArray(dataSet) && dataSet.length < 0 && (
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
              currentPage={0}
              totalPages={0}
              onPrev={function (): void {
                throw new Error("Function not implemented.");
              }}
              onNext={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
