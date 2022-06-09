const circles = document.querySelectorAll(".circle");
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let counter = 1;

/*
when pressing next:
1- the next circle be blue : adding the active class to it
2- the progress bar move : increasing its width dynamically
3-when reaching the last circle the next button disabled
*/
next.addEventListener('click',() => {
counter ++;
  if (counter===circles.length) {
      counter=circles.length 
  }
  update();
  })

/*
when pressing prev:
1- remove the active class from the circle
2- the progress bar move : decrease its width dynamically
3-when reaching the first circle the prev button disabled
*/

prev.addEventListener('click',() => {
    counter --;
    
   
      if (counter===1) {
        counter=1;
      }
      
      update();
   
    })

    const update = () => {
      circles.forEach((circle,index) => {
        if(index<counter){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
      })
      progress.style.width = (counter-1) / (circles.length-1)*100 + '%'

      if(counter===circles.length){
        next.disabled = true;
      }else if (counter ===1){
        prev.disabled = true;
      }else{
        next.disabled = false;
        prev.disabled = false;
      }


    }
