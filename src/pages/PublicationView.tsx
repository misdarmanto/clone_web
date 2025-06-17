import { useState } from "react";
import Pagination from "../components/pagination/Pagination";
import type { TableColumn } from "../components/table/Table";
import Table from "../components/table/Table";
import { Link } from "react-router-dom";

export default function PublicationView() {
  interface TableData {
    no: number;
    judul: string;
    PerangkatDaerah: string;
    tahun: string;
    dibuatPada: string;
    aksi: string;
  }

  const allData: TableData[] = [
    {
      no: 1,
      judul:
        "Basis Data dan Profil Pendidikan Kab. Lampung Timur Tahun 2022/2023",
      PerangkatDaerah: "Dinas Komunikasi dan Informatika",
      tahun: "2025",
      dibuatPada: "21-08-2025",
      aksi: "lihat",
    },
    {
      no: 2,
      judul:
        "Basis Data dan Profil Pendidikan Kab. Lampung Timur Tahun 2022/2023",
      PerangkatDaerah: "Dinas Komunikasi dan Informatika",
      tahun: "2025",
      dibuatPada: "21-08-2025",
      aksi: "lihat",
    },
    {
      no: 3,
      judul:
        "Basis Data dan Profil Pendidikan Kab. Lampung Timur Tahun 2022/2023",
      PerangkatDaerah: "Dinas Komunikasi dan Informatika",
      tahun: "2025",
      dibuatPada: "21-08-2025",
      aksi: "lihat",
    },
  ];

  const columns: TableColumn<TableData>[] = [
    { key: "no", title: "No" },
    { key: "judul", title: "Judul Publikasi" },
    { key: "PerangkatDaerah", title: "Perangkat Daerah" },
    { key: "tahun", title: "Tahun" },
    { key: "dibuatPada", title: "Dibuat Pada" },
    {
      key: "aksi",
      title: "Aksi",
      render: (row) => (
        <Link to={`/detail/${row}`}>
          <strong>Lihat</strong>
        </Link>
      ),
    },
  ];

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(allData.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const paginatedData = allData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <h2 className="text-h2 text-orange-300 mb-4">Data Publikasi</h2>

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
