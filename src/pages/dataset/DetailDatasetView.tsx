import { useEffect, useState } from "react";
import { useHttp } from "../../hooks/http";
import type { IDatasetDetail } from "../../types/dataset.interface";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/buttons/Button";
import ReactApexChart from "react-apexcharts";
import Loading from "../../components/loading/Loading";

export default function DetailDatasetView() {
  const navigate = useNavigate();
  const { datasetId } = useParams();
  const [loading, setLoading] = useState(true);
  const { handleGetRequest } = useHttp();
  const [datasetDetail, setDatasetDetail] = useState<IDatasetDetail>();

  const fetchDatasetDetail = async () => {
    try {
      const response = (await handleGetRequest({
        path: `/dataset/detail/${datasetId}`,
      })) as IDatasetDetail;

      if (response) {
        setDatasetDetail(response);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDatasetDetail();
  }, []);

  if (loading) return <p>Loading...</p>;

  // Prepare chart data
  const series = [
    {
      name: "Jumlah",
      data: datasetDetail?.input?.map((item) => item.jumlah) || [],
    },
  ];

  const options: any = {
    chart: {
      type: "bar",
      height: 350,
    },
    colors: ["#ff5252"],

    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: datasetDetail?.input?.map((item) => item.tahun) || [],
    },
    yaxis: {
      title: {
        text: "Jumlah Data",
      },
    },
    tooltip: {
      y: {
        formatter(val: number) {
          return `${val}`;
        },
      },
    },
  };

  if (loading) return <Loading />;

  return (
    <div>
      <h1 className="text-h2 font-bold mb-2 text-orange-300">Detail Dataset</h1>
      <p className="text-sm text-gray-600 mb-6">
        Temukan kumpulan data-data mentah berupa tabel yang bisa diolah lebih
        lanjut di sini. Open Data menyediakan akses ke beragam koleksi dataset
        dari seluruh Organisasi Perangkat Daerah di Lampung Timur.
      </p>

      {/* Tabel Informasi Dataset */}
      <div className="bg-white border border-gray-300 p-5 rounded-md shadow-sm overflow-hidden mb-5">
        <table className="min-w-full divide-y divide-gray-200">
          <tbody>
            <tr className="even:bg-gray-50">
              <td className="w-1/6 px-6 py-3 font-bold text-gray-700">
                Nama OPD
              </td>
              <td className="px-6 py-3 text-gray-900">
                {datasetDetail?.nama_opd}
              </td>
            </tr>
            <tr className="even:bg-gray-50">
              <td className="w-1/6 px-6 py-3 font-bold text-gray-700">
                Judul Dataset
              </td>
              <td className="px-6 py-3 text-gray-900">
                {datasetDetail?.title}
              </td>
            </tr>
            <tr className="even:bg-gray-50">
              <td className="w-1/6 px-6 py-3 font-bold text-gray-700">
                Deskripsi
              </td>
              <td className="px-6 py-3 text-gray-900">
                {datasetDetail?.description}
              </td>
            </tr>
            <tr className="even:bg-gray-50">
              <td className="w-1/6 px-6 py-3 font-bold text-gray-700">
                Jenis Data
              </td>
              <td className="px-6 py-3 text-gray-900">
                {datasetDetail?.jenis_string}
              </td>
            </tr>
            <tr className="even:bg-gray-50">
              <td className="w-1/6 px-6 py-3 font-bold text-gray-700">
                Kategori Data
              </td>
              <td className="px-6 py-3 text-gray-900">
                {datasetDetail?.kategori_string}
              </td>
            </tr>
            <tr className="even:bg-gray-50">
              <td className="w-1/6 px-6 py-3 font-bold text-gray-700">
                Kode DSSD
              </td>
              <td className="px-6 py-3 text-gray-900">
                {datasetDetail?.kode_dssd}
              </td>
            </tr>
            <tr className="even:bg-gray-50">
              <td className="w-1/6 px-6 py-3 font-bold text-gray-700">
                Uraian DSSD
              </td>
              <td className="px-6 py-3 text-gray-900">
                {datasetDetail?.uraian_dssd}
              </td>
            </tr>
            <tr className="even:bg-gray-50">
              <td className="w-1/6 px-6 py-3 font-bold text-gray-700">
                Satuan
              </td>
              <td className="px-6 py-3 text-gray-900">
                {datasetDetail?.satuan}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Tabel Input Data Sektoral */}
      <div className="bg-white border border-gray-300 p-5 rounded-md shadow-sm overflow-hidden mb-5">
        <div className="flex justify-between items-center mb-5">
          <h4 className="text-h4">
            Jumlah Data Sektoral & Api Interoperabilitas
          </h4>

          <Button
            variant="outlined"
            color="secondary"
            size="small"
            onClick={() => {
              datasetDetail?.download_url
                ? navigate(datasetDetail.download_url)
                : "";
            }}
          >
            Download
          </Button>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Tahun
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Jumlah
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Method
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                API
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {Array.isArray(datasetDetail?.input) &&
              datasetDetail?.input.map((item, i) => (
                <tr className="even:bg-gray-50" key={`${i}-${item.kode_dssd}`}>
                  <td className="px-6 py-3 text-gray-900">{item.tahun}</td>
                  <td className="px-6 py-3 text-gray-900">{item.jumlah}</td>
                  <td className="px-6 py-3 text-gray-900">GET</td>
                  <td className="px-6 py-3 text-gray-900">
                    <Button size="small" onClick={() => navigate("api-docs")}>
                      Open API
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Bar Chart Section */}
      <div className="bg-white border border-gray-300 p-5 rounded-md shadow-sm overflow-hidden mb-5">
        <h4 className="text-h4 mb-4">Grafik Jumlah Data per Tahun</h4>
        <div className="w-full max-h-80">
          <ReactApexChart
            options={options}
            series={series}
            type="bar"
            height={350}
          />
        </div>
      </div>
    </div>
  );
}
