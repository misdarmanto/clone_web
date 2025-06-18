import { useCallback, useEffect, useState } from "react";
import Button from "../components/buttons/Button";
import Table, { type TableColumn } from "../components/table/Table";
import { InputField } from "../components/input/InputField";
import SearchableDropdown from "../components/dropdown/SearchableDropdown";
import { useHttp } from "../hooks/http";
import type {
  IDataSectoralListByOpd,
  IDropdownOption,
  ISectoralDataBerandaResponse,
} from "../types/sectoral.interface";
import DropdownSearch from "../components/dropdown/SearchableDropdown";

interface ITableData {
  no: number;
  kodeDssd: string;
  uraiDssd: string;
  satuan: string;
  "2022": number;
  "2023": number;
  "2024": number;
}

// ====== Dummy Table Data ======
const DUMMY_TABLE_DATA: ITableData[] = [
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
];

// ====== Columns ======
const TABLE_COLUMNS: TableColumn<ITableData>[] = [
  { key: "no", title: "No" },
  { key: "kodeDssd", title: "Kode DSSD" },
  { key: "uraiDssd", title: "Uraian DSSD" },
  { key: "satuan", title: "Satuan" },
  { key: "2022", title: "2022" },
  { key: "2023", title: "2023" },
  { key: "2024", title: "2024" },
];

export default function SectoralView() {
  const { handleGetRequest } = useHttp();
  const [dropdownOptions, setDropdownOptions] = useState<IDropdownOption[]>([]);
  const [dropdownSelected, setDropdownSelected] = useState("");
  const [loading, setLoading] = useState(false);
  const [tableData, setTableData] = useState<ITableData[]>([]);

  const fetchTableData = async () => {
    try {
      setLoading(true);
      const response = (await handleGetRequest({
        path: "/data-sektoral/list-by-opd?id_user_opd=3&dari_tahun=2000&sampai_tahun=2025'",
      })) as IDataSectoralListByOpd[];

      console.log(response);
      if (response) {
        const formattedTableData: ITableData[] = response.map((item) => ({
          no: item.id,
          kodeDssd: item.kode_dssd,
          uraiDssd: item.uraian_dssd,
          satuan: item.satuan,
          "2022":
            (Array.isArray(item.input) &&
              item.input.find((value) => value.tahun === 2022)?.jumlah) ||
            0,
          "2023":
            (Array.isArray(item.input) &&
              item.input.find((value) => value.tahun === 2023)?.jumlah) ||
            0,
          "2024":
            (Array.isArray(item.input) &&
              item.input.find((value) => value.tahun === 2024)?.jumlah) ||
            0,
        }));
        setTableData(formattedTableData);
      }
    } catch (error) {
      console.error("Failed to fetch dropdown:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchDropdownOptions = useCallback(async () => {
    try {
      setLoading(true);
      const response = (await handleGetRequest({
        path: "/data-sektoral/beranda",
      })) as ISectoralDataBerandaResponse;

      if (response?.data_sektoral) {
        const formattedOptions = response.data_sektoral.map((item) => ({
          label: item.nama_opd,
          value: item.uraian_dssd,
        }));
        setDropdownOptions(formattedOptions);
      }
    } catch (error) {
      console.error("Failed to fetch dropdown:", error);
    } finally {
      setLoading(false);
    }
  }, [handleGetRequest]);

  useEffect(() => {
    fetchTableData();
    fetchDropdownOptions();
  }, []);

  return (
    <div>
      <h2 className="text-h2 text-orange-300 mb-4">
        Data Sektoral Berdasarkan OPD
      </h2>

      <div className="mb-6 w-full border border-gray-300 rounded-md bg-white p-5">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="col-span-2">
            <label className="block font-medium mb-1">Perangkat Daerah</label>
            <DropdownSearch
              options={dropdownOptions}
              value={dropdownSelected}
              onChange={(val) => setDropdownSelected(val)}
            />
          </div>

          <InputField
            label="Dari Tahun"
            type="number"
            placeholder="Dari Tahun..."
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

      <div className="p-5 border border-gray-300 rounded-md">
        <Table data={tableData} columns={TABLE_COLUMNS} loading={loading} />
      </div>
    </div>
  );
}
