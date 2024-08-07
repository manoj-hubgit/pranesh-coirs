const afterSubmit = document.querySelector('button');
let hamburger =document.querySelector('.hamBurger');
let sidebarOpenClose=document.getElementById('sidebar');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting)
    {
      entry.target.classList.add('show');
    }
    else{
      entry.target.classList.remove('show');
    }
  });
});
const hiddenElements=document.querySelectorAll('.uses');
hiddenElements.forEach((el) => observer.observe(el));

function afterclickeffort(){
    afterSubmit.textContent='SUBMITTED';
}

afterSubmit.addEventListener('click',afterclickeffort)

let nonething=1;
function opensidebar(){
    if(nonething==1){
        sidebarOpenClose.style.display='block';
    nonething=2;
    }
  else{
    sidebarOpenClose.style.display='none';
    nonething=1;
  }
}
hamburger.addEventListener('click',opensidebar)

function clickeventclosesidebar(){
    sidebarOpenClose.style.display='none';
    nonething=1;
}

sidebarOpenClose.addEventListener('click',clickeventclosesidebar)


// const enqForm=document.getElementById('enq-form')
// enqForm.addEventListener('submit', e => {
//   e.preventDefault();
  
//     fetch('https://script.google.com/macros/s/AKfycbwRMnPQWa2LFVqbq7tn7M_Sggg3sitqGk9u32GIMqJKyuxAEOnT13PBlIlZVqRb5dQKwA/exec', { method: 'POST', body: new FormData(enqForm) })
//       .then(response => {
//         console.log('success');
        
//       })
//       .catch(error => {
//         console.error('Error!', error.message)
       
//       })
//   } 
//   )