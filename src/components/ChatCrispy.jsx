import React, { useEffect } from "react";

const ChatCrispy = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = `
      window.$crisp=[];
      window.CRISP_WEBSITE_ID="819e3a1a-474d-4bb4-837b-b406bf19f4e7";
      (function(){
        var d=document;
        var s=d.createElement("script");
        s.src="https://client.crisp.chat/l.js";
        s.async=1;
        d.getElementsByTagName("head")[0].appendChild(s);
      })();
    `;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default ChatCrispy;
