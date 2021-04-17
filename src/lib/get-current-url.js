import logger from "./logger";

export const getServerUrl = req => {
  if (req.headers.host.indexOf("http://")) {
    logger.warn("Https is required for signing in!");
  }

  var protocol =
    req.headers.host.indexOf("https://") == 0 ? "https://" : "http://";

  console.log(
    "Running Serversssss >>>",
    req.headers.host,
    `${protocol}${req.headers.host}/api/auth`
  );

  return `${protocol}${req.headers.host}/api/auth`;
};

export const getClientUrl = () => {
  console.log("Running Client >>>>", `${window.location.origin}/api/auth`);
  return `${window.location.origin}/api/auth`;
};
