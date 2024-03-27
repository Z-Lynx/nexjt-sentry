// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

// Sentry.setTag("page", "global-error");
// Sentry.setTag("version", "1.0.0");
Sentry.init({
  dsn: "https://585caa77fed42e02675c8bda467478d4@o4506982498959360.ingest.us.sentry.io/4506982500597760",

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: true,
  defaultIntegrations: false,

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: process.env.NODE_ENV === 'development',
});
