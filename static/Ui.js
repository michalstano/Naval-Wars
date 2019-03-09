function Ui() {
    //canvas pozycja
    $("#canvasID").css("position", "absolute");
    $("#main").append("<div id='canvasDIV' style='position: absolute; z-index: 10;'></div>");
    $("#canvasDIV").css("width", window.innerWidth);
    $("#canvasDIV").css("height", window.innerHeight);
    $("#canvasDIV").html("");
    //dół - Interface
    $("#canvasDIV").append("<img src='jpg/interface/dolinterface.png' id='dolinterface' alt='dolinterface' style='position: absolute; bottom: 0; z-index: 1000;'/>");
    $("#dolinterface").css("width", "100vw");
    //góra - Interface
    $("#canvasDIV").append("<img src='jpg/interface/gorainterface.png' id='gorainterface' alt='gorainterface' style='position: absolute; top: 0; z-index: 1000;'/>");
    $("#gorainterface").css("width", "100vw");
    $("#canvasDIV").append("<img src='jpg/interface/goralogo.png' id='goralogo' alt='goralogo' style='position: absolute; top: 0; z-index: 1000;left: 50%; transform: translate(-50%, 0);'/>");
    //audio
    //main - Interface
    $("#canvasDIV").append("<img src='jpg/interface/srodekInterface6.png' id='srodekInterface' alt='srodekInterface' style='position: absolute; top: 7.7vh; left: 50%; transform: translate(-50%, 0); z-index: 999;'/>");
   // $("#canvasDIV").append("<img src='jpg/interface/srodekInterface3.png' id='srodekInterface2' alt='srodekInterface2' style='position: absolute; top: 538px; left: 50%; transform: translate(-50%, 0); z-index: 999;'/>");
    $("#canvasDIV").append("<div id='buttonDiv' style='position: absolute; top: 7.7vh; left: 50%; transform: translate(-50%, 0); z-index: 999;'></div>");
    //buttony
        //graj
    $("#buttonDiv").append("<img src='jpg/interface/buttonGraj.png' id='buttonGraj' alt='buttonGraj' style='position: absolute; top:355px; left: 50%; transform: translate(-50%, 0); z-index: 1000;'/>");
        //opcje
    $("#buttonDiv").append("<img src='jpg/interface/buttonOpcje.png' id='buttonOpcje' alt='buttonOpcje' style='position: absolute; top: 425px; left: 50%; transform: translate(-50%, 0); z-index: 1000;'/>");
        //opis
    $("#buttonDiv").append("<img src='jpg/interface/buttonOpis.png' id='buttonOpis' alt='buttonOpis' style='position: absolute; top: 495px; left: 50%; transform: translate(-50%, 0); z-index: 1000;'/>");
        //opcje
    $("#buttonDiv").append("<img src='jpg/interface/buttonWyjdz.png' id='buttonWyjdz' alt='buttonWyjdz' style='position: absolute; top: 565px; left: 50%; transform: translate(-50%, 0); z-index: 1000;'/>");
    //klik
    $("#buttonGraj").mouseenter(function () {
        myAudio2 = new Audio('mp3/button1.wav');
        myAudio2.volume = "0.3";
        $("#buttonGraj").attr("src", "jpg/interface/buttonGraj2.png");
        myAudio2.play();
    });
    $("#buttonOpcje").mouseenter(function () {
        myAudio2 = new Audio('mp3/button1.wav');
        $("#buttonOpcje").attr("src", "jpg/interface/buttonOpcje2.png");
        myAudio2.volume = "0.3";
        myAudio2.play();
    });
    $("#buttonOpis").mouseenter(function () {
        myAudio2 = new Audio('mp3/button1.wav');
        $("#buttonOpis").attr("src", "jpg/interface/buttonOpis2.png");
        myAudio2.volume = "0.3";
        myAudio2.play();
    });
    $("#buttonWyjdz").mouseenter(function () {
        myAudio2 = new Audio('mp3/button1.wav');
        $("#buttonWyjdz").attr("src", "jpg/interface/buttonWyjdz2.png");
        myAudio2.volume = "0.3";
        myAudio2.play();
    });
    //---
    $("#buttonGraj").mouseout(function () {
        $("#buttonGraj").attr("src", "jpg/interface/buttonGraj.png");
    });
    $("#buttonOpcje").mouseout(function () {
        $("#buttonOpcje").attr("src", "jpg/interface/buttonOpcje.png");
    });
    $("#buttonOpis").mouseout(function () {
        $("#buttonOpis").attr("src", "jpg/interface/buttonOpis.png");
    });
    $("#buttonWyjdz").mouseout(function () {
        $("#buttonWyjdz").attr("src", "jpg/interface/buttonWyjdz.png");
    });
    $("#buttonOpis").click(function () {
        myAudio3 = new Audio('mp3/heavyButton.wav');
        myAudio3.play()
        document.location.href = "http://navalwars.cba.pl/dokumentacja.pdf";
    });
    $("#buttonWyjdz").click(function () {
        myAudio3 = new Audio('mp3/heavyButton.wav');
        myAudio3.play();
    });
    $("#buttonGraj").click(function () {
        myAudio3 = new Audio('mp3/heavyButton.wav');
        myAudio3.play()
        $("#canvasDIV").html("");
        //dół - Interface
        $("#canvasDIV").append("<img src='jpg/interface/dolinterface.png' id='dolinterface' alt='dolinterface' style='position: absolute; bottom: 0; z-index: 1000;'/>");
        $("#dolinterface").css("width", "100vw");
        //góra - Interface
        $("#canvasDIV").append("<img src='jpg/interface/gorainterface.png' id='gorainterface' alt='gorainterface' style='position: absolute; top: 0; z-index: 1000;'/>");
        $("#gorainterface").css("width", "100vw");
        $("#canvasDIV").append("<div id='logowanieDiv' style='position: absolute; top: 200px; left: 50%; transform: translate(-50%, 0); z-index: 1000; height: 514px; width: 900px;' ><div>");
        $("#logowanieDiv").append("<img src='jpg/interface/logowanie.png' id='logowanie' alt='logowanie' style='position: absolute; z-index: 999;'/>");
        $("#logowanieDiv").append("<input id='NickName' type='text' style='position: absolute; left: 50%; transform: translate(-50%, 0); top: 70px; z-index: 1000; background-color: silver; text-align: center; font-family: Impact; height: 30px; font-size: 25px;'/>");
        $("#logowanieDiv").append("<img src='jpg/interface/usaBackgroundBlack.png' id='usaBackground' alt='usa' style='position: absolute; top: 200px; right: 0; z-index: 999;' />");
        $("#logowanieDiv").append("<img src='jpg/interface/japanBackgroundBlack.png' id='japanBackground' alt='japan' style='position: absolute; bottom: 10px; left: 5px; z-index: 999;' />");
        $("#logowanieDiv").append("<img src='jpg/interface/wyborFrakcji.png' id='wyborFrakcji' alt='wyborFrakcji' usemap='#japanmap' style='position: absolute; top: 185px; left: 335px ; z-index: 999;' /><map name='japanmap'><area shape='poly' class='japanmapclass' coords='0,0,60,0,181,232,0,232' alt='Sun'><area shape='poly' class='usamapclass' coords='61,0,227,0,227,234,0,234' alt='Sun'></map>");
        $("#logowanieDiv").append("<img src='jpg/interface/buttonGraj3.png' id='buttonGraj3' style='position: absolute; bottom: 52px; left: 50%; transform: translate(-50%, 0);z-index: 999;' />");
        $("#logowanieDiv").append("<img src='jpg/interface/buttonCofnij.png' id='buttonCofnij' style='position: absolute; bottom: 27px; left: 50%; transform: translate(-50%, 0);z-index: 999;' />");
        //$("#logowanieDiv").append("<img src='jpg/interface/japanBlack.png' id='japanBlack' alt='japan' usemap='#japanmap' style='position: absolute; top: 185px; left: 335px ; z-index: 999;' /><map class='japanmapclass' name='japanmap'><area shape='poly' coords='0,0,60,0,181,232,0,232' alt='Sun'></map>");
       
        $(".usamapclass").mouseenter(function () {
            if (usaClick == 0 && japanClick == 0) {
                $("#wyborFrakcji").attr("src", "jpg/interface/wyborFrakcjiUsa.png");
                $("#usaBackground").attr("src", "jpg/interface/usaBackground.png");
            }
                });
        $(".usamapclass").mouseout(function () {
            if (usaClick == 0 && japanClick == 0) {
                $("#wyborFrakcji").attr("src", "jpg/interface/wyborFrakcji.png");
                $("#usaBackground").attr("src", "jpg/interface/usaBackgroundBlack.png");
            }
                });
        $(".japanmapclass").mouseenter(function () {
            if (usaClick == 0 && japanClick == 0) {
                $("#wyborFrakcji").attr("src", "jpg/interface/wyborFrakcjiJapan.png");
                $("#japanBackground").attr("src", "jpg/interface/japanBackground.png");
            }
                });
        $(".japanmapclass").mouseout(function () {
            if (usaClick == 0 && japanClick == 0) {
                $("#wyborFrakcji").attr("src", "jpg/interface/wyborFrakcji.png");
                $("#japanBackground").attr("src", "jpg/interface/japanBackgroundBlack.png");
            }
        });


        $(".usamapclass").click(function () {
            usaClick = 1;
            japanClick = 0;
                    $("#wyborFrakcji").attr("src", "jpg/interface/wyborFrakcjiUsa.png");
                    $("#usaBackground").attr("src", "jpg/interface/usaBackground.png");
                    $("#japanBackground").attr("src", "jpg/interface/japanBackgroundBlack.png");
                });
        $(".japanmapclass").click(function () {
            usaClick = 0;
            japanClick = 1;
                    $("#wyborFrakcji").attr("src", "jpg/interface/wyborFrakcjiJapan.png");
                    $("#japanBackground").attr("src", "jpg/interface/japanBackground.png");
                    $("#usaBackground").attr("src", "jpg/interface/usaBackgroundBlack.png");
        });
        $("#buttonGraj3").mouseenter(function () {
            myAudio2 = new Audio('mp3/button1.wav');
            $("#buttonGraj3").attr("src", "jpg/interface/buttonGraj32.png");
            myAudio2.volume = "0.3";
            myAudio2.play();
        });
        $("#buttonGraj3").mouseout(function () {
            $("#buttonGraj3").attr("src", "jpg/interface/buttonGraj3.png");
        });
        $("#buttonCofnij").mouseenter(function () {
            $("#buttonCofnij").attr("src", "jpg/interface/buttonCofnij2.png");
            myAudio2 = new Audio('mp3/button1.wav');
            myAudio2.volume = "0.3";
            myAudio2.play();
        });
        $("#buttonCofnij").mouseout(function () {
            $("#buttonCofnij").attr("src", "jpg/interface/buttonCofnij.png");

        });
        $("#buttonCofnij").click(function () {
            myAudio3 = new Audio('mp3/heavyButton.wav');
            myAudio3.play()
            usaClick = 0;
            japanClick = 0;
            Ui();
        });
        $("#buttonGraj3").click(function () {
            //console.log(usaClick, japanClick)
            net.logowanie();
            myAudio3 = new Audio('mp3/heavyButton.wav');
            myAudio3.play();
            //game();
        });
    });
};
