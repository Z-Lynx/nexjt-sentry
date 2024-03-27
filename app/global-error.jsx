"use client";

import * as Sentry from "@sentry/nextjs";
import Error from "next/error";
import { useEffect } from "react";
import ErrorCompontment from "./error";
export default function GlobalError({ error }) {
  useEffect(() => {
    // // add tag
    // Sentry.withScope((scope) => {
    //   scope.setTag("page", "global-error");
    //   scope.setTag("version", "1.0.1");
    //   Sentry.captureException(error);
    // });
  }, [error]);

  return (
    <html>
      <body>
        <ErrorCompontment />
      </body>
    </html>
  );
}
