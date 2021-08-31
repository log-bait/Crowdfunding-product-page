const inputs = document.querySelectorAll(".radio");
const pledgezero = document.querySelector('.pledge0');
const pledgeone = document.querySelector('.pledge1');
const pledgetwo = document.querySelector('.pledge2');


inputs.forEach((input)=>{
input.addEventListener('click', ()=>{
    const result = input.value;
    const pledge = document.querySelector('#bamboo');
    const pledge2 = document.querySelector('#black-edition');
   if(result == "no-reward"){
    pledgezero.style.border = 'thin solid green';
    console.log('hi')

   }
   else{
    pledgezero.style.border = 'none';

   }
    if(result == "$25"){
        pledgeone.style.border = 'thin solid green';
        pledge.classList.remove('d-none');
    }
    else{
        pledge.classList.add('d-none');
        pledgeone.style.border= "none"
    }
    if(result=="$75"){
        pledgetwo.style.border = 'thin solid green';
pledge2.classList.remove('d-none');
    }
    else{
        pledge2.classList.add('d-none');
        pledgetwo.style.border = 'none';

    }
});
});

///humburger
const menu= document.querySelector('.hmenu');
const submenu = document.querySelector('.subnavbar');

menu.addEventListener('click', ()=>{
submenu.classList.toggle('d-none')
})