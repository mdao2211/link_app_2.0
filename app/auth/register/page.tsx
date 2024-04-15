"use server";
import { RegisterForm } from "@/components/auth/register-form";

const RegisterPage = () => {
  return (
    <div className="flex h-full justify-center items-center ">
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
