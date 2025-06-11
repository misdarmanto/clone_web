export default function Footer() {
  return (
    <footer className="bg-[#f7f7f7] text-gray-600 text-sm mt-10">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col items-center text-center gap-2 md:flex-row md:justify-between md:text-left">
        <span className="text-gray-400 text-p">
          All rights Reserved ©{" "}
          <strong className="text-gray-700 text-p">
            Lamtim Open Data 2025
          </strong>
        </span>
        <span className="text-gray-400 text-right">
          Dinas Komunikasi, Informatika dan Statistik Kabupaten Lampung Timur
        </span>
      </div>
    </footer>
  );
}
