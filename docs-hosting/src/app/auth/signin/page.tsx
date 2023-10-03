"use client";

import { useEffect } from "react";
import { signIn } from "next-auth/react";

export default async function Page() {
  useEffect(() => {
    signIn("auth0");
  });
  return <></>;
}
