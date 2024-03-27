import * as Sentry from "@sentry/nextjs";

export function throwErrorSentry(
  error: string,
  tags: { [key: string]: string } = {}
) {
  //   Sentry.captureException(error, { extra });
  Sentry.withScope((scope) => {
    // tags
    Object.keys(tags).forEach((key) => {
      scope.setTag(key, tags[key]);
    });

    Sentry.captureException(new Error(error));
  });
  throw new Error(error);
}
