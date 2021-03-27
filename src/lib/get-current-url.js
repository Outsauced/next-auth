  export const getServerUrl = req => {
    var protocol = req.headers.host.indexOf("http://")==0?"http://":"";
    return `${protocol}://${req.headers.host}/api/auth`;
  };
  
  export const getClientUrl = () => {
    var protocol = window.location.href.indexOf("http://")==0?"http://":"";
    return `${protocol}${window.location.origin}/api/auth`;
  };
  