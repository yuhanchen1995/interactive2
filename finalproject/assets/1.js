let image=document.querySelector('.display')
let question=document.querySelector('.question')

	image.addEventListener('click', function(){
		image.classList.toggle('grow');
		console.log('hi!')
	})


image.addEventListener('mouseenter',function(){
question.classList.add('show');
})

image.addEventListener('mouseleave',function(){
question.classList.remove('show');
})

image.addEventListener('mousemove',function(event){


  let x = event.clientX / window.innerWidth
  let y = event.clientY / window.innerHeight
  
  let imageHeight = image.clientHeight
  let imageWidth = image.clientWidth
  
  
  image.style.top = -y * (imageHeight - window.innerHeight) + 'px'
  image.style.left = -x * (imageWidth - window.innerWidth) + 'px'
  
  
  console.log(x,y,x*imageWidth,y*imageHeight)
//   if(clickcount === 0){
// window.addEventListener('click', function(){
// 	image.classList.remove('grow');
// })};
})

