import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormData } from "../schema/loginSchema";
export default function LoginView() {
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
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded-md p-8 w-full max-w-md">
        <h2 className="text-center text-blue-600 text-lg font-semibold mb-2">
          Welcome Back !
        </h2>
        <h1 className="text-center text-2xl font-bold mb-1">
          SISTEM SATU DATA
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Masukkan Kredensial Dibawah Ini.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block font-medium">NIP</label>
            <input
              type="text"
              {...register("nip")}
              placeholder="Enter NIP"
              className={`w-full border ${
                errors.nip ? "border-red-500" : "border-gray-300"
              } rounded-md p-2 focus:outline-none focus:ring-2 ${
                errors.nip ? "focus:ring-red-400" : "focus:ring-blue-400"
              }`}
            />
            {errors.nip && (
              <p className="text-red-500 text-sm mt-1">{errors.nip.message}</p>
            )}
          </div>

          <div>
            <label className="block font-medium">Password</label>
            <input
              type="password"
              {...register("password")}
              placeholder="Enter password"
              className={`w-full border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-md p-2 focus:outline-none focus:ring-2 ${
                errors.password ? "focus:ring-red-400" : "focus:ring-blue-400"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md font-semibold"
          >
            Log In Sekarang
          </button>
        </form>
      </div>

      <div className="absolute bottom-4 text-center w-full text-sm text-gray-600">
        <p>Copyright © 2024 All rights reserved</p>
        <p>Dinas Komunikasi Dan Informatika Lampung Timur</p>
      </div>
    </div>
  );
}
