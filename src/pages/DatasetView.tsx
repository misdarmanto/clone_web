import { InputField } from "../components/input/InputField";
import emptyIcon from "../assets/empty.webp";
import Pagination from "../components/pagination/Pagination";

export default function DataSetView() {
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
        <div className="lg:col-span-2 space-y-2 sm:mr-5 mb-5 sm:mb-0 p-5 border rounded border-gray-300">
          <p className="text-h4 mb-2">Produsen Dataset</p>

          <InputField placeholder="Cari Produsen" fullWidth />
          {[
            "Kecamatan Purbolinggo",
            "Puskesmas Trimulyo",
            "Puskesmas Adirejo",
            "Kecamatan Marga Tiga",
            "Badan Pendapatan Daerah",
            "Puskesmas Jabung",
            "Puskesmas Labuhan Maringgai",
            "Puskesmas Raman Utara",
          ].map((name, i) => (
            <button
              key={i}
              className="w-full text-left px-3 py-2 border border-gray-200 rounded hover:bg-gray-100 text-sm"
            >
              {name}
            </button>
          ))}
        </div>

        {/* Main Content: List Dataset */}
        <div className="lg:col-span-4 p-5 border rounded border-gray-300">
          <p className="text-h4 mb-2">List Dataset</p>
          <InputField
            placeholder="Cari Dataset"
            label={""}
            fullWidth
            className="mb-2"
          />
          <div className="flex items-center justify-between mb-5 gap-4 flex-wrap">
            <p className="text-sm text-gray-500 mb-6">228 Dataset Ditemukan</p>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Urutkan :</span>
              <select className="p-2 border rounded text-sm">
                <option>Abjad</option>
                <option>Terbaru</option>
                <option>Terlama</option>
              </select>
            </div>
          </div>

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
  );
}
