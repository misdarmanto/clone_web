import { useState } from "react";
import Button from "../components/buttons/Button";
import Pagination from "../components/pagination/Pagination";
import type { TableColumn } from "../components/table/Table";
import Table from "../components/table/Table";
import { InputField } from "../components/input/InputField";
import { SearchableDropdown } from "../components/dropdown/SearchAbleDropdown";

export default function SectoralView() {
  interface TableData {
    no: number;
    kodeDssd: string;
    uraiDssd: string;
    satuan: string;
    "2022": number;
    "2023": number;
    "2024": number;
  }

  const allData: TableData[] = [
    {
      no: 1,
      kodeDssd: "1.04.000001",
      uraiDssd: "Anggota Fasilitator",
      satuan: "Orang",
      "2022": 0,
      "2023": 0,
      "2024": 0,
    },
    {
      no: 2,
      kodeDssd: "1.04.000002",
      uraiDssd: "Anggota Tim Pendamping",
      satuan: "Orang",
      "2022": 0,
      "2023": 0,
      "2024": 0,
    },
    {
      no: 3,
      kodeDssd: "1.04.000003",
      uraiDssd: "Anggota Tim Satgas",
      satuan: "Orang",
      "2022": 0,
      "2023": 0,
      "2024": 0,
    },
    {
      no: 4,
      kodeDssd: "2.11.000001",
      uraiDssd:
        "Audit lingkungan hidup yang diterbitkan oleh kab/kota pada n-1",
      satuan: "Laporan",
      "2022": 0,
      "2023": 0,
      "2024": 0,
    },
    {
      no: 5,
      kodeDssd: "1.04.000004",
      uraiDssd: "Backlog Kepemilikan Rumah",
      satuan: "Unit Rumah",
      "2022": 0,
      "2023": 0,
      "2024": 0,
    },
  ];

  const columns: TableColumn<TableData>[] = [
    { key: "no", title: "No" },
    { key: "kodeDssd", title: "Kode DSSD" },
    { key: "uraiDssd", title: "Uraian DSSD" },
    { key: "satuan", title: "Satuan" },
    { key: "2022", title: "2022" },
    { key: "2023", title: "2023" },
    { key: "2024", title: "2024" },
  ];

  const opdList = [
    { value: "pendidikan", label: "Dinas Pendidikan dan Kebudayaan" },
    {
      value: "lingkungan",
      label:
        "Dinas Lingkungan Hidup, Perumahan, Kawasan Permukiman, dan Pertanahan",
    },
    {
      value: "pu",
      label: "Dinas Pekerjaan Umum dan Penataan Ruang",
    },
    { value: "kesehatan", label: "Dinas Kesehatan" },
    { value: "perhubungan", label: "Dinas Perhubungan" },
    { value: "polpp", label: "Satuan Polisi Pamong Praja" },
  ];

  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(allData.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const paginatedData = allData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <h2 className="text-h2 text-orange-300 mb-4">
        Data Sektoral Berdasarkan OPD
      </h2>
      <div className="mb-6 w-full border border-gray-300 border-1 rounded-md bg-white p-5">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="col-span-2">
            <label className="block font-medium mb-1">Perangkat Daerah</label>
            <SearchableDropdown
              options={opdList}
              onSelect={(val) => console.log("Selected:", val)}
            />
          </div>
          <InputField
            label="Dari Tahun"
            type="number"
            placeholder="Dari Tahun.."
          />
          <InputField
            label="Sampai Tahun"
            type="number"
            placeholder="Sampai Tahun..."
          />

          <div className="flex items-end justify-center">
            <Button>Tampilkan</Button>
          </div>
        </div>
      </div>

      <div className="p-5 border border-gray-300 border-1 rounded-md">
        <Table data={paginatedData} columns={columns} loading={false} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPrev={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
          onNext={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))
          }
        />
      </div>
    </div>
  );
}
