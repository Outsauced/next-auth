import logger from "./logger";

export const getServerUrl = req => {
  // Default to HTTPS if no protocol explictly specified
  const protocol = req.protocol || "https";

  console.log(
    "Running Serversssss >>>",
    protocol + "://" + req.get("host") + req.originalUrl
  );

  return protocol + "://" + req.get("host") + req.originalUrl;
};

export const getClientUrl = () => {
  return window.location.href;
  // const protocol = window.location.protocol || "https";

  // console.log("Running Client >>>>", `${window.location.origin}/api/auth`);
  // return `${protocol}://${window.location.origin}/api/auth`;
};
