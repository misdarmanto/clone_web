import Pagination from "../components/pagination/Pagination";
import type { TableColumn } from "../components/table/Table";
import Table from "../components/table/Table";

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

  const data: TableData[] = [
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
    {
      no: 6,
      kodeDssd: "1.04.000005",
      uraiDssd: "Backlog Kepenguhunian Rumah",
      satuan: "Unit Rumah",
      "2022": 0,
      "2023": 0,
      "2024": 0,
    },
    {
      no: 7,
      kodeDssd: "2.10.000002",
      uraiDssd: "Berita Acara Kesepakatan Bentuk Ganti Kerugian",
      satuan: "Berita Acara",
      "2022": 0,
      "2023": 0,
      "2024": 0,
    },
    {
      no: 8,
      kodeDssd: "2.10.000003",
      uraiDssd: "Berita Acara kesepakatan desain konsolidasi tanah",
      satuan: "Berita Acara",
      "2022": 0,
      "2023": 0,
      "2024": 0,
    },
    {
      no: 9,
      kodeDssd: "2.10.000004",
      uraiDssd: "Berita Acara kesepakatan rencana aksl",
      satuan: "Berita Acara",
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

  return (
    <div>
      <div className="p-5 border border-gray-300 border-1 rounded-md">
        <Table data={data} columns={columns} loading={false} />
        <Pagination />
      </div>
    </div>
  );
}
