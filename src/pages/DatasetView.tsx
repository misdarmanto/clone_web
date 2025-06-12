export default function DataSetView() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-orange-400 mb-2">Dataset</h2>
      <p className="text-gray-600 mb-6">
        Temukan kumpulan data-data mentah berupa tabel yang bisa diolah lebih
        lanjut di sini. Open Data menyediakan akses ke beragam koleksi dataset
        dari seluruh Organisasi Perangkat Daerah di Lampung Timur.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar: Produsen Dataset */}
        <div className="lg:col-span-1 bg-white p-4 rounded shadow space-y-2">
          <h3 className="font-semibold mb-2">Produsen Dataset</h3>
          <input
            type="text"
            placeholder="Cari Produsen"
            className="w-full p-2 border rounded mb-3"
          />
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
              className="w-full text-left px-3 py-2 border rounded hover:bg-gray-100 text-sm"
            >
              {name}
            </button>
          ))}
        </div>

        {/* Main Content: List Dataset */}
        <div className="lg:col-span-3 bg-white p-4 rounded shadow">
          <div className="flex items-center justify-between mb-4 gap-4 flex-wrap">
            <input
              type="text"
              placeholder="Cari Dataset"
              className="flex-1 min-w-[200px] p-2 border rounded"
            />
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Urutkan :</span>
              <select className="p-2 border rounded text-sm">
                <option>Abjad</option>
              </select>
            </div>
          </div>

          <p className="text-sm text-gray-500 mb-6">228 Dataset Ditemukan</p>

          {/* Empty State */}
          <div className="text-center py-20">
            <img
              src="/empty-box.png"
              alt="Empty box"
              className="mx-auto mb-4 w-24"
            />
            <p className="text-lg font-semibold text-gray-600">
              Dataset Tidak Ditemukan!
            </p>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-6 text-sm text-gray-700">
            <button className="px-4 py-2 bg-indigo-200 text-indigo-800 rounded disabled:opacity-50">
              Previous
            </button>
            <span>Page 1 of 33</span>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
