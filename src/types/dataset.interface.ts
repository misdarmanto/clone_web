export interface IDataset {
  id: number;
  uraian_dssd: string;
  description: string;
  modified: string;
  nama_opd: string;
}

interface InputData {
  kode_dssd: string;
  uraian_dssd: string;
  tahun: number;
  jumlah: number;
}

export interface IDatasetDetail {
  id: number;
  id_opd: number;
  title: string;
  description: string;
  nama_opd: string;
  kode_urusan: string;
  jenis: number;
  kategori: number;
  jenis_string: string;
  kategori_string: string;
  kode_dssd: string;
  uraian_dssd: string;
  satuan: string;
  dimensi: string;
  input: InputData[];
  download_url: string;
}
