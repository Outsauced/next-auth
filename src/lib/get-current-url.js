export const getServerUrl = req => {
    const protocol = req.headers.host.includes(["http", "https"])
      ? new URL(req.headers.host).protocol
      : "http";
  
    return `${protocol}://${req.headers.host}/api/auth`;
  };
  
  export const getClientUrl = () => {
    const protocol = window.location.host.includes(["http", "https"])
      ? new URL(req.headers.host).protocol
      : "http";
  
    return `${protocol}://${window.location.host}/api/auth`;
  };
  