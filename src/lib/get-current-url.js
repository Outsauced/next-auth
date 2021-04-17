import logger from "./logger";

export const getServerUrl = req => {
  // Default to HTTPS if no protocol explictly specified
  const protocol = url.startsWith("http:") ? "http" : "https";

  console.log(
    "Running Serversssss >>>",
    req.headers.host,
    `${protocol}://${req.headers.host}/api/auth`
  );

  return `${protocol}://${req.headers.host}/api/auth`;
};

export const getClientUrl = () => {
  const protocol = url.startsWith("http:") ? "http" : "https";

  console.log("Running Client >>>>", `${window.location.origin}/api/auth`);
  return `${protocol}://${window.location.origin}/api/auth`;
};
