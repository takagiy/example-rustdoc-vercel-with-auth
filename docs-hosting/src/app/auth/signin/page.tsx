import { Suspense } from "react";
import { SignIn } from "./signin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
};

export default function Page() {
  return (
    <Suspense fallback={<p>loading…</p>}>
      <SignIn />
    </Suspense>
  );
}
