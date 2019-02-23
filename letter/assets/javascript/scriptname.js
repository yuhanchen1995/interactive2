 document.querySelector('.alphabet-button').onclick = function () {
        location.href = "quote.html";
    };
document.querySelector('.name-button').onclick = function () {
        location.href = "name.html";
    };
document.querySelector('.quote-button').onclick = function () {
        location.href = "alphabet.html";
    };
var Audio = document.querySelector('#Audio');
var Audio2 = document.querySelector('#Audio2');
var Audio3 = document.querySelector('#Audio3');
let flowers = document.querySelectorAll('.flower')
let lateflowers = document.querySelectorAll('.lateflower')
let crossbar222s = document.querySelectorAll('.crossbar222')
let crossbars = document.querySelectorAll('.crossbar')
let spraycircles=document.querySelectorAll('.spraycircle')
let scissor2=document.querySelector('.left')
let scissor1=document.querySelector('.right')

let clickcount = 0

document.querySelector('.button1').onclick = function () {
	for(let n = 0; n < spraycircles.length; n++){
  spraycircles[n].classList.add('waterappear');
  setTimeout(function(){
    spraycircles[n].classList.remove('waterappear')  
  },200)
};
	if(clickcount === 0){
		for(let i = 0; i < flowers.length; i++){
			flowers[i].classList.add('grow');
			   Audio.play();
		}		
	}
	if(clickcount === 1){
		for(let x = 0; x < lateflowers.length; x++){
			lateflowers[x].classList.add('growlate');
			   Audio.play();
		}	

	}
	clickcount ++
	 if (clickcount >= 3) {
        clickcount = -1;}
  };


let clickcount1 = 0
document.querySelector('.button2').onclick = function () {
	scissor1.classList.add('s1rotate');
	setTimeout(function(){
    scissor1.classList.remove('s1rotate')  
  },200);
	scissor2.classList.add('s2rotate');setTimeout(function(){
    scissor2.classList.remove('s2rotate')  
  },200);
	if(clickcount1 === 0){
	for(let j = 0; j < crossbar222s.length; j++){
		crossbar222s[j].classList.add('changecolor');
		   Audio2.play();
	}	
	}	
	if(clickcount1 === 1){
		for(let y = 0; y < crossbars.length; y++){
		crossbars[y].classList.add('changecolor');
		  Audio2.play();
	}	}

	clickcount1 ++
	if (clickcount1 >= 3) {
        clickcount1 = -1;}
  };

for(let i = 0; i < flowers.length; i++){
flowers[i].addEventListener('mouseenter',function(){
  flowers[i].classList.add('rotateflower');
  setTimeout(function(){
    flowers[i].classList.remove('rotateflower')  
  },1000)
})
};
for(let x = 0; x < lateflowers.length; x++){
lateflowers[x].addEventListener('mouseenter',function(){
  lateflowers[x].classList.add('rotateflowerlate');
  setTimeout(function(){
    lateflowers[x].classList.remove('rotateflowerlate')  
  },1000)
})
};

document.querySelector('.button3').onclick = function () {
	 Audio3.play();
	for(let x = 0; x < lateflowers.length; x++){
	lateflowers[x].classList.remove('growlate');};
clickcount--

	for(let i = 0; i < flowers.length; i++){
			flowers[i].classList.remove('grow')
		};
clickcount--
	for(let j = 0; j < crossbar222s.length; j++){
		crossbar222s[j].classList.remove('changecolor')
	};
clickcount1--
	for(let y = 0; y < crossbars.length; y++){
		crossbars[y].classList.remove('changecolor')
	};
clickcount1--
if (clickcount1 <= -1) {
        clickcount1 = 0;};
        if (clickcount <= -1) {
        clickcount = 0;}

}