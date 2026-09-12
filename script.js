const words=["software","websites","interfaces","solutions"];
let wordIndex=0;
const word=document.querySelector(".rotating-word");
setInterval(()=>{word.style.opacity=0;setTimeout(()=>{wordIndex=(wordIndex+1)%words.length;word.textContent=words[wordIndex];word.style.opacity=1},220)},2600);

const glow=document.querySelector(".cursor-glow");
window.addEventListener("pointermove",e=>{glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px"});

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const filters=document.querySelectorAll(".filter");
const projects=document.querySelectorAll(".project");
filters.forEach(btn=>btn.addEventListener("click",()=>{
  filters.forEach(b=>b.classList.remove("active"));btn.classList.add("active");
  const f=btn.dataset.filter;
  projects.forEach(p=>{p.style.display=(f==="all"||p.dataset.category===f)?"grid":"none"});
}));

const menuBtn=document.querySelector(".menu-btn"), navLinks=document.querySelector(".nav-links");
menuBtn.addEventListener("click",()=>navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("open")));

const topBtn=document.querySelector(".top-btn");
window.addEventListener("scroll",()=>topBtn.classList.toggle("show",window.scrollY>600));
topBtn.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));

document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",e=>{
  const target=document.querySelector(a.getAttribute("href"));
  if(target){e.preventDefault();target.scrollIntoView({behavior:"smooth"})}
}));

// Small safety net for the resume button until the real PDF is added.
document.querySelector('a[download]').addEventListener("click",e=>{
  if(!e.currentTarget.getAttribute("href")) e.preventDefault();
});