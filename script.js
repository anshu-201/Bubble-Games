var timer = 60;
var score = 0;
var hitrn = 0;



function increaseScore(){
   score += 10;
   document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
   document.querySelector("#hitval").textContent = hitrn;

}

function getRandomColor() {
   // Generate a random color in hex format
   const letters = '0123456789ABCDEF';
   let color = '#';
   for (let i = 0; i < 6; i++) {
       color += letters[Math.floor(Math.random() * 16)];
   }
   return color;
}

function makeBubble() {
   let clutter = "";
   for (let i = 1; i <= 170; i++) {
       const rn = Math.floor(Math.random() * 10);
       const randomColor = getRandomColor();
       clutter += `<div class="bubble" style="background-color: ${randomColor};">${rn}</div>`;
   }
   document.querySelector("#pbtm").innerHTML = clutter;
}



function runTimer(){
   var timerint = setInterval(function(){
      if(timer > 0){
      timer--;
      document.querySelector("#timerval").textContent = timer;
      }
      else{
         clearInterval(timerint);
         document.querySelector("#pbtm").innerHTML = `<h1>GameOver</h1>`;
      }
   }, 1000);
}
 
document.querySelector("#pbtm").addEventListener("click",function(dets){
   var clickednum = Number(dets.target.textContent);
   if(clickednum === hitrn){
      increaseScore();
      makeBubble();
      getNewHit();
   }
});

getNewHit();
runTimer();
makeBubble();