//function countdownTimer() { ( commented out)
// console.log("countdownTimer()started");
//  var currTime = 50;
//  document.getElementById("blastDis").innerHTML = currTime + " Seconds";

//45 second display
//  setTimeout(function () {
//      currTime = currTime - 5;
//      document.getElementById("blastDis").innerHTML = currTime + " Seconds";
//  }, 5000);


//40 second display { 
//   setTimeout(function () {
//       currTime = currTime - 5;
//       document.getElementById("blastDis").innerHTML = currTime + " Seconds";
//  }, 10000);

//35 second display
// setTimeout(function () {
//     currTime = currTime - 5;
//     document.getElementById("blastDis").innerHTML = currTime + " Seconds";
// }, 15000);

//30 second display
// setTimeout(function () {
//    currTime = currTime - 5;
//   document.getElementById("blastDis").innerHTML = currTime + " Seconds";
//   }, 20000);

//25 second display
//  setTimeout(function () {
//      currTime = currTime - 5;
//    document.getElementById("blastDis").innerHTML = currTime + " Seconds";
//  }, 25000);

//20 second display
//  setTimeout(function () {
//    currTime = currTime - 5;
//      document.getElementById("blastDis").innerHTML = currTime + " Seconds";
//}, 30000);

//15 second display
//    setTimeout(function () {
//       currTime = currTime - 5;
//     document.getElementById("blastDis").innerHTML = currTime + " Seconds";
// }, 35000);

//10 second display
//setTimeout(function () {
//    currTime = currTime - 5;
//  document.getElementById("blastDis").innerHTML = currTime + " Seconds";
// }, 40000);

//05 second display
//   setTimeout(function () {
//     currTime = currTime - 5;
//   document.getElementById("blastDis").innerHTML = currTime + " Seconds";
//  }, 45000);

//00 second display
// setTimeout(function () {
//   currTime = currTime - 5;
//      document.getElementById("blastDis").innerHTML = "Blastoff";
//}, 50000);
//}

//btrCountdownTimer Used to fufill assignment Efficiency mission control
//function brtCountdownTimer() {
//   console.log("brtCountdownTimer() started");
// var currTime = 50;
//
//  for (var i = 0; i < 11; i++) {
//    setTimeout(function () {
//what we do each iteration
//      console.log(currTime);
//    document.getElementById("blastDis").innerHTML = currTime;
//  if (currTime == 0) {
//    document.getElementById("blastDis").innerHTML = "Blastoff!!!"
//      }
//    currTime = currTime - 5;
//    }, i * 5000)

//    }

//}

//function chgBtrCountdownTimer() {
// console.log("chgBtrCountdownTimer() started");
// var currTime = 50;
//  var ogCurrTime = currTime;

//  for (var i = 0; i < 11; i++) {
//      setTimeout(function () {
//        //what we do each iteration
//       console.log(currTime);
//      if (currTime == 0){
//less than 1/2 left   
//        document.getElementById("blastDis").innerHTML = "Blastoff!!!";
//  } else if (currTime < 0.5 * ogCurrTime){
//we finished counting down
//       document.getElementById("blastDis").innerHTML = "Warning Less than ½ way to launch, time left = " + currTime + " seconds";
//  } else {
//at the beginning
//      document.getElementById("blastDis").innerHTML = currTime + "Seconds";
//  }
//  currTime = currTime - 5;
// }, i * 5000)//Success

//  }
//}

function startFun() {
    console.log("startFun() started");
    //disable start button
    document.getElementById("startButton").disabled = true;

    //enable (disable)! stop button 
    document.getElementById("stopButton").disabled = false;

   

    //run updateDisplay()
    index = 0;
    timer = setInterval(updateDisplay, time_interval);
    
     document.getElementById("dataTable").rows["seconds"].innerHTML = "reading data";
}


function stopFun() {
    console.log("stopFun() started");
    //disable stop button
    document.getElementById("stopButton").disabled = true;

    //enable(disable!) stop button
    document.getElementById("startButton").disabled = false;

    clearInterval(timer);
}
//enable playstation
function Playstation() {
    console.log("Playstation() started");//read to make sure code is read
    mySound = new sound("us-lab-background.mp3");
    mySound.play();//play audio
}

//enable sound file
function sound(srcFile) {
    this.sound = document.createElement("audio");
    this.sound.src = srcFile;
    this.sound.setAttribute("preload", "audio");//Load audio program 
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";//no controls available 
    document.body.appendChild(this.sound);//locks in
    this.play = function () {//enable play button
        this.sound.play();
    }
    this.stop = function () {//disable stop audio
        this.sound.pause();
    }
}
//Add another audio clip
function PlayStar() {
    console.log("PlayStar started");

}

//Enable PlayStar-StarWars theme 
function PlayStar() {
    console.log("PlayStar() started");//PlayStar started
    mySound = new sound("Star Wars - Main Theme.mp3");//star wars thes 
    mySound.play();// play audio
}

//enable sound file
function sound(srcfile) {
    this.sound = document.createElement("audio");
    this.sound.src = srcfile;
    this.sound.setAttribute("preload", "audio");//Load audio program 
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";//no controls available 
    document.body.appendChild(this.sound);//locks in
    this.play = function () {//enable play button
        this.sound.play();
    }
    this.stop = function () {//disable stop audio
        this.sound.pause();

    }
}


//begining of PlayCraps set up
function playcraps() {
    //troubleshooting playCraps() has started
    console.log("playcraps() started");
    //variable die 1-2 complete
    var die1 = 0;
    var die2 = 0;
    //troubleshooting for log completed
    die1 = Math.ceil(6 * Math.random());
    die2 = Math.ceil(6 * Math.random());
    //console.log completed
    console.log(die1)
    console.log(die2)
    //Results on screen action
    document.getElementById("die1Res").innerHTML = "The result for die1 is:" + die1;
    document.getElementById("die2Res").innerHTML = "The result for die2 is:" + die2;
    //Success 

    //check if craps (7 or 11)
    var sum = die1 + die2;
    if (sum == 7 || sum == 11) {
        console.log("You Lose!!!!!!!!");
        document.getElementById("gameRes").innerHTML = "You Did not find Victory. Wanna try again?";

        //check for win (even doubles)
    } else if (die1 % 2 == 0 && die1 == die2) {
        console.log("You Win!!!!!")
        document.getElementById("gameRes").innerHTML = "You Win!!!!!";

        //check for tie
    } else {
        console.log("You did not Win or Lose.")
        document.getElementById("gameRes").innerHTML = "You did not Win or Lose. Wanna try again?";
    }
}


