let cloud1 = document.querySelector('.no1')
window.addEventListener('scroll',function(){
	 cloud1.classList.add('slideinleft1');
	 setTimeout(function(){
    cloud1.classList.remove('slideinleft1')  
  },1000)
})