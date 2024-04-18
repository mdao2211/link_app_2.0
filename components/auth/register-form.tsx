"use client";

import { CardWrapper } from "@/components/auth/card-wrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/schemas";
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
import { register } from "@/actions/register";
import { ChangeEvent, useState, useTransition } from "react";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { apiCall } from "@/service/axios";

export const RegisterForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  type Inputs = {
    name: string;
    email: string;
  };
  const [data, setData] = useState({
    email: "",
    name: "",
  });
  const form = useForm<Inputs>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const onSubmit = async (values: Inputs) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      register(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };
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
        "http://localhost:8080/auth/signin",
        data,
        { "Content-Type": "application/json" },
      );
      console.log(response, "response");
    } catch (error) {
      console.error("Error :", error);
    } finally {
      location.replace("/auth/login");
    }
  };
  return (
    <CardWrapper
      headerLabel="Create an account"
      backButtonLabel="Already have an account? Sign in now."
      backButtonHref="/auth/login"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4"></div>
        </form>
      </Form>
    </CardWrapper>
  );
};
