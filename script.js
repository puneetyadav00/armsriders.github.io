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
