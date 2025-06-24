import { useCallback, useEffect, useState } from "react";
import Button from "../components/buttons/Button";
import Table, { type TableColumn } from "../components/table/Table";
import { InputField } from "../components/input/InputField";
import DropdownSearch, {
  type DropdownSearchOption,
} from "../components/dropdown/SearchableDropdown";
import { useHttp } from "../hooks/http";
import type { IOpd } from "../types/opd.interface";
import Pagination from "../components/pagination/Pagination";
import type { ISectoral } from "../types/sectoral.interface";

interface ITableData {
  no: number;
  kodeDssd: string;
  uraiDssd: string;
  satuan: string;
  "2022": number;
  "2023": number;
  "2024": number;
}

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

  const [dropdownOptions, setDropdownOptions] = useState<
    DropdownSearchOption[]
  >([]);
  const [dropdownSelected, setDropdownSelected] = useState<number>(1);
  const [loading, setLoading] = useState(true);
  const [tableData, setTableData] = useState<ITableData[]>([]);
  const [filterByFirstYear, setFilterByFirstYear] = useState<number | null>(
    null
  );
  const [filterByEndYear, setFilterByEndYear] = useState<number | null>(null);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(20);

  const fetchDropdownOptions = useCallback(async () => {
    try {
      setLoading(true);
      const response = (await handleGetRequest({
        path: "/list-opd",
      })) as IOpd[];

      if (response && Array.isArray(response)) {
        const options = response.map((item) => ({
          label: item.nama_opd,
          value: item.id_opd,
        }));
        setDropdownOptions(options);
        setSize(20);
      }
    } catch (err) {
      console.error("Dropdown fetch error:", err);
    } finally {
      setLoading(false);
    }
  }, [handleGetRequest]);

  const fetchTableData = async () => {
    try {
      const params = new URLSearchParams();

      params.append("page", page.toString());
      params.append("per_page", size.toString());

      if (dropdownSelected) {
        params.append("id_user_opd", dropdownSelected.toString());
      }

      if (filterByFirstYear) {
        params.append("dari_tahun", filterByFirstYear.toString());
      }

      if (filterByEndYear) {
        params.append("sampai_tahun", filterByEndYear.toString());
      }

      const path = `/data-sektoral/list-by-opd?${params.toString()}`;

      const response = (await handleGetRequest({ path })) as ISectoral[];

      if (response) {
        const mappedData = response.map((item, index) => ({
          no: index + 1,
          kodeDssd: item.kode_dssd,
          uraiDssd: item.uraian_dssd,
          satuan: item.satuan,
          "2022": item.input?.find((v) => v.tahun === 2022)?.jumlah || 0,
          "2023": item.input?.find((v) => v.tahun === 2023)?.jumlah || 0,
          "2024": item.input?.find((v) => v.tahun === 2024)?.jumlah || 0,
        }));

        console.log(response);
        setTableData(mappedData);
      }
    } catch (err) {
      console.error("Table fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDropdownOptions();
  }, []);

  useEffect(() => {
    fetchTableData();
  }, [page]);

  return (
    <div>
      <h2 className="text-h2 text-orange-300 mb-4">
        Data Sektoral Berdasarkan OPD
      </h2>

      <div className="mb-6 w-full border border-gray-300 rounded-md bg-white p-5">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="col-span-2">
            <DropdownSearch
              label="Perangkat Daerah"
              options={dropdownOptions}
              value={dropdownSelected}
              onChange={setDropdownSelected}
            />
          </div>

          <InputField
            label="Dari Tahun"
            type="number"
            placeholder="Dari Tahun..."
            value={filterByFirstYear?.toString()}
            onChange={(e) => setFilterByFirstYear(Number(e.target.value))}
          />
          <InputField
            label="Sampai Tahun"
            type="number"
            placeholder="Sampai Tahun..."
            value={filterByEndYear?.toString()}
            onChange={(e) => setFilterByEndYear(Number(e.target.value))}
          />

          <div className="flex items-end justify-center">
            <Button onClick={fetchTableData}>Tampilkan</Button>
          </div>
        </div>
      </div>

      <div className="p-5 border border-gray-300 rounded-md">
        <Table data={tableData} columns={TABLE_COLUMNS} loading={loading} />
        <Pagination
          currentPage={page}
          totalPages={size}
          onPrev={() => setPage((prev) => Math.max(prev - 1, 1))}
          onNext={() => setPage((prev) => prev + 1)}
        />
      </div>
    </div>
  );
}
