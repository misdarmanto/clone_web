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
import type { ISectoral, ISectoralTable } from "../types/sectoral.interface";
import { useSearchParams } from "react-router-dom";

const TABLE_COLUMNS: TableColumn<ISectoralTable>[] = [
  { key: "no", title: "No" },
  { key: "kodeDssd", title: "Kode DSSD" },
  { key: "uraiDssd", title: "Uraian DSSD" },
  { key: "satuan", title: "Satuan" },
  { key: "2022", title: "2022" },
  { key: "2023", title: "2023" },
  { key: "2024", title: "2024" },
];

export default function SectoralView() {
  const { handleGetRequest, handleGetPaginatedData } = useHttp();
  const [searchParams, setSearchParams] = useSearchParams();

  const [dropdownOptions, setDropdownOptions] = useState<
    DropdownSearchOption[]
  >([]);
  const [dropdownSelected, setDropdownSelected] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [tableData, setTableData] = useState<ISectoralTable[]>([]);
  const [filterByFirstYear, setFilterByFirstYear] = useState<number | null>(
    null
  );
  const [filterByEndYear, setFilterByEndYear] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const fetchDropdownOptions = useCallback(async () => {
    try {
      const response = (await handleGetRequest({
        path: "/list-opd",
      })) as IOpd[];

      if (response && Array.isArray(response)) {
        const options = response.map((item) => ({
          label: item.nama_opd,
          value: item.id_opd,
        }));

        setDropdownOptions(options);
      }
    } catch (err) {
      console.error("Dropdown fetch error:", err);
    } finally {
      setLoading(false);
    }
  }, [handleGetRequest]);

  const fetchTableData = async ({
    userIdOpd,
    startYear,
    endYear,
  }: {
    userIdOpd: number;
    startYear: number;
    endYear: number;
  }) => {
    setLoading(true);
    try {
      const response = await handleGetPaginatedData({
        path: "/data-sektoral/list-by-opd",
        page: currentPage,
        filter: {
          id_user_opd: userIdOpd,
          dari_tahun: startYear,
          sampai_tahun: endYear,
        },
      });

      if (response && Array.isArray(response.items)) {
        const items = response.items as ISectoral[];
        const mappedData = items.map((item, index) => ({
          no: index + 1 + (currentPage - 1) * 10,
          kodeDssd: item.kode_dssd,
          uraiDssd: item.uraian_dssd,
          satuan: item.satuan,
          "2022": item.input?.find((v) => v.tahun === 2022)?.jumlah || 0,
          "2023": item.input?.find((v) => v.tahun === 2023)?.jumlah || 0,
          "2024": item.input?.find((v) => v.tahun === 2024)?.jumlah || 0,
        }));

        setTotalPage(response.totalPage);
        setTableData(mappedData);
      }
    } catch (err) {
      console.error("Table fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleFilter = () => {
    const newParams: Record<string, string> = {};

    if (dropdownSelected !== 0) {
      newParams.id_user_opd = dropdownSelected.toString();
    }

    if (filterByFirstYear !== null && filterByFirstYear > 0) {
      newParams.dari_tahun = filterByFirstYear.toString();
    }

    if (filterByEndYear !== null && filterByEndYear > 0) {
      newParams.sampai_tahun = filterByEndYear.toString();
    }

    setSearchParams(newParams);

    fetchTableData({
      userIdOpd: dropdownSelected,
      startYear: filterByFirstYear || 2000,
      endYear: filterByEndYear || 2025,
    });
  };

  useEffect(() => {
    fetchDropdownOptions();

    const idUserOpd = parseInt(searchParams.get("id_user_opd") || "0");
    const dariTahun = parseInt(searchParams.get("dari_tahun") || "0");
    const sampaiTahun = parseInt(searchParams.get("sampai_tahun") || "0");

    if (idUserOpd > 0) setDropdownSelected(idUserOpd);
    if (dariTahun > 0) setFilterByFirstYear(dariTahun);
    if (sampaiTahun > 0) setFilterByEndYear(sampaiTahun);

    fetchTableData({
      userIdOpd: idUserOpd || dropdownSelected,
      startYear: dariTahun || filterByFirstYear || 2000,
      endYear: sampaiTahun || filterByEndYear || 2025,
    });
  }, []);

  useEffect(() => {
    fetchTableData({
      userIdOpd: dropdownSelected,
      startYear: filterByFirstYear || 2000,
      endYear: filterByEndYear || 2025,
    });
  }, [currentPage]);

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
              onChange={(value) => setDropdownSelected(value)}
            />
          </div>

          <InputField
            label="Dari Tahun"
            type="number"
            placeholder="Dari Tahun..."
            value={filterByFirstYear?.toString() ?? ""}
            onChange={(e) =>
              setFilterByFirstYear(
                e.target.value ? Number(e.target.value) : null
              )
            }
          />
          <InputField
            label="Sampai Tahun"
            type="number"
            placeholder="Sampai Tahun..."
            value={filterByEndYear?.toString() ?? ""}
            onChange={(e) =>
              setFilterByEndYear(e.target.value ? Number(e.target.value) : null)
            }
          />

          <div className="flex items-end justify-center">
            <Button onClick={handleFilter}>Tampilkan</Button>
          </div>
        </div>
      </div>

      <div className="p-5 border border-gray-300 rounded-md">
        <Table data={tableData} columns={TABLE_COLUMNS} loading={loading} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPage}
          onPrev={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          onNext={() => setCurrentPage((prev) => prev + 1)}
        />
      </div>
    </div>
  );
}
