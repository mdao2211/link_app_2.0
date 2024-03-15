"use server";

import { signOut } from "@/auth";
export async function handleSignOut() {
  //todo co logout jwt
  await signOut({ redirectTo: "/auth/login" });

  // ...
}
