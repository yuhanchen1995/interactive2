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
  quotebutton.classList.add('widthincrease');
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

document.querySelector(".a .crossbar").style.animationDelay = "12s";
document.querySelector(".f .crossbar").style.animationDelay = "13s";
document.querySelector(".h .crossbar").style.animationDelay = "14s";
document.querySelector(".j .crossbar").style.animationDelay = "5s";
document.querySelector(".p .crossbar").style.animationDelay = "6s";
document.querySelector(".p .crossbar").style.animationDelay = "7s";
document.querySelector(".t .crossbar").style.animationDelay = "8s";
document.querySelector(".b .crossbar").style.animationDelay = "9s";
document.querySelector(".s .crossbar").style.animationDelay = "5s";
document.querySelector(".w .crossbar").style.animationDelay = "3s";
document.querySelector(".r .crossbar").style.animationDelay = "9s";
document.querySelector(".e .crossbar").style.animationDelay = "8s";
document.querySelector(".f .crossbar").style.animationDelay = "10s";
document.querySelector(".f .crossbar").style.animationDelay = "11s";
document.querySelector(".z .crossbar").style.animationDelay = "10s";
document.querySelector(".t .crossbar").style.animationDelay = "14s";
document.querySelector(".n .crossbar").style.animationDelay = "4s";
document.querySelector(".g .crossbar").style.animationDelay = "3s";
document.querySelector(".n2 .crossbar").style.animationDelay = "13s";
document.querySelector(".n3 .crossbar").style.animationDelay = "9s";
document.querySelector(".n4 .crossbar").style.animationDelay = "5s";
document.querySelector(".n5 .crossbar").style.animationDelay = "13s";
document.querySelector(".n6 .crossbar").style.animationDelay = "9s";
document.querySelector(".n7 .crossbar").style.animationDelay = "8s";
document.querySelector(".n8 .crossbar").style.animationDelay = "8s";
document.querySelector(".n9 .crossbar").style.animationDelay = "10s";