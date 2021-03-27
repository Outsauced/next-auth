  export const getServerUrl = req => {
    const protocol = new URL(req.headers.host).protocol || "http";
    return `${protocol}://${req.headers.host}/api/auth`;
  };
  
  export const getClientUrl = () => {
    const protocol = new URL(window.location.host).protocol || "http";
    return `${protocol}://${window.location.host}/api/auth`;
  };
  