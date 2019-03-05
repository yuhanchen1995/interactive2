// source1: http://animista.net/;
//source2:https://github.com/miniMAC/magic;
//source3:https://javascript.info/js-animation;
//https://glitch.com/edit/#!/typhoon-octopus?path=assets/script.js:33:28
let element1 = document.querySelector('#element-1')
let element2 = document.querySelector('#element-2')
let element3 = document.querySelector('#element-3')
let element4 = document.querySelector('#element-4')
let element5 = document.querySelector('#element-5')
let element6 = document.querySelector('#element-6')
let element7 = document.querySelector('#element-7')
let element8 = document.querySelector('#element-8')
let element9 = document.querySelector('#element-9')
let element10 = document.querySelector('#element-10')
let element11 = document.querySelector('#element-11')
let element12 = document.querySelector('#element-12')
let element13 = document.querySelector('#element-13')
let element14 = document.querySelector('#element-14')
let element15 = document.querySelector('#element-15')
let element16 = document.querySelector('#element-16')
let element17 = document.querySelector('#element-17')
let element18 = document.querySelector('#element-18')
let element19 = document.querySelector('#element-19')
let element20 = document.querySelector('#element-20')
let element21 = document.querySelector('#element-21')
let element22 = document.querySelector('#element-22')
let element23 = document.querySelector('#element-23')
let element24 = document.querySelector('#element-24')
let element25 = document.querySelector('#element-25')
let element26 = document.querySelector('#element-26')
let element27 = document.querySelector('#element-27')
let element28 = document.querySelector('#element-28')
let element29 = document.querySelector('#element-29')
let element30 = document.querySelector('#element-30')
let element31 = document.querySelector('#element-31')
let element32 = document.querySelector('#element-32')
let element33 = document.querySelector('#element-33')
let element34 = document.querySelector('#element-34')
let element35 = document.querySelector('#element-35')
let element36 = document.querySelector('#element-36')
let element37 = document.querySelector('#element-37')
let element38 = document.querySelector('#element-38')
let element39 = document.querySelector('#element-39')
let element40 = document.querySelector('#element-40')
let element41 = document.querySelector('#element-41')
let element42 = document.querySelector('#element-42')
let element43 = document.querySelector('#element-43')
let element44 = document.querySelector('#element-44')
let element45 = document.querySelector('#element-45')
let element46 = document.querySelector('#element-46')
let element47 = document.querySelector('#element-47')
let element48 = document.querySelector('#element-48')
let element49 = document.querySelector('#element-49')
let element50 = document.querySelector('#element-50')


element1.addEventListener('click',function(){
	 element1.classList.add('scale1');
	 setTimeout(function(){
    element1.classList.remove('scale1')  
  },1000)
})


element4.addEventListener('mouseenter',function(){
	 element4.classList.add('moveleft');
	 setTimeout(function(){
    element4.classList.remove('moveleft')  
  },1000)
})
element5.addEventListener('mouseenter',function(){
	 element5.classList.add('rotate');
	 setTimeout(function(){
    element5.classList.remove('rotate')  
  },1000)
})
element6.addEventListener('click',function(){
	 element6.classList.add('turninto3');
	 setTimeout(function(){
    element6.classList.remove('turninto3')  
  },1000)
})
element7.addEventListener('mousedown',function(){
	 element7.classList.add('skew');
	 setTimeout(function(){
    element7.classList.remove('skew')  
  },1000)
})
element8.addEventListener('mouseover',function(){
	 element8.classList.add('square');
	 setTimeout(function(){
    element8.classList.remove('square')  
  },1000)
})


var xPos = 0;
var yPos = 0;
var angle = 0;


let animationCounter = 0


element9.addEventListener('click',function animate(){
	

	animationCounter ++
	// console.log(animationCounter)
	if(animationCounter > 200){
		animationCounter = 0
		// console.log('done')
	} else if (animationCounter > 100){
		
		xPos *= 0.9
		yPos *= 0.9
		element9.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;

		requestAnimationFrame(animate);
	} else {

		xPos += 5;
		angle += .1;
		yPos = Math.round(50 * Math.sin(angle));
		element9.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;

		if (Math.abs(xPos) >= 900) {
		    xPos = -500;
		  }

		if (angle > 2 * Math.PI) {
		    angle = 0;
		  }

		requestAnimationFrame(animate);
	}
	
})

element10.addEventListener('click',function(){
	 element10.classList.add('rotateIn');
	 setTimeout(function(){
    element10.classList.remove('rotateIn')  
  },1000)
})

window.addEventListener('scroll',function(){
	 element11.classList.add('lightSpeedOut');
	 setTimeout(function(){
    element11.classList.remove('lightSpeedOut')  
  },1000)
})

element12.addEventListener('click',function(){
	 element12.classList.add('flipout');
	 setTimeout(function(){
    element12.classList.remove('flipout')  
  },1000)
})

element13.addEventListener('click',function(){
	 element13.classList.add('smoosh1');
	 setTimeout(function(){
    element13.classList.remove('smoosh1')  
  },1000)
})

element14.addEventListener('click',function(){
	 element14.classList.add('clock1');
	 setTimeout(function(){
    element14.classList.remove('clock1')  
  },1000)
})

element15.addEventListener('mousedown',function(){
	 element15.classList.add('swing1');
	 setTimeout(function(){
    element15.classList.remove('swing1')  
  },1000)
})

element16.addEventListener('mouseover',function(){
	 element16.classList.add('swing2');
	 setTimeout(function(){
    element16.classList.remove('swing2')  
  },1000)
})

element17.addEventListener('mouseover',function(){
	 element17.classList.add('flipscale1');
	 setTimeout(function(){
    element17.classList.remove('flipscale1')  
  },1000)
})
window.addEventListener('scroll',function(){
	 element18.classList.add('vibrate1');
	 setTimeout(function(){
    element18.classList.remove('vibrate1')  
  },1000)
})
element19.addEventListener('click',function(){
	 element19.classList.add('wobble1');
	 setTimeout(function(){
    element19.classList.remove('wobble1')  
  },1000)
})
element20.addEventListener('mouseenter',function(){
	 element20.classList.add('jello1');
	 setTimeout(function(){
    element20.classList.remove('jello1')  
  },1000)
})
element21.addEventListener('click',function(){
	 element21.classList.add('colorchange1');
	 setTimeout(function(){
    element21.classList.remove('colorchange1')  
  },1000)
})


var x2Pos = 0;
var y2Pos = 0;
var angle2 = 0;


let animationCounter2 = 0

element22.addEventListener('click',function animate2(){
	

	animationCounter2 ++
	// console.log(animationCounter)
	if(animationCounter2 > 100){
		animationCounter2 = 0
		// console.log('done')
	} else if (animationCounter2 > 50){
		
		x2Pos *= 0.9
		y2Pos *= 0.9
		element22.style.transform = `translate3d(${x2Pos}px, ${y2Pos}px, 0)`;

	requestAnimationFrame(animate2);
	} else {

		x2Pos += 5;
		angle2 += .1;
		y2Pos = Math.round(Math.tan(angle3 * Math.PI/180));
		element22.style.transform = `translate3d(${x2Pos}px, ${y2Pos}px, 0)`;

		if (Math.abs(x2Pos) >= 900) {
		    x2Pos = -500;
		  }

		if (angle2 > 2 * Math.PI) {
		    angle2 = 0;
		  }

		requestAnimationFrame(animate2);
	}
})
var x3Pos = 0;
var y3Pos = 0;
var angle3 = 0;


let animationCounter3 = 0

element23.addEventListener('click',function animate3(){
	

	animationCounter3 ++
	// console.log(animationCounter)
	if(animationCounter3 > 100){
		animationCounter3 = 0
		// console.log('done')
	} else if (animationCounter3 > 50){
		
		x3Pos *= 0.9
		y3Pos *= 0.9
		element23.style.transform = `translate3d(${x3Pos}px, ${y3Pos}px, 0)`;

		requestAnimationFrame(animate3);
	} else {

		x3Pos += 5;
		angle3 += .1;
		y3Pos = Math.round(angle3*x3Pos+50);
		element23.style.transform = `translate3d(${x3Pos}px, ${y3Pos}px, 0)`;

		if (Math.abs(x3Pos) >= 900) {
		    x3Pos = -500;
		  }

		if (angle3 > 2 * Math.PI) {
		    angle3 = 0;
		  }

		requestAnimationFrame(animate3);
	}
})

window.addEventListener('scroll',function(){
	 element24.classList.add('tada1');
	 setTimeout(function(){
    element24.classList.remove('tada1')  
  },2000)
})
window.addEventListener('scroll',function(){
	 element25.classList.add('dangle1');
	 setTimeout(function(){
    element25.classList.remove('dangle1')  
  },2000)
})

let scroller = document.querySelector('#scroller')

element26.addEventListener('scroll',function(){
 scroller.style.color = '#6dd5ed'
})

element27.addEventListener('click',function(){
 element27.nextElementSibling.classList.add('flipbottom1');
	 setTimeout(function(){
    element27.nextElementSibling.classList.remove('flipbottom1')  
  },2000)
})

element28.addEventListener('click',function() {
element28.animate([{
			transform: getComputedStyle(this).transform,
			marginTop: getComputedStyle(this).marginTop,
			marginRight:getComputedStyle(this).marginRight,
		},
    {
			transform: 'scale(1.2) skew(10deg)',
			marginTop: '100px',
			marginRight: '1000px'
		}], {
      duration: 200,
      iterations: 1,
      fill:'both'
  });
})
element29.addEventListener('pointermove',function(e){
  var xPos = e.pageX+15;
  var yPos = e.pageY-15;

  this.style.position = 'absolute'
  this.style.top = yPos+'px'
  this.style.left = xPos+'px'

})
 element30.addEventListener('click',function(){
	 element30.classList.add('shadowdrop1');
	 setTimeout(function(){
    element30.classList.remove('shadowdrop1')  
  },2000)
})
 element31.addEventListener('click',function(){
	 element31.classList.add('shadowpop1');
	 setTimeout(function(){
    element31.classList.remove('shadowpop1')  
  },2000)
})
 element32.addEventListener('click',function(){
	 title.classList.add('trackingexpand1');
	 setTimeout(function(){
    title.classList.remove('trackingexpand1')  
  },2000)
})
window.addEventListener('scroll',function(){
	 title1.classList.add('textflicker1');
	 setTimeout(function(){
    title1.classList.remove('textflicker1')  
  },2000)
})
 element34.addEventListener('click',function(){
	  element34.classList.add('ping1');
	 setTimeout(function(){
     element34.classList.remove('ping1')  
  },2000)
})
 element35.addEventListener('click',function(){
	  element35.classList.add('shakeleft1');
	 setTimeout(function(){
     element35.classList.remove('shakeleft1')  
  },2000)
})

 element36.addEventListener('click',function(){
	  title2.classList.add('textpopup1');
	 setTimeout(function(){
     title2.classList.remove('textpopup1')  
  },2000)
})
  element37.addEventListener('click',function(){
	  element37.classList.add('foolishIn1');
	 setTimeout(function(){
      element37.classList.remove('foolishIn1')  
  },2000)
})
 element38.addEventListener('mouseenter',function(){
	  element38.classList.add('bombLeftOut1');
	 setTimeout(function(){
      element38.classList.remove('bombLeftOut1')  
  },2000)
})
  element39.addEventListener('mouseenter',function(){
	  element39.classList.add('boingInUp1');
	 setTimeout(function(){
      element39.classList.remove('boingInUp1')  
  },1000)
})
    element40.addEventListener('click',function(){
	  element40.classList.add('boingOutDown1');
	 setTimeout(function(){
      element40.classList.remove('boingOutDown1')  
  },1000)
})
     element41.addEventListener('click',function(){
	  title3.classList.add('bluroutexpand1');
	 setTimeout(function(){
      title3.classList.remove('bluroutexpand1')  
  },1000)
})

 function animate({timing, draw, duration}) {

  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction goes from 0 to 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // calculate the current animation state
    let progress = timing(timeFraction);

    draw(progress); // draw it

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }

  });
}
    element43.onclick = function() {
      animate({
        duration: 1000,
        timing: function(timeFraction) {
          return timeFraction;
        },
        draw: function(progress) {
          element43.style.width = progress * 100 + '%';
        }
      });

    };
   window.addEventListener('scroll',function(){
	  element44.classList.add('rolloutleft1');
	 setTimeout(function(){
      element44.classList.remove('rolloutleft1')  
  },1000)
})
element46.addEventListener('click',function() {
element46.animate([{
			opacity: getComputedStyle(this).opacity,
			width: getComputedStyle(this).width,
			marginLeft: getComputedStyle(this).marginLeft,
		},
    {
			opacity: 0.4,
			width: '500px',
			marginLeft: '500px'
		}], {
      duration: 200,
      iterations: 1,
      fill:'forwards'
  });
});

element47.addEventListener('click',function() {
element47.animate([{
			opacity: getComputedStyle(this).opacity,
			width: getComputedStyle(this).width,
			height: getComputedStyle(this).height,
			marginRight: getComputedStyle(this).marginRight,
		},
    {
			opacity: 0.4,
			width: '500px',
			height:'100px',
			marginRight: '500px'
		}], {
      duration: 100,
      iterations: 1,
      fill:'forwards'
  });
})

 
element48.addEventListener('click',function() {
element48.animate([{
			border :  getComputedStyle(this).border,   
			marginRight: getComputedStyle(this).marginRight,
		},
    {
			border: '#0575e6 6px dotted',
			marginRight: '1000px'
		}], {
      duration: 100,
      iterations: 1,
      fill:'forwards'
  });
})
element49.addEventListener('click',function() {
element49.animate([{
			transform: getComputedStyle(this).transform,
			marginRight: getComputedStyle(this).marginRight,
		},
    {
			transform: 'rotate(180deg)',
			marginRight: '1000px'
		}], {
      duration: 200,
      iterations: 1,
      fill:'forwards'
  });
})
element49.addEventListener('click',function() {
element49.animate([{
			transform: getComputedStyle(this).transform,
			marginRight: getComputedStyle(this).marginRight,
		},
    {
			transform: 'rotate(180deg)',
			marginRight: '1000px'
		}], {
      duration: 200,
      iterations: 1,
      fill:'forwards'
  });
})
element50.addEventListener('click',function() {
element50.animate([{
			transform: getComputedStyle(this).transform,
			opacity: getComputedStyle(this).opacity,
			marginTop: getComputedStyle(this).marginTop,
			marginRight:getComputedStyle(this).marginRight,
		},
    {
			transform: 'rotate(180deg) scale(1.2) skew(10deg)',
			opacity:'0',
			marginTop: '100px',
			marginRight: '1000px'
		}], {
      duration: 200,
      iterations: 1,
      fill:'both'
  });
})