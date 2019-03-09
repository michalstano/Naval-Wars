function Music() {
    var myAudioMain = new Audio('mp3/main.mp3');
    myAudioMain.play();
    setInterval(function () {
       // console.log(myAudioMain);
       // console.log(myAudioMain.currentTime);
        if (myAudioMain.currentTime > 224) {
            myAudioMain.pause();
            myAudioMain.currentTime = 0;
            myAudioMain.play();
        }
    }, 1000);
    //console.log(myAudioMain);
}