export interface IOpd {
  id_opd: number;
  kode_main_opd: string;
  nama_opd: string;
  level: number;
  total_ref_sektoral: number;
}

export interface IOpdUrusan {
  kode_urusan: string;
  nama_urusan: string;
}
