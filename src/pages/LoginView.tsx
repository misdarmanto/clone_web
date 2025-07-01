import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormData } from "../schema/loginSchema";
import Button from "../components/buttons/Button";
import { Eye, EyeOff } from "lucide-react";
import { InputField } from "../components/input/InputField";

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
      <div className="bg-white shadow-sm rounded-md p-8 w-full max-w-md">
        <h2 className="text-center text-h5 mb-2">Selamat Datang!</h2>
        <h1 className="text-center text-h2 mb-1">SISTEM SATU DATA</h1>
        <p className="text-center text-gray-600 mb-8">
          Masukkan Kredensial Dibawah Ini
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <InputField
            label={"NIP"}
            registration={register("nip")}
            error={errors.nip}
            fullWidth
          />

          <InputField
            label="Password"
            type={showPassword ? "text" : "password"}
            registration={{ ...register("password") }}
            placeholder="Enter password"
            error={errors.password}
            fullWidth
            endIcon={
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            }
          />

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
