var statek;
var statek2;
var tab_statki = [4, 3, 2, 1];
function game() {
    for (var i = 0; i < 11; i++) {
        siatkaValue[i] = i;
    }
    scene.remove(group);
    scene.remove(group2);
    scene.remove(newQueen);
    scene.remove(newQueen2);
    //UI
    $("#canvasDIV").html("");
    $("#canvasDIV").append("<img src='jpg/game/dolinterfaceGame.png' id='dolinterface' draggable='false' alt='dolinterface' style='position: absolute; bottom: 0; z-index: 999;'/>");
    $("#canvasDIV").append("<img src='jpg/game/startGray.png' id='start' draggable='false' alt='start' style='position: absolute; width: 16vw; bottom: 1.9vw; left: 50%; transform: translate(-50%, 0); z-index: 1000;'/>");
    $("#canvasDIV").append("<div id='character' style='position: absolute; left: 67vw; bottom: 1vw; height:7vw; width: 22vw; z-index:1000;'></div>");
    $("#character").append("<p style='font-family: Impact; padding-left: 1vw; font-size: 1vw;'>Nick: " + moj_nick + "</p>");
    if (usaClick == 1) {
        $("#character").append("<p style='font-family: Impact;padding-left: 1vw;font-size: 1vw;'>Frakcja: USA</p>");
    } else if (japanClick == 1) {
        $("#character").append("<p style='font-family: Impact;padding-left: 1vw;font-size: 1vw;'>Frakcja: Japonia</p>");
    } else {
        $("#character").append("<p style='font-family: Impact;padding-left: 1vw;font-size: 1vw;'>Frakcja: brak</p>");
    }
    $("#character").append("<p style='font-family: Impact;padding-left: 1vw;font-size: 1vw;'>Dotychczasowa ilość wygranych: "+ moje_wygrane+"</p>");
    $("#canvasDIV").append("<img src='jpg/game/radar.gif' id='radar' alt='radar' style='position: absolute; bottom: 0; right:0; z-index: 998; width: 10.5vw; height: 10.5vw;'/>");
    $("#dolinterface").css("width", "100vw");
    $("#canvasDIV").append("<img src='jpg/game/m2.png' id='m3' alt='m3' style='position: absolute; bottom: 2px; left: 17.5vw; z-index: 1000; width: 7.3vw; height: 8.8vw;'/>");
    $("#canvasDIV").append("<img src='jpg/game/m3.png' id='m2' alt='m2' style='position: absolute; bottom: 0; left: 9vw; z-index: 1000; width: 7.5vw; height: 8.9vw;'/>");
    $("#canvasDIV").append("<img src='jpg/game/m1.png' id='m1' alt='m1' style='position: absolute; bottom: 0; left: 0.8vw; z-index: 1000; width: 7.5vw; height: 8.9vw;'/>");
    $("#canvasDIV").append("<img src='jpg/game/m4.png' id='m4' alt='m4' style='position: absolute; bottom: 0; left: 25.6vw; z-index: 1000; width: 7.5vw; height: 8.9vw;'/>");
    //Clicki na img - dodawanie statków do planszy
    /*
    if (obrot) {
        mesh.position.x = 1600 - (size - 1) * 50
        mesh.position.z = -200 
    } else {
        mesh.position.x = 1600
        mesh.position.z = -200 + (size - 1) * 50
    }
    */
    $("#m1").click(function () {
        if (tab_statki[0]>0) {
            statek = new Ship(1,false,1600,-200);
            scene.add(statek.getShip())
            czy_wybrany_statek = true;
            size = 1;
            tab_statki[0] -= 1;
            if (tab_statki[0] == 3) {
                $("#m1").attr("src", "jpg/game/m1-1.png");
            }
            else if (tab_statki[0] == 2) {
                $("#m1").attr("src", "jpg/game/m1-2.png");
            }
            else if (tab_statki[0] == 1) {
                $("#m1").attr("src", "jpg/game/m1-3.png");
            }
            else if (tab_statki[0] == 0) {
                $("#m1").attr("src", "jpg/game/m1gray.png");
            }
            if (tab_statki[0] == 0 && tab_statki[1] == 0 && tab_statki[2] == 0 && tab_statki[3] == 0) {
                $("#start").attr("src", "jpg/game/start.png");
                rozstawianieGotowe = true;
            }
        }
    })
    $("#m2").click(function () {
        if (tab_statki[1] > 0) {
            statek = new Ship(2, false, 1550, -200);
            console.log(statek.getShip());
            scene.add(statek.getShip());
            czy_wybrany_statek = true;
            size = 2;
            tab_statki[1] -= 1;
            if (tab_statki[1] == 2) {
                $("#m2").attr("src", "jpg/game/m3-1.png");
            }
            else if (tab_statki[1] == 1) {
                $("#m2").attr("src", "jpg/game/m3-2.png");
            }
            else if (tab_statki[1] == 0) {
                $("#m2").attr("src", "jpg/game/m3gray.png");
            }
            if (tab_statki[0] == 0 && tab_statki[1] == 0 && tab_statki[2] == 0 && tab_statki[3] == 0) {
                $("#start").attr("src", "jpg/game/start.png");
                rozstawianieGotowe = true;
            }
        }
    })
    $("#m3").click(function () {
        if (tab_statki[2] > 0) {
            statek = new Ship(3,false,1500,-200);
            scene.add(statek.getShip())
            czy_wybrany_statek = true;
            size = 3;
            tab_statki[2] -= 1;
            if (tab_statki[2] == 1) {
                $("#m3").attr("src", "jpg/game/m2-1.png");
            }
            else if (tab_statki[2] == 0) {
                $("#m3").attr("src", "jpg/game/m2gray.png");
            }
            if (tab_statki[0] == 0 && tab_statki[1] == 0 && tab_statki[2] == 0 && tab_statki[3] == 0) {
                $("#start").attr("src", "jpg/game/start.png");
                rozstawianieGotowe = true;
            }
        }
    })
    $("#m4").click(function () {
        if (tab_statki[3] > 0) {
            statek = new Ship(4, false, 1550, -200);
            console.log(statek.getShip());
            scene.add(statek.getShip());
            czy_wybrany_statek = true;
            size = 4;
            tab_statki[3] -= 1;
            if (tab_statki[3] == 0) {
                $("#m4").attr("src", "jpg/game/m4gray.png");
            }
            if (tab_statki[0] == 0 && tab_statki[1] == 0 && tab_statki[2] == 0 && tab_statki[3] == 0) {
                $("#start").attr("src", "jpg/game/start.png");
                rozstawianieGotowe = true;
            }
        } 
    })
        $("#start").mouseenter(function () {
            if (rozstawianieGotowe) {
                $("#start").attr("src", "jpg/game/startClick.png");
                myAudio2 = new Audio('mp3/button1.wav');
                myAudio2.volume = "0.3";
                myAudio2.play();
            }
        });
        $("#start").mouseout(function () {
            if (rozstawianieGotowe) {
                $("#start").attr("src", "jpg/game/start.png");
            }
        });
        $("#start").click(function () {
             if (rozstawianieGotowe) {
                net.ready();
            }
        });
    //kamera
    camera.position.x = -200;
    camera.position.y = 1200;
    camera.position.z = 200;
    //siatka
    var siatka = new Siatka(200);
    scene.add(siatka.getSiatka())
    camera.lookAt(new THREE.Vector3(1000, 2, 200));
    //WAZNE NIE USUWAC - pozycja po odbiorze danych z servera
    //camera.position.set(-600, 1200, 850)
    //camera.lookAt(new THREE.Vector3(1000, 2, 850));
}