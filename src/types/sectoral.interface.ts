interface ISectoralDataBeranda {
  nama_opd: string;
  uraian_dssd: string;
  jumlah: number;
  satuan: string;
  jenis: number;
  kategori: number;
  jenis_string: string;
  kategori_string: string;
}

interface ISectoralStats {
  data_sektoral: number;
  dataset: number;
  urusan: number;
}

export interface ISectoralDataBerandaResponse {
  data_sektoral: ISectoralDataBeranda[];
  total: ISectoralStats;
}

export interface IDropdownOption {
  label: string;
  value: string | number;
}

export interface IDataSectoralListByOpdInput {
  id_opd: number;
  id_data_sektoral: number;
  tahun: number;
  jumlah: number;
}

export interface IDataSectoralListByOpd {
  id: number;
  kode_urusan: string;
  jenis: number;
  kategori: number;
  jenis_string: string;
  kategori_string: string;
  kode_dssd: string;
  uraian_dssd: string;
  satuan: string;
  dimensi: string;
  active: boolean;
  input: IDataSectoralListByOpdInput[];
}
