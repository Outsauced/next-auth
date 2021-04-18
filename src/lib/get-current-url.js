import logger from "./logger";

export const getServerUrl = req => {
  // Default to HTTPS if no protocol explictly specified
  const protocol = (req.headers.origin || req.headers.referer || "").startsWith(
    "http:"
  )
    ? "http"
    : "https";

  console.log(
    "Running Server >>>",
    `${protocol}://${req.headers.host}/api/auth`
  );

  return `${protocol}://${req.headers.host}/api/auth`;
};

export const getClientUrl = () => {
  return `${window.location.origin}/api/auth`;
};
