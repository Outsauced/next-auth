  export const getServerUrl = req => {
    var protocol = req.headers.host.indexOf("https://")==0?"https":"http";
    return `${protocol}://${req.headers.host}/api/auth`;
  };
  
  export const getClientUrl = () => {
    var protocol = window.location.href.indexOf("https://")==0?"https":"http";
    return `${protocol}://${window.location.origin}/api/auth`;
  };
  