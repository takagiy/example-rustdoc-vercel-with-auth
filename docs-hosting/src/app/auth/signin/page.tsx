"use client";

import { Suspense, useEffect } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

function SignIn() {
  const searchParams = useSearchParams();

  let callbackUrl = searchParams.get("callbackUrl") || "/";
  if (!callbackUrl.startsWith("/")) {
    callbackUrl = "/";
  }

  useEffect(() => {
    signIn("auth0", { callbackUrl });
  }, [callbackUrl]);

  return <></>;
}

export default function Page() {
  return (
    <Suspense fallback={<></>}>
      <SignIn />
    </Suspense>
  );
}
