import { useEffect, useState } from "react";
import type { TableColumn } from "../../components/table/Table";
import Table from "../../components/table/Table";
import { Link } from "react-router-dom";
import { useHttp } from "../../hooks/http";
import type { IPublication } from "../../types/publication.interface";
import { convertTime } from "../../utils/convertTime";

export default function ListPublicationView() {
  const { handleGetRequest } = useHttp();
  const [publicationList, setPublicationList] = useState<IPublication[]>();
  const [loading, setLoading] = useState(true);

  const handleGetPublication = async () => {
    try {
      const result = (await handleGetRequest({
        path: "/buku-digital",
      })) as IPublication[];
      setPublicationList(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetPublication();
  }, []);

  const columns: TableColumn<IPublication>[] = [
    {
      key: "id_buku_digital",
      title: "No",
      render: (row) => {
        return <strong>{row.index + 1}</strong>;
      },
    },
    {
      key: "buku",
      title: "Judul Publikasi",
      render: (row) => {
        return (
          <Link to={`/publications/detail/${row.buku_slug}`}>
            <strong className="text-blue-500">{row.buku}</strong>
          </Link>
        );
      },
    },
    { key: "nama_opd", title: "Perangkat Daerah" },
    { key: "tahun", title: "Tahun" },
    {
      key: "created_at",
      title: "Dibuat Pada",
      render: (row) => {
        return <strong>{convertTime(row.created_at)}</strong>;
      },
    },
  ];

  return (
    <div>
      <h2 className="text-h2 text-orange-300 mb-4">Data Publikasi</h2>

      <div className="p-5 border border-gray-300 border-1 rounded-md">
        <Table
          data={publicationList ?? []}
          columns={columns}
          loading={loading}
        />
      </div>
    </div>
  );
}
