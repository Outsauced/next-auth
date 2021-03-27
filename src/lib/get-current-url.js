  export const getServerUrl = req => {
    const protocol = new URL(req.headers.host).protocol || "http";
    return `${protocol}://${req.headers.host}/api/auth`;
  };
  
  export const getClientUrl = () => {
    return `${window.location.origin}/api/auth`;
  };
  