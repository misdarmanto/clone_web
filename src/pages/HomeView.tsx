import heroImage from "../assets/hero.png";

export default function HomeView() {
  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Curved background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-teal-50 z-0">
        <div className="w-full h-full" style={{ 
          backgroundImage: "url('data:image/svg+xml;charset=utf8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1440 320%22%3E%3Cpath fill=%22%23ffffff%22 fill-opacity=%221%22 d=%22M0,96L80,106.7C160,117,320,139,480,149.3C640,160,800,160,960,138.7C1120,117,1280,75,1360,53.3L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z%22%3E%3C/path%3E%3C/svg%3E')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "bottom"
        }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        {/* Left side - Text content */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <p className="text-gray-500 text-sm mb-2">PORTAL SATU DATA LAMPUNG TIMUR</p>
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-indigo-700">Akses Data</span><br />
            <span className="text-red-600">Dalam Satu Portal</span>
          </h1>
          <p className="text-gray-600 mb-8">Dalam satu sentuhan, dunia data terbuka lebar.<br />Mari temukan apa yang akan anda cari.</p>
          <div className="flex space-x-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md flex items-center">
              <span className="mr-2"></span> CARI DATA
            </button>
            <button className="border border-orange-400 text-orange-500 hover:bg-orange-50 px-6 py-2 rounded-md flex items-center">
              <span className="mr-2"></span> LIHAT DATASET
            </button>
          </div>
        </div>
        
        <div className="w-full md:w-1/2">
          <img src={heroImage} alt="Data Portal Illustration" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
}