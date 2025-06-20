interface IInput {
  id_opd: number;
  id_data_sektoral: number;
  tahun: number;
  jumlah: number;
}

export interface IUrusan {
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
  input: IInput[];
}
