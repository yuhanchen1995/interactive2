let clockEl = document.querySelector('#clock')
let image1 = document.querySelector('#image1')


// run getTime once on load

getTime();



// call getTime every 1 second

setInterval(function() {
  getTime();
}, 4000);




// set up time getting function

function getTime(){
    image1.classList.remove('state1');
  // get the date
  
  let d = new Date();

  // get hours, minutes, and seconds
  
  let h = addZero(d.getHours());
  let m = addZero(d.getMinutes());
  let s = addZero(d.getSeconds());

  // update the clock's text
  
  let timeText = h + ":" + m + ":" + s
  clockEl.innerText = timeText

  // rotate secondHand based on the second
    

  var div = document.createElement('div')

  console.log(s)


  if(s % 3 === 0){
    console.log('hi')
    div.classList.add('droppy2')
  } else {
    console.log('hello')
    div.classList.add('droppy1')
  }


  div.innerText = timeText

  div.addEventListener('animationend',function(){
    div.parentNode.removeChild(div)
    console.log('end');
   image1.classList.add('state1')
  })


  document.body.appendChild(div)



  // detect a specific time
  
  // if(h < 19 && h > 16){
  //  clockEl.classList.add('classTime');
  // } else {
  //  clockEl.classList.remove('classTime');
  // }
}

// add a zero to times below 10

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}