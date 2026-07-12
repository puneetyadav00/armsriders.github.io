// ARMS RIDERS V2

window.addEventListener("load", () => {

setTimeout(() => {

document.getElementById("loader").style.display = "none";

}, 3000);

});

// Smooth Fade Animation

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll("section").forEach(sec=>{

sec.style.opacity="0";
sec.style.transform="translateY(80px)";
sec.style.transition=".8s";

observer.observe(sec);

});

// Welcome Message

setTimeout(()=>{

alert("🔥 Welcome to ARMS RIDERS ESPORTS 🔥");

},3500);
const targetDate = new Date("December 31, 2026 23:59:59").getTime();

setInterval(()=>{

const now = new Date().getTime();

const distance = targetDate-now;

const days=Math.floor(distance/(1000*60*60*24));

const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes=Math.floor((distance%(1000*60*60))/(1000*60));

const seconds=Math.floor((distance%(1000*60))/1000);

const timer=document.getElementById("countdown");

if(timer){

timer.innerHTML=
"🏆 Next Championship Starts In<br>"+days+"d : "+hours+"h : "+minutes+"m : "+seconds+"s";

}

},1000);
