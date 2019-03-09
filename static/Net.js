//TABLICA PRZECIWNIKA
var tab_enemy;
var enemy = false;
var moj_nick;
var moje_wygrane;
function Net() {
    this.logowanie = function () {
        client.emit("Logowanie", {
            nick: document.getElementById("NickName").value,
            usa: usaClick,
            japan: japanClick
        })
    }
    this.wygrana = function () {
        client.emit("Wygrana", {
            nick: moj_nick,
            ilosc: (moje_wygrane+1)
        })
    }
    client.on("Wygrana", function (data) {
        //console.log(data)
    })
    client.on("Przegrana", function (data) {
        $("#canvasDIV").append("<div id='YouLose' style='position: absolute; top: 200px; left: 50%; transform: translate(-50%, 0); z-index: 1000; height: 514px; width: 900px;' ><div>");
        $("#YouLose").append("<img src='jpg/alerts/lose.png' id='ImgLose' alt='logowanie' style='position: absolute; z-index: 999;'/>");
        clearInterval(intervalTura);
        $("#tura").remove();
    })
    this.ready = function () {
        client.emit("Ready", {tab_statki: statki})
    }
    this.ruch = function () {
        // POZYCJA DO WSTAWIENIA KLOCKA + CZY TRAFIONE ( ZEBY WSTAWIC GRAFIKE PUDŁO || TRAFIONE)
        client.emit("Ruch", {x: ruch_x, z: ruch_z, trafione: czy_traf, licznik: ogienLicznik /*true/false*/})
    }
    client.on("Logowanie", function (data) {
        console.log(data.ilosc)
        moje_wygrane = data.ilosc;
        moj_nick = data.nick;
        //DATA.ILOSC - ILOSC WYGRANYCH TEGO UZYTKOWNIKA
        Logowanie = [];
        Logowanie = [data.nick, data.usa, data.japan];
        if (Logowanie[0] == "used") {
            $("#canvasDIV").append("<img src='jpg/alerts/nickzajety.png' id='nickzajety' alt='nickzajety' style='position: absolute; left: 50%; transform: translate(-50%, -50%); top: 50%; z-index: 1000;'/>");
            $("#canvasDIV").append("<img src='jpg/alerts/ok.png' id='ok' alt='ok' style='position: absolute; left: 50%; transform: translate(-50%, -50%); top: 54%; z-index: 1000;'/>");
            $("#ok").mouseenter(function () {
                    $("#ok").attr("src", "jpg/alerts/okgray.png");
                    myAudio2 = new Audio('mp3/button1.wav');
                    myAudio2.volume = "0.3";
                    myAudio2.play();
            });
            $("#ok").mouseout(function () {
                $("#ok").attr("src", "jpg/alerts/ok.png");
            });
            $("#ok").click(function () {
                myAudio3 = new Audio('mp3/heavyButton.wav');
                myAudio3.play();
                $("#nickzajety").remove();
                $("#ok").remove();
            });
            document.getElementById("NickName").value = ""
        } else if (Logowanie[0] == "full") {
            $("#canvasDIV").append("<img src='jpg/alerts/maksymalnailoscgraczy.png' id='maksymalnailoscgraczy' alt='maksymalnailoscgraczy' style='position: absolute; left: 50%; transform: translate(-50%, -50%); top: 50%; z-index: 1000;'/>");
            $("#canvasDIV").append("<img src='jpg/alerts/ok.png' id='ok' alt='ok' style='position: absolute; left: 50%; transform: translate(-50%, -50%); top: 54%; z-index: 1000;'/>");
            $("#ok").mouseenter(function () {
                $("#ok").attr("src", "jpg/alerts/okgray.png");
                myAudio2 = new Audio('mp3/button1.wav');
                myAudio2.volume = "0.3";
                myAudio2.play();
            });
            $("#ok").mouseout(function () {
                $("#ok").attr("src", "jpg/alerts/ok.png");
            });
            $("#ok").click(function () {
                myAudio3 = new Audio('mp3/heavyButton.wav');
                myAudio3.play();
                $("#maksymalnailoscgraczy").remove();
                $("#ok").remove();
            });
            document.getElementById("NickName").value = ""
        } else {
            game();
        }
    })
    client.on("Ready", function (data) {
        if (!data.allReady) {
            $("#canvasDIV").append("<div id='loadingScreen' style='position: absolute; background-color: silver; opacity: 0.4; width: 100vw; height: 100vh; z-index: 1000;'></div>")
            $("#canvasDIV").append("<img src='jpg/game/loading.gif' id='loading' alt='loading' style='position: absolute;left: 50%; top: 20vh; transform: translate(-50%, 0); width: 150px; height: 150px; z-index: 1000;'/>");
            $("#canvasDIV").append("<img src='jpg/alerts/loadingIn.png' id='loadingIn' alt='loadingIn' style='position: absolute;left: 50%; top: 45vh; transform: translate(-50%, 0); z-index: 1000;'/>");
            czyj_ruch = true
        }
        else if (data.allReady) {           
            $("#loadingScreen").remove();
            $("#loading").remove();
            $("#loadingIn").remove();
            $("#start").remove();
            //Zaladowanie drugiej planszy, zmiana pozycji kamery
            var siatka2 = new Siatka(1400);          
            scene.add(siatka2.getSiatka())
            camera.position.set(0, 2000, 850)
            camera.lookAt(new THREE.Vector3(1000, 2, 850));
        }
    })
    client.on("Tablica", function (data) {
        console.table(data.tab_statki)
        tab_enemy = data.tab_statki;
        enemy = true;
    })
    client.on("Ruch", function (data) {
        czyj_ruch = !czyj_ruch
        ogienLicznik = data.licznik;
        var geo = new Test();
        if (data.trafione) {
            czy_traf = true;
            scene.add(geo.getMesh())
            geo.getMesh().position.set(data.x, 69, (data.z - 1200))
            geo.getMesh().scale.set(100, 100, 100);
            fireReady = true;
        } else {
            czy_traf = false;
            scene.add(geo.getMesh());
            geo.getMesh().scale.set(1, 1, 1);
            geo.getMesh().rotation.x = Math.PI / 2;
            //console.log("ZIEMEK");
            console.log(geo.getMesh());
            geo.getMesh().position.set(data.x, 24, (data.z - 1200))
        }
        clearInterval(intervalTura);
        $("#tura").remove();
        /*if (data.trafione) {
            geo.getMesh().material = new THREE.MeshBasicMaterial({
                color: 0xff0000, side: THREE.DoubleSide, map: null, fog: false, wireframe: false
            });
        } else if (!data.trafione) {
            geo.getMesh.material = new THREE.MeshBasicMaterial({
                color: 0x0000ff, side: THREE.DoubleSide, map: null, fog: false, wireframe: false
            });
        }
        */
    })
}