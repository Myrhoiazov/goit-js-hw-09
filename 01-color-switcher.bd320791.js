const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let d=null;e.addEventListener("click",(function(){t.removeAttribute("disabled"),e.setAttribute("disabled",!0),clearInterval(d)})),t.addEventListener("click",(function(){d=setInterval((()=>document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`),1e3),t.setAttribute("disabled",!0),e.removeAttribute("disabled")})),e.setAttribute("disabled",!0);
//# sourceMappingURL=01-color-switcher.bd320791.js.map