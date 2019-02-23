
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
let letters =document.querySelectorAll('.letter')
let crossbar222s = document.querySelectorAll('.crossbar222')

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

for(let i = 0; i < letters.length; i++){
letters[i].addEventListener('mouseenter',function(){
letters[i].classList.add('disappear');
 setTimeout(function(){
    letters[i].classList.remove('disappear')  
  },4000)
})
};