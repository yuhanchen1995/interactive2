 document.querySelector('.alphabet-button').onclick = function () {
        location.href = "quote.html";
    };
document.querySelector('.name-button').onclick = function () {
        location.href = "name.html";
    };
document.querySelector('.quote-button').onclick = function () {
        location.href = "alphabet.html";
    };

let quotebutton=document.querySelector('.quote-button')
let namebutton=document.querySelector('.name-button')
let alphabetbutton =document.querySelector('.alphabet-button')

quotebutton.addEventListener('mouseenter',function(){
  quotebutton.classList.add('widthincrease')
});

quotebutton.addEventListener('mouseleave',function(){
  quotebutton.classList.remove('widthincrease')
});

namebutton.addEventListener('mouseenter',function(){
  namebutton.classList.add('widthincrease1')
});

namebutton.addEventListener('mouseleave',function(){
namebutton.classList.remove('widthincrease1')
});

alphabetbutton.addEventListener('mouseenter',function(){
alphabetbutton.classList.add('widthincrease2')
});

alphabetbutton.addEventListener('mouseleave',function(){
alphabetbutton.classList.remove('widthincrease2')
});