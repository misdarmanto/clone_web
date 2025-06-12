import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { InputField } from "../components/input/InputField";
import { type LoginFormData, loginSchema } from "../schema/loginSchema";
import Button from "../components/buttons/Button";

export default function ContactView() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log("Login data:", data);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-h2 text-orange-300 mb-4">Kontak</h2>
          <p className="text-lg text-gray-600 mb-10">
            Informasi lebih lanjut dapat menghubungi melalui informasi kontak di
            bawah ini.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg">
            <h2 className="text-h4 text-orange-500 mb-6">Informasi Kontak</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-gray-700 font-medium">
                  Satu Data Lampung Timur
                </h3>
                <p className="text-gray-600">
                  Satu Data adalah sebuah inisiatif pemerintah Indonesia untuk
                  mendorong pengambilan kebijakan berbasis data. Untuk
                  mewujudkan hal tersebut, diperlukkan pemenunhan atas data
                  pemerintah yang akurat, terbuka, dan interoperable.
                </p>
              </div>
              <div>
                <p className="text-gray-600">
                  <strong>Alamat:</strong> Jl. Buai Anak Tuha No. 1, Sukadana,
                  Lampung Timur
                </p>
                <p className="text-gray-600">
                  <strong>No Telepon:</strong> +1 234 567 890
                </p>
                <p className="text-gray-600">
                  <strong>Email:</strong> info@example.com
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg">
            <h2 className="text-h4 text-orange-500 mb-6">
              Kirim Pesan Kepada Kami
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <InputField
                label={"Nama"}
                registration={register("nip")}
                error={errors.nip}
              />
              <InputField
                label={"Alamat Email"}
                registration={register("nip")}
                error={errors.nip}
              />
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Pesan
                </label>
                <textarea
                  id="message"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 h-32 resize-none"
                  placeholder="Tulis pesan Anda"
                />
              </div>
              <Button fullWidth> Kirim Pesan Sekarang</Button>
            </form>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg">
          <h2 className="text-h2 text-orange-500 mb-6 text-center">
            Lokasi Kami
          </h2>
          <div className="w-full h-64 bg-blue-200 rounded-lg flex items-center justify-center text-gray-600">
            [Interactive Map Placeholder]
          </div>
        </div>
      </div>
    </div>
  );
}
