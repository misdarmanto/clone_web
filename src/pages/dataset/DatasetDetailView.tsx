export default function DatasetDetailView() {
  const data = [
    { label: "Nama OPD", value: "Dinas Perindustrian dan Perdagangan" },
    {
      label: "Judul Dataset",
      value: "Data Pasar daerah di Kabupaten Lampung Timur",
    },
    {
      label: "Deskripsi",
      value: "Dokumen yang Pasar daerah di Kabupaten Lampung Timur",
    },
    { label: "Jenis Data", value: "Data Teknis" },
    { label: "Kategori Data", value: "Ekonomi & Pembangunan" },
    { label: "Kode DSSD", value: "3.30.000001" },
    { label: "Uraian DSSD", value: "Agen dan Pasar Rakyat" },
    { label: "Satuan", value: "Unit" },
  ];

  return (
    <div>
      <h1 className="text-h2 font-bold mb-2 text-orange-300">Detail Dataset</h1>
      <p className="text-sm text-gray-600 mb-6">
        Temukan kumpulan data-data mentah berupa tabel yang bisa diolah lebih
        lanjut di sini. Open Data menyediakan akses ke beragam koleksi dataset
        dari seluruh Organisasi Perangkat Daerah di Lampung Timur.
      </p>

      <div className="bg-white border border-gray-300 p-5 rounded-md shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <tbody>
            {data.map((row, i) => (
              <tr key={i} className="even:bg-gray-50">
                <td className="w-1/6 px-6 py-3 font-bold text-gray-700">
                  {row.label}
                </td>
                <td className="px-6 py-3 text-gray-900">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
