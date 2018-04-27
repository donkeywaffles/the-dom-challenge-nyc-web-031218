// As a user, i should see the timer increment every second once the page has loaded

// As a user, i can manually increment and decrement the counter as i like
// As a user, i can like an individual number of the counter. I should see the appropriate number of likes associated with that particular number
// As a user I can pause the game, which should disable all buttons except the pause button, which should now show the text 'resume'
// As a user I can leave comments on my gameplay, such as "Wow, what a fun game this is"


let counter = document.getElementById("counter");
let minus = document.getElementById("-");
let plus = document.getElementById("+");
let pause = document.getElementById("pause");
let like = document.getElementById("<3");
let isPause = false;
let c = 1;
let numLikes = {}
let likedNums = [];
let likeText = document.getElementById("likes");
let submit = document.getElementById("submit");
let commentDiv = document.getElementById("bamboozle");

// Set Counter
setInterval(function(){
  if(!isPause) {
    counter.innerText = c++;
  } else {
    counter.innerText = c;
  }
  if(likedNums.includes(c)){
    likeText.innerText = `Number of likes: ${numLikes[c]}`;
  } else {
    likeText.innerText = `Number of likes: 0`;
  }
}, 1000);



// Subtract Counter With Minus Button
minus.addEventListener("click", function(e){
  if(isPause){
    --c;
  }else {
    c -= 2;
  }

});

// Add Counter With Plus Button
plus.addEventListener("click", function(e){
  c++;
});

// Pause Event Listener
pause.addEventListener("click", function(e) {
  if(isPause) {
    isPause = false;
    console.log(pause, this)
    this.innerText = "pause"
  } else {
    isPause = true;
    console.log(pause, this)
    this.innerText = "resume"
  }
});

// Like Event Listener
like.addEventListener("click", function(e){
  let num = c
  if(isPause) {
    console.log("like", num);
  } else {
    console.log("like", --num);
  }

  if(likedNums.includes(num)) {
    numLikes[num] += 1;
  } else {
    numLikes[num] = 1;
    likedNums.push(num);
  }
  console.log(numLikes);
});

// Comment Event Listener
submit.addEventListener("click", function(e){
  e.preventDefault();
  let p = document.createElement("p");
  let com = document.querySelector("input").value;
  p.innerText = com;
  p.style.border = "thick solid #0000FF"
  commentDiv.append(p);
})
