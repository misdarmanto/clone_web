import { Link } from "react-router-dom";

export default function NotfoundView() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-orange-50 px-4 text-center">
      <h1 className="text-7xl font-bold text-orange-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-orange-600 mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-600 mb-6">
        Maaf, halaman yang kamu cari tidak tersedia atau sudah dipindahkan
      </p>
      <Link
        to="/"
        className="inline-block bg-orange-500 text-white px-6 py-2 rounded-md shadow hover:bg-orange-600 transition"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
