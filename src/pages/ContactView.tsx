import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { InputField } from "../components/input/InputField";
import Button from "../components/buttons/Button";
import { contactSchema, type ContactFormData } from "../schema/contactSchema";

export default function ContactView() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Login data:", data);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-h2 text-orange-300 mb-4">Kontak</h2>
          <p className="text-lg text-gray-600 mb-10">
            Informasi lebih lanjut dapat menghubungi melalui informasi kontak di
            bawah ini.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="">
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

          <div className="">
            <h2 className="text-h4 text-orange-500 mb-6">
              Kirim Pesan Kepada Kami
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <InputField
                label={"Nama"}
                registration={register("name")}
                error={errors.name}
                fullWidth
              />
              <InputField
                label={"Alamat Email"}
                registration={register("email")}
                error={errors.email}
                fullWidth
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
                  {...register("textMessage")}
                  className={`w-full p-3 border rounded-md focus:outline-none focus:ring-1  h-32 resize-none  ${
                    errors.textMessage
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300 focus:ring-gray-400"
                  }`}
                  placeholder="Tulis pesan Anda"
                />
              </div>
              <Button fullWidth> Kirim Pesan Sekarang</Button>
            </form>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg">
          <h2 className="text-h2 text-orange-300 mb-6 text-center">
            Lokasi Kami
          </h2>
          <div className="w-full flex items-center justify-center rounded-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1017317.8202596318!2d105.08423355386957!3d-5.120178481490755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40edbc6c11ef3d%3A0x3039d80b220cfe0!2sKabupaten%20Lampung%20Timur%2C%20Lampung!5e0!3m2!1sid!2sid!4v1750315011315!5m2!1sid!2sid"
              width="100%"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
