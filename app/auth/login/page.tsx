"use server";
import { LoginForm } from "@/components/auth/login-form";

const LoginPage = () => {
  return (
    <div className="flex h-full justify-center items-center ">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
