import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormData } from "../schema/loginSchema";
import Button from "../components/buttons/Button";
import { Eye, EyeOff } from "lucide-react";

export default function LoginView() {
  const [showPassword, setShowPassword] = useState(false);

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
        <h2 className="text-center text-lg font-semibold mb-2">
          Selamat Datang!
        </h2>
        <h1 className="text-center text-h2 mb-1">SISTEM SATU DATA</h1>
        <p className="text-center text-gray-600 mb-8">
          Masukkan Kredensial Dibawah Ini
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
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password")}
                placeholder="Enter password"
                className={`w-full border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded-md p-2 pr-10 focus:outline-none focus:ring-2 ${
                  errors.password ? "focus:ring-red-400" : "focus:ring-blue-400"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <Button fullWidth>Log In Sekarang</Button>
        </form>
      </div>

      <div className="absolute bottom-4 text-center w-full text-sm text-gray-600">
        <p>Copyright © 2025 All rights reserved</p>
        <p>Dinas Komunikasi Dan Informatika Lampung Timur</p>
      </div>
    </div>
  );
}
