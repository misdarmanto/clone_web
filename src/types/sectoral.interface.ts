interface ISectoralData {
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

export interface ISectoralResponse {
  data_sektoral: ISectoralData[];
  total: ISectoralStats;
}

export interface IDropdownOption {
  label: string;
  value: string;
}
