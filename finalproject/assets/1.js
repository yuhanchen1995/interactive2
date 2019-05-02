let image=document.querySelector('.display')
let sound =  document.querySelector('.sound');
let Audio = document.querySelector('#Audio');
let night = document.querySelector('.night');

let container2 = document.querySelector('.container2')

image.addEventListener('click', function(){
		image.classList.toggle('grow');
    if(night){
      

      if(night.classList.contains('hidden')){
        night.classList.remove('hidden')
        night.classList.add('starshow');
      } else {
        night.classList.add('hidden')
        night.classList.remove('starshow');
      }

      
    }
    container2.classList.toggle('unposition');
	
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
