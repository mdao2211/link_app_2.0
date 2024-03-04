"use server"
import * as z from "zod";

// import { signIn } from "@/auth";
import {LoginSchema} from "@/schemas"
import AuthError from "next-auth";
// import { getSession } from "next-auth/react";

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values);

    if(!validatedFields.success){
        return { error: "Invalid fields!"}
    }

    // const fetchClient = async (url: string | URL | Request, options: RequestInit | undefined) => {
    //     const session = await getSession();
      
    //     return fetch(url, {
    //       ...options,
    //       headers: {
    //         ...options?.headers,
    //         ...(session && { Authorization: `Bearer ${session.jwt}` }),
    //       },
    //     });
    //   };

    // try{
        // await authOptions("credentials",{
        //     email,
        //     redirectTo: DEFAULT_LOGIN_REDIRECT
        // })
    // } catch(error){
    //     if(error instanceof AuthError){
    //         switch (error.type){ 
    //             case "CredentialsSignin":
    //                 return { error: "Invalid credentials!"}
    //                 default:
    //                     return { error: "Something went wrong!"}
    //         }
    //     }

    //     throw error;
    // }
};
