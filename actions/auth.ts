"use server";

import { signIn, signOut } from "@/auth";
export async function handleSignOut() {
  //todo co logout jwt
  await signOut({ redirectTo: "/auth/login" });

  // ...
}
export async function handleSignIn(token: string) {
  //todo co logout jwt
  console.log("credentials", {
    token: token,
  });

  await signIn("credentials", {
    token: token,
  });

  // ...
}
