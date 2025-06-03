import heroImage from "../assets/hero.png";
import cardImage from "../assets/card-image.png";
import whyMeImage from "../assets/whyme.png";
import Button from "../components/buttons/Button";

export default function HomeView() {
  return (
    <div className="relative min-h-screen bg-gray-100 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-teal-50 z-0">
        <div className="absolute top-0 left-0 w-full h-48 md:h-64">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full h-full"
          >
            <path
              fill="#e6f7ff"
              fillOpacity="0.7"
              d="M0,96L80,106.7C160,117,320,139,480,149.3C640,160,800,160,960,138.7C1120,117,1280,75,1360,53.3L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            ></path>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-48 md:h-64 transform rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full h-full"
          >
            <path
              fill="#e6f7ff"
              fillOpacity="0.5"
              d="M0,96L80,106.7C160,117,320,139,480,149.3C640,160,800,160,960,138.7C1120,117,1280,75,1360,53.3L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            ></path>
          </svg>
        </div>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 py-12 md:py-24">
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <p className="text-gray-400 text-md mb-2 font-bold">
            PORTAL SATU DATA LAMPUNG TIMUR
          </p>
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-indigo-700">Akses Data</span>
            <br />
            <span className="text-red-600">Dalam Satu Portal</span>
          </h1>
          <p className="text-gray-600 mb-8">
            Dalam satu sentuhan, dunia data terbuka lebar.
            <br />
            Mari temukan apa yang akan anda cari.
          </p>
          <div className="flex space-x-4">
            <Button>CARI DATA</Button>
            <Button variant="outlined">LIHAT DATASET</Button>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <img
            src={heroImage}
            alt="Data Portal Illustration"
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 pb-20 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Dataset",
            desc: "Kumpulan data yang diatur dalam format terstruktur dan tersedia di Portal Satu Data Indonesia.",
            count: 228,
          },
          {
            title: "Statistik Sektoral",
            desc: "Data statistik yang digunakan untuk memenuhi kebutuhan instansi pemerintah tertentu.",
            count: 1332,
          },
          {
            title: "Urusan",
            desc: "Kebijakan tata kelola data pemerintah yang bertujuan untuk menghasilkan data berkualitas dan mudah diakses.",
            count: 50,
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-sm p-8 flex flex-col justify-between"
          >
            <div className="flex justify-center mb-4 rounded-xl">
              <img src={cardImage} alt="card image" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold">
                {item.count.toLocaleString()}
              </span>
              <button className="text-sm font-semibold text-white bg-black rounded px-4 py-2 hover:bg-gray-800 transition">
                Lihat Data →
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Mengapa Menggunakan <br className="hidden md:block" />
            Satu Data Lamtim?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Satu Data adalah sebuah inisiatif pemerintah Indonesia untuk
            mendorong pengambilan kebijakan berdasarkan data. Untuk mewujudkan
            hal tersebut, maka diperlukan pemenuhan atas data pemerintah yang
            akurat, terbuka, dan interoperable.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src={whyMeImage}
            alt="Mengapa Satu Data"
            className="w-full max-w-md md:max-w-lg h-auto"
          />
        </div>
      </div>
    </div>
  );
}
