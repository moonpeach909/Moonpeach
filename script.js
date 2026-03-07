/* Prevent right-click and key shortcuts */
document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('keydown', e => {
  if(e.ctrlKey && ['s','c','x','u'].includes(e.key.toLowerCase())) e.preventDefault();
});
document.addEventListener('dragstart', e=>e.preventDefault());

/* Simple card hover animation (optional) */
const cards=document.querySelectorAll(".card");
cards.forEach(card=>{
  card.addEventListener("mouseover",()=>{card.style.transform="scale(1.05)";});
  card.addEventListener("mouseout",()=>{card.style.transform="scale(1)";});
});
