const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body");e.disabled=!0;let o=null;function d(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}t.addEventListener("click",(function(){n.style.backgroundColor=d(),t.disabled=!0,e.disabled=!1,o=setInterval((()=>{n.style.backgroundColor=d()}),1e3)})),e.addEventListener("click",(function(){t.disabled=!1,e.disabled=!0,clearInterval(o)}));
//# sourceMappingURL=01-color-switcher.fdbccf61.js.map