/* Right-click / keyboard / drag protection */
document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('keydown', e => {
  if(e.ctrlKey && ['s','c','x','u'].includes(e.key.toLowerCase())) e.preventDefault();
});
document.addEventListener('dragstart', e=>e.preventDefault());

/* Portfolio Tabs */
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const target = btn.dataset.target;
    tabContents.forEach(c=>c.classList.remove('active'));
    document.getElementById(target).classList.add('active');
  });
});

/* Accordion */
const accBtns = document.querySelectorAll('.accordion-btn');
accBtns.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    btn.classList.toggle('active');
    const content = btn.nextElementSibling;
    content.style.display = content.style.display==='block'?'none':'block';
  });
});
