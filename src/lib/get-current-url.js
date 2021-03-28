  export const getServerUrl = req => {
    var protocol = req.headers.host.indexOf("http://")==0?"http://":"https://";
    return `${protocol}${req.headers.host}/api/auth`;
  };
  
  export const getClientUrl = () => {
    return `${window.location.origin}/api/auth`;
  };
  