let image=document.querySelector('.display')
let question=document.querySelector('.question')
let nav1=document.querySelectorAll('#nav1')
let exhibit1=document.querySelector('.exhibit1')
let sound =  document.querySelector('.sound');
let Audio = document.querySelector('#Audio');
let night = document.querySelector('.night');

image.addEventListener('click', function(){
		image.classList.toggle('grow');
	night.classList.add('starshow');
	})

Audio.volume = 1;

image.addEventListener('mousemove',function(event){


  let x = event.clientX / window.innerWidth
  let y = event.clientY / window.innerHeight
  
  let imageHeight = image.clientHeight
  let imageWidth = image.clientWidth
  
  
  image.style.top = -y * (imageHeight - window.innerHeight) + 'px'
  image.style.left = -x * (imageWidth - window.innerWidth) + 'px'
  
  
  console.log(x,y,x*imageWidth,y*imageHeight)
})


 

function changeImage()
     {
      if (sound.getAttribute('src') == "assets/sound.png")
       {
         sound.src = "assets/sound2.png";
         Audio.volume=1;
         Audio.play();

         }
       else
         {
        sound.src = "assets/sound.png";
        Audio.pause();
                }
            }
