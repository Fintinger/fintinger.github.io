(()=>{var a=document.querySelector(".loading-page");window.onload=function(){setTimeout(e=>{a.style.display="none"},60)};var t=document.getElementById("goTop"),l=document.querySelector("main.main");t.onclick=i;l.addEventListener("scroll",function(e){l.scrollTop>1e3?t.style.display="block":t.style.display="none"});function i(){let e=l.scrollTop,n=0,o;clearInterval(o),o=setInterval(function(){e+=(n-e)*.2,l.scrollTop=e,n===Math.round(e)&&clearInterval(o)},20)}})();
