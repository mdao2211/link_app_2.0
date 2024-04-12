"use client";

import { CardWrapper } from "@/components/auth/card-wrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
// import {login} from "@/actions/login";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import React, { ChangeEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { apiCall } from "@/service/axios";

export const LoginForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
  });
  const notify = (text: any) => {
    toast.error(text, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const success_notification = (text: any) => {
    toast.success(text, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      // password: "",
    },
  });

  // const onSubmit = (values: z.infer<typeof LoginSchema>) => {
  //   startTransition(() => {
  //     login(values).then((data: { error: string; success: string }) => {
  //       if (data && data.error) {
  //         setError(data.error as string);
  //         if ("success" in data) {
  //           setSuccess(data.success as string);
  //           success_notification();
  //         }
  //       } else {
  //         router.push("/auth/user_page");
  //       }
  //     });
  //   });
  // };
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await apiCall(
        "POST",
        "http://localhost:8080/auth/login",
        data,
        { "Content-Type": "application/json" },
      );
      console.log(response, "response");
    } catch (error) {
      console.error("Error creating link:", error);
    }
    // finally {
    //   location.replace("/auth/user_page");
    // }
  };

  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account? Register here!"
      backButtonHref="/auth/register"
      showSocial
    >
      {/* onSubmit={form.handleSubmit(onSubmit)} */}
      <Form {...form}>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="manhdao@gmail.com"
                      type="email"
                      name="email"
                      required
                      onChange={handleChange}
                      value={data.email}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />

          <Button
            disabled={isPending}
            // onClick={success_notification}
            type="submit"
            className="w-full"
          >
            Login
          </Button>
          <ToastContainer />
        </form>
      </Form>
    </CardWrapper>
  );
};
