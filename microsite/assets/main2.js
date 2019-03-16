let  image1 = document.querySelector('#image1')
let  image2 = document.querySelector('#image2')
let  image3 = document.querySelector('#image3')
let  image4 = document.querySelector('#image4')
let  image5 = document.querySelector('#image5')
let  image6 = document.querySelector('#image6')
let  image7 = document.querySelector('#image7')
let  image8 = document.querySelector('#image8')
let  image9 = document.querySelector('#image9')
let  background = document.querySelector('#background')
let  photo1 = document.querySelector('#photo1')
let  cloud1 = document.querySelector('#cloud1')
let  cloud2 = document.querySelector('#cloud2')
let  body = document.querySelector('body')
let  path = document.querySelectorAll('path')
let  buttonstart = document.querySelector('#startbutton')
let  wrapper = document.querySelector('.wrapper')
var xPos = 0;
var yPos = 0;
var angle = 0;


let clickcount = 0

buttonstart.addEventListener('click',function(){
buttonstart.classList.add('state1') ;
 setTimeout(function(){
   buttonstart.classList.remove('state1')
  },300)


    if(clickcount === 0){
    for (var i = 0; i < path.length; i++) {
    path[i].classList.add('state1') ;
}
  setTimeout(function(){
   wrapper.classList.add('state1')
  },5000)
}

    if(clickcount === 1){
    for (var i = 0; i < path.length; i++) {
    path[i].classList.add('state2') ;
}
     image1.classList.add('state0');
     image2.classList.add('state0');
     image3.classList.add('state0');
     image4.classList.add('state0');
     image5.classList.add('state0');
     image6.classList.add('state0');
     image7.classList.add('state0');
     image8.classList.add('state0');
     image9.classList.add('state0');

}
    if(clickcount === 2){
    image1.classList.add('state2');
    image2.classList.add('state2');
    image3.classList.add('state2');
    image4.classList.add('state2');
    image5.classList.add('state2');
    image6.classList.add('state2');
    image7.classList.add('state2');
    image8.classList.add('state2');
    image9.classList.add('state2');
}
 if(clickcount === 3){
    image1.classList.add('state3');
    image2.classList.add('state3');
    image3.classList.add('state3');
    image4.classList.add('state3');
    image5.classList.add('state3');
    image6.classList.add('state3');
    image7.classList.add('state3');
    image8.classList.add('state3');
    image9.classList.add('state3');
}
if(clickcount === 4){
    image1.classList.add('state4');
    image2.classList.add('state4');
    image3.classList.add('state4');
    image4.classList.add('state4');
    image5.classList.add('state4');
    image6.classList.add('state4');
    image7.classList.add('state4');
    image8.classList.add('state4');
    image9.classList.add('state4');
    setTimeout(function(){
    photo1.classList.add('state1');
    cloud1.classList.add('state1')},2000)
    setTimeout(function(){
   buttonstart.classList.add('state2')
  },1000)

}
    clickcount ++
  })

  image1.addEventListener('click',function(){
     image1.classList.add('state5');
     setTimeout(function(){
   image1.classList.remove('state5')
  },2000)
});
  image2.addEventListener('click',function(){
     image2.classList.add('state5');
     setTimeout(function(){
   image2.classList.remove('state5')
  },2000)
});
  image3.addEventListener('click',function(){
     image3.classList.add('state5');
      setTimeout(function(){
   image3.classList.remove('state5')
  },2000)
});
  image4.addEventListener('click',function(){
     image4.classList.add('state5');
      setTimeout(function(){
   image4.classList.remove('state5')
  },2000)
});
  image5.addEventListener('click',function(){
     image5.classList.add('state5');
      setTimeout(function(){
   image5.classList.remove('state5')
  },2000)
});
  image6.addEventListener('click',function(){
     image6.classList.add('state5');
    setTimeout(function(){
   image6.classList.remove('state5')
  },2000)
})
  image7.addEventListener('click',function(){
     image7.classList.add('state5');
      setTimeout(function(){
   image7.classList.remove('state5')
  },2000)
});
   image8.addEventListener('click',function(){
     image8.classList.add('state5');
      setTimeout(function(){
   image8.classList.remove('state5')
  },2000)
});
   image9.addEventListener('click',function(){
     image9.classList.add('state5');
      setTimeout(function(){
   image9.classList.remove('state5')
  },2000)
});



photo1.addEventListener('click',function animate(){
photo1.style.left='0px';
photo1.style.transition='unset';
xPos += 5;
angle += .1;
yPos = Math.round(50 * Math.sin(angle));
photo1.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;

        if (Math.abs(xPos) >= 2000) {
            xPos = -700;
          }

        if (angle > 2 * Math.PI) {
            angle = 0;
          }

        requestAnimationFrame(animate);
    }
    
)

