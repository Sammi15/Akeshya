document.addEventListener("DOMContentLoaded",function(){const t=(e,n=!1)=>(e=e.trim(),n?[...document.querySelectorAll(e)]:document.querySelector(e));((e,n,l,r=!1)=>{let o=t(n,r);o&&(r&&Array.isArray(o)?o.forEach(s=>s.addEventListener(e,l)):o.addEventListener(e,l))})("submit","#contact-form",function(e){e.preventDefault();const n=t("#thank-you-overlay");n instanceof HTMLElement&&(n.style.display="flex")}),window.closeOverlay=function(e){e.preventDefault();const n=t("#thank-you-overlay");n instanceof HTMLElement&&(n.style.display="none")};const a=t("#thank-you-overlay");a instanceof HTMLElement&&(a.style.display="none")});