// import Card from "../components/card/Card";
// import organizationImage from "../assets/oragnization.webp";
// import Button from "../components/buttons/Button";

export default function OrganizationView() {
  return (
    <div>
      <h2 className="text-h2 text-orange-300 mb-4">Organisasi</h2>

      {/* <div>
        {["Semua", "Puskesmas", "Badan", "Bagian", "Dinas"].map((item) => (
          <Button variant="outlined">{item}</Button>
        ))}
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 pb-20 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Data Sectoral",
            total: 365,
            desc: "Dinas Pendidikan dan Kebudayaan",
          },
        ].map((item, index) => (
          <Card
            key={index}
            className="w-56 rounded-md border border-gray-300 p-5"
            header={
              <div>
                <div className="flex justify-center p-10 rounded-xl">
                  <img
                    src={organizationImage}
                    alt="card image"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-h5 text-orange-300 text-center">
                  {item.total}
                </h3>
                <h3 className="text-h5 text-orange-300 text-center">
                  {item.title}
                </h3>
              </div>
            }
            body={<p className="text-sm text-gray-600">{item.desc}</p>}
          />
        ))}
      </div> */}
    </div>
  );
}
