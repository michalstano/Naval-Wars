//scena
var scene;
var camera;
var renderer;
var geometry;
var material;
var sphere;
var geometry2;
var material2;
var plane;
var materialPlane;
var plane2;
var line2;
var linie;
var waterNormals;
var aMeshMirror;
var loader;
var texture;
var texture2;
var intervalTura;
var fireTable;
var ogienLicznik = 1;
var intervalTuraLicznik = 0;
var rozstawianieGotowe = false;
//
var trafionyHelp;
var down = 0;
var up = 0;
var left = 0;
var right = 0;
var plus = 0;
var minus = 0;
var rot1 = 0;
var rot2 = 0;
var licznik = 0;
var group;
var group2;
var newQueen;
var newQueen2;
var usaClick = 0;
var japanClick = 0;
var statek1;
var rotation = 0
var myAudio3;
var fireReady = false;
//Raycaster
var czy_wybrany_statek = false;
var size;
var obrot = false;
var statek_x;
var statek_z;
var statki = [];
var statek_kolizja = false;
//siatka
var siatkaValue = [];
//Pozycja strzału
var ruch_x
var ruch_z
var czy_traf
var czyj_ruch = false;
var nickname;
document.addEventListener("keydown", onKeyDown, false); // naciśnięcie dowolnego klawisza
document.addEventListener("keyup", onKeyUp, false); //zwolnienie dowolnego klawisza
function onLoad() {
    
    //Tablica statków
    for (var i = 0 ; i < 10 ; i++) {
        statki[i] = [];
        for (var j = 1 ; j < 11 ; j++) {
            statki[i][j] = 0;
        }
    }
    console.log(statki)
    //
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(
        45, 
        window.innerWidth / window.innerHeight, 
        0.1, 
        10000 
        );
    renderer = new THREE.WebGLRenderer();
    
    renderer.domElement.id = 'canvasID';
    renderer.setClearColor(0x000000);
    renderer.setSize(window.innerWidth, window.innerHeight - 4);
    //sfera
    geometry = new THREE.SphereGeometry(9000, 100, 100);
 
    material = new THREE.MeshBasicMaterial({
        map: THREE.ImageUtils.loadTexture('jpg/IntroSky.jpg'),
        fog: false

    })
   

    sphere = new THREE.Mesh(geometry, material);
    sphere.material.side = THREE.BackSide;
    scene.add(sphere);
    //morze
    geometry2 = new THREE.PlaneBufferGeometry(5000, 5000, 256, 256);


    material2 = new THREE.MeshBasicMaterial({ map: THREE.ImageUtils.loadTexture("jpg/Water.jpg"), side: THREE.DoubleSide });
    material2.map.wrapS = material2.map.wrapT = THREE.RepeatWrapping;
    material2.map.repeat.set(64, 64);
    plane = new THREE.Mesh(geometry2, material2);
    plane.rotation.x = Math.PI / 2;
    //scene.add(plane);
    //woda

    
    // Load textures		
   waterNormals = new THREE.ImageUtils.loadTexture('jpg/Water.jpg');
   waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;
   var clock = new THREE.Clock();
    // Create the water effect
   Water = new THREE.Water(renderer, camera, scene, {
       textureWidth: 256,
       textureHeight: 256,
       waterNormals: waterNormals,
       alpha: 1.0,
       fog: true,
       side: THREE.DoubleSide,
       
      // sunDirection: directionalLight.position.normalize(),
      //sunColor: 0xffffff,
     waterColor: 0x001e0f,
       betaVersion: 5
   });
   aMeshMirror = new THREE.Mesh(
     //  new THREE.PlaneBufferGeometry(13000, 13000, 10, 10),
       new THREE.CircleGeometry(7100, 32),
       Water.material
   );
   aMeshMirror.add(Water);
   aMeshMirror.rotation.x = Math.PI / 2;
   

 scene.add(aMeshMirror);
scene.fog = new THREE.Fog(0x778899, 20000, 150);

 //scene.add(new THREE.FogExp2(0xbebebe, 0.000075));
    //model
    loader = new THREE.OBJLoader();
    loader.load('models/admiral.obj', function (geometry3) {
        //var texture = loader.load('models/A_Kuznet.png');
       texture = THREE.ImageUtils.loadTexture('models/admiral.png');
       material3 = new THREE.MeshBasicMaterial({ map: texture });
        geometry3.scale.set(6, 6, 6);
        geometry3.position.y = 940;
        geometry3.position.x = -240;
        geometry3.rotation.x = -Math.PI / 2;
        geometry3.rotation.z = - Math.PI / 1.5;
        geometry3.traverse(function (child) {

            if (child instanceof THREE.Mesh) {
                child.material = material3;
                child.material.transparent = true;
                child.castShadow = true;
                child.material.fog = false;
                child.geometry.buffersNeedUpdate;
                child.geometry.uvsNeedUpdate;
                statek1 = new THREE.Geometry().fromBufferGeometry(child.geometry);
            }

        });
        //console.log(statek1);
       //geometry3.material = new THREE.MeshBasicMaterial({ color: 0xFF0000, wireframe: true });
        //geometry3.map = texture;
        group = new THREE.Object3D();
        group.add(geometry3);
        //group.children[0].fog = false;
        scene.add(group);
       // console.log(group);

    });
    loader.load('models/kuznetsov.obj', function (geometry4) {
        //var texture = loader.load('models/A_Kuznet.png');
        texture2 = THREE.ImageUtils.loadTexture('models/A_kuznetsov.png');
        material4 = new THREE.MeshBasicMaterial({ map: texture2});
        geometry4.scale.set(130, 130, 130);
        geometry4.position.y = -70;
        geometry4.position.x = 3500;
        geometry4.position.z = -3500;
        geometry4.rotation.x = -Math.PI / 2;
        geometry4.rotation.z = -Math.PI / 10;
        geometry4.traverse(function (child) {

            if (child instanceof THREE.Mesh) {
                child.material = material4;
                child.material.transparent = true;
                child.castShadow = true;
                //child.material.fog = false;
                child.geometry.buffersNeedUpdate;
                child.geometry.uvsNeedUpdate;
                //statek1 = new THREE.Geometry().fromBufferGeometry(child.geometry);
            }

        });
        //console.log(statek1);
        //geometry3.material = new THREE.MeshBasicMaterial({ color: 0xFF0000, wireframe: true });
        //geometry3.map = texture;
        fireTable = new THREE.Object3D();
        group2 = new THREE.Object3D();
      group2.add(geometry4);
      scene.add(group2);
        // queen is a mesh
     newQueen = group2.clone();

        // make sure to re position to be able to see the new queen!
      newQueen.position.set(1500, 0, 500); // or any other coordinates
      scene.add(newQueen);
        // queen is a mesh
      newQueen2 = group2.clone();

        // make sure to re positionto be able to see the new queen!
      newQueen2.position.set(3000, 0, 0); // or any other coordinates
      scene.add(newQueen2);
    });
    // queen is a mesh


    //materiał - typu kolor
    //fog
   
  //  scene.fog = new THREE.FogExp2(0xbebebe, 0.000275);
 
    //mesh - obiekt wyświetlany na scenie


    //dodanie mesha do sceny          


    //dodanie renderera do diva

    document.getElementById("main").appendChild(renderer.domElement);

    //pozycja kamery - tu zobacz układ współrzędnych THREEJS:

    
    camera.position.x = -1000;
    camera.position.y = 200;
    camera.position.z = -50;

    //nakierowanie kamery na punkt (0,0,0) w przestrzeni

        camera.lookAt(plane.position);

    function animateScene() {
        Water.render();
        //camera.position.x += 1;
        //w tym miejscu ustalamy wszelkie zmiany w projekcie (obrót, skalę, położenie obiektów)
        aMeshMirror.material.uniforms.time.value += 1.0 / 60.0;

        if (group != null) {
            group2.children[0].position.z += 0.35;
            if (group2.children[0].position.z > 10000) {
                group2.children[0].position.z = -4000;
            }
        }
        if (newQueen2 != null) {
            newQueen2.position.z += 0.35;
            if (newQueen2.position.z > 10000) {
                newQueen2.position.z = -4000;
            }
        }
        if (newQueen != null) {
            newQueen.position.z += 0.35;
            if (newQueen.position.z > 10000) {
                newQueen.position.z = -4000;
            }
        }

      //zmieniająca się wartość czyli rotacja obiektu
        // console.log(statek1.vertices);
        //wykonywanie funkcji bez końca ok 60 fps jeśli pozwala na to wydajność maszyny
         requestAnimationFrame(animateScene);

        //ciągłe renderowanie / wyświetlanie widoku sceny nasza kamerą
        //geometry3.position.x += 0.01;
         if (fireReady) {
             var delta = clock.getDelta();
             console.log("KUL");
             var t = clock.elapsedTime;
             for (var i = 0; i < ogienLicznik; i++) {
                 var ogien = scene.getObjectByName("ogien" + i);
                 if (ogien != null) {
                     ogien.update(t);
                 }
             }
         }
        renderer.render(scene, camera);

        if (down == 1) {
            console.log("test");
            camera.position.y = camera.position.y - 2;
        } else if (down == 0) {
            camera.position.y = camera.position.y;
        }
        if (left == 1) {
            camera.position.z = camera.position.z - 2;
        } else if (left == 0) {
            camera.position.z = camera.position.z;
        }
        if (right == 1) {
            camera.position.z = camera.position.z + 2;
        } else if (right == 0) {
            camera.position.z = camera.position.z;
        }
        if (up == 1) {
            camera.position.y = camera.position.y + 2;
        } else if (up == 0) {
            camera.position.y = camera.position.y;
        }
        if (plus == 1) {
            camera.position.x = camera.position.x + 2;
        } else if (plus == 0) {
            camera.position.x = camera.position.x;
        }
        if (minus == 1) {
            camera.position.x = camera.position.x - 2;
        } else if (minus == 0) {
            camera.position.x = camera.position.x;
        }
        if (rot1 == 1) {
            rotation += 0.005;
            camera.position.x = Math.sin(rotation) * 1000;
            camera.position.z = Math.cos(rotation) * 1000;
            camera.lookAt(plane.position)
        }
        if (rot2 == 1) {
            rotation -= 0.005;
            camera.position.x = Math.sin(rotation) * 1000;
            camera.position.z = Math.cos(rotation) * 1000;
            camera.lookAt(plane.position)
        }
    }
    animateScene();
 
    //PORUSZANIE STATKIEM
    document.addEventListener("mousemove", onMouseMove, false);
    document.addEventListener("mousedown", onMouseDown, false);

    var raycaster = new THREE.Raycaster(); // obiekt symulujący "rzucanie" promieni
    var mouseVector = new THREE.Vector2() // wektor (x,y) wykorzystany bedzie do określenie pozycji myszy na ekranie

    var intersects
    var zawsze_siatka
    function onMouseMove(event) {
        mouseVector.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouseVector.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouseVector, camera);

        intersects = raycaster.intersectObjects(scene.children, true);
        //Szukanie objektu Siatki ( plynne dzialanie poruszania statkiem )
        zawsze_siatka = 0;
        for (var i = 0 ; i < intersects.length ; i++) {
            if (intersects[i].object.name == "Siatka") {
                zawsze_siatka = i;
            }
        }
        //console.log(intersects[zawsze_siatka].object.userData);
        //console.log(intersects)
        //USTAWIANIE STATKOW NA PLANSZY
        var kolizja_krawedz = 0;
        if (!obrot) {
            if (intersects.length > 0 && czy_wybrany_statek && intersects[zawsze_siatka].object.name == "Siatka" && intersects[zawsze_siatka].object.position.x <= 1600 && intersects[zawsze_siatka].object.position.x >= 700 && intersects[zawsze_siatka].object.position.z >= -200 && intersects[zawsze_siatka].object.position.z <= (700 - (size - 1) * 100)) {
                statek.getShip().position.x = intersects[zawsze_siatka].object.position.x;
                statek.getShip().position.z = intersects[zawsze_siatka].object.position.z + (size - 1) * 50;
                //console.log("1")

            } else if (intersects[zawsze_siatka].object.position.z >= (700 - (size - 1) * 100) && intersects[zawsze_siatka].object.position.x <= 1600 && czy_wybrany_statek) {
                statek.getShip().position.x = intersects[zawsze_siatka].object.position.x;
                statek.getShip().position.z = 700 - (size - 1) * 100 + (size - 1) * 50;
                kolizja_krawedz = 1;
                //console.log("2")
            }
        } else {
            if (intersects.length > 0 && czy_wybrany_statek && intersects[zawsze_siatka].object.name == "Siatka" && intersects[zawsze_siatka].object.position.x <= 1600 - (size - 1) * 100 && intersects[zawsze_siatka].object.position.x >= 700 && intersects[zawsze_siatka].object.position.z >= -200 && intersects[zawsze_siatka].object.position.z <= 700) {
                statek.getShip().position.x = intersects[zawsze_siatka].object.position.x + (size - 1) * 50;
                statek.getShip().position.z = intersects[zawsze_siatka].object.position.z;
                //console.log("3")

            } else if (intersects[0].object.position.x >= (1600 - (size - 1) * 100) && intersects[zawsze_siatka].object.position.z >= -200 && czy_wybrany_statek) {
                statek.getShip().position.x = 1600 - (size - 1) * 100 + (size - 1) * 50;
                statek.getShip().position.z = intersects[zawsze_siatka].object.position.z;
                kolizja_krawedz = 1;
                //console.log("4")
            }
        }
        //SPRAWDZANIE KOLIZJI Z INNYMI STATKAMI
        if (!obrot) {
            for (var i = -1 ; i <= 1 ; i++) {
                for (var j = (-1 - (kolizja_krawedz) * (size - 1)) ; j <= 1 + (size - 1) ; j++) {
                    if ((intersects[zawsze_siatka].object.userData.i + i) <= 9 && (intersects[zawsze_siatka].object.userData.i + i) >= 0 && (intersects[zawsze_siatka].object.userData.j + j) <= 10 && (intersects[zawsze_siatka].object.userData.j + j) >= 1) {
                        if (statki[(intersects[zawsze_siatka].object.userData.i + i)][(intersects[zawsze_siatka].object.userData.j + j)] == 1 && czy_wybrany_statek) {
                            statek.getShip().children[0].traverse(function (child) {
                                if (child instanceof THREE.Mesh) {

                                    child.material = new THREE.MeshBasicMaterial({
                                        color: 0xff0000, side: THREE.DoubleSide, map: null, fog: false, wireframe: false
                                    });
                                }

                            });
                            i = 10;
                            j = 10;                            
                            statek_kolizja = true;
                            //Kolizja
                        } else if (statki[(intersects[zawsze_siatka].object.userData.i + i)][(intersects[zawsze_siatka].object.userData.j + j)] == 0 && czy_wybrany_statek) {
                            statek.getShip().children[0].traverse(function (child) {
                                
                                if (child instanceof THREE.Mesh) {
                                    if (size == 1) {
                                        child.material = material5;
                                    } else if (size == 2) {
                                        child.material = material3;
                                    } else if (size == 3) {
                                        child.material = material6;
                                    } else if (size == 4) {
                                        child.material = material4;
                                    }
                                }

                            });
                            statek_kolizja = false;
                            //Brak kolizji
                        }
                    }
                }
            }
        } else if (obrot) {
            for (var i = (-1 - (kolizja_krawedz) * (size)) ; i <= 1 + (size - 1) ; i++) {
                for (var j = -1 ; j <= 1 ; j++) {
                    if ((intersects[zawsze_siatka].object.userData.i + i) <= 9 && (intersects[zawsze_siatka].object.userData.i + i) >= 0 && (intersects[zawsze_siatka].object.userData.j + j) <= 10 && (intersects[zawsze_siatka].object.userData.j + j) >= 1) {
                        if (statki[(intersects[zawsze_siatka].object.userData.i + i)][(intersects[zawsze_siatka].object.userData.j + j)] == 1 && czy_wybrany_statek) {
                            statek.getShip().children[0].traverse(function (child) {

                                if (child instanceof THREE.Mesh) {
                                    child.material = new THREE.MeshBasicMaterial({
                                        color: 0xff0000, side: THREE.DoubleSide, map: null, fog: false, wireframe: false
                                    });
                                }

                            });
                            i = 10;
                            j = 10;
                            statek_kolizja = true;
                            //Kolizja
                        } else if (statki[(intersects[zawsze_siatka].object.userData.i + i)][(intersects[zawsze_siatka].object.userData.j + j)] == 0 && czy_wybrany_statek) {
                            statek.getShip().children[0].traverse(function (child) {

                                if (child instanceof THREE.Mesh) {
                                    if (size == 1) {
                                        child.material = material5;
                                    } else if (size == 2) {
                                        child.material = material3;
                                    } else if (size == 3) {
                                        child.material = material6;
                                    } else if (size == 4) {
                                        child.material = material4;
                                    }
                                }

                            });
                            statek_kolizja = false;
                            //Brak kolizji
                        }
                    }
                }
            }
        }
        //Pozycja statku ( do obracania )
        statek_x = statek.getShip().position.x;
        statek_z = statek.getShip().position.z;
        
    }
    function onMouseDown() {
        if (enemy && czyj_ruch) {//Sprawdzenie czy juz zostala utworzona druga plansza i kogo jest ruch
            for (var i = 0 ; i < intersects.length ; i++) {
                if (intersects[i].object.name == "Siatka") {
                    //console.log(intersects[i].object.position)
                    if (intersects[i].object.position.z >= 1000 && intersects[i].object.position.z <= 1900 && intersects[i].object.position.x <= 1600 && intersects[i].object.position.x >= 700) {
                        //console.log((intersects[i].object.position.x / 100 - 7), (intersects[i].object.position.z / 100 - 9))
                        var geo = new Test();
                        if (tab_enemy[(intersects[i].object.position.x / 100 - 7)][(intersects[i].object.position.z / 100 - 9)] == 1) {
                            czy_traf = true
                            scene.add(geo.getMesh())
                            geo.getMesh().scale.set(100, 100, 100);
                            geo.getMesh().position.set(intersects[i].object.position.x, intersects[i].object.position.y + 50, intersects[i].object.position.z)
                            fireReady = true;
                            ruch_x = geo.getMesh().position.x;
                            ruch_z = geo.getMesh().position.z;
                            console.log("trafione")
                            tab_enemy[(intersects[i].object.position.x / 100 - 7)][(intersects[i].object.position.z / 100 - 9)] = 2
                            // 2 - TRAFIONE

                        } else if (tab_enemy[(intersects[i].object.position.x / 100 - 7)][(intersects[i].object.position.z / 100 - 9)] == 0) {
                            czy_traf = false
                            scene.add(geo.getMesh())
                            geo.getMesh().scale.set(1, 1, 1);
                            geo.getMesh().rotation.x = Math.PI / 2;
                            geo.getMesh().position.set(intersects[i].object.position.x, intersects[i].object.position.y + 5, intersects[i].object.position.z)
                            tab_enemy[(intersects[i].object.position.x / 100 - 7)][(intersects[i].object.position.z / 100 - 9)] = 3
                            ruch_x = geo.getMesh().position.x;
                            ruch_z = geo.getMesh().position.z;
                            // 3 - NIETRAFIONE
                            console.log("nietrafione")
                            czy_traf = false

                        }
                        var ile_statkow = 0;
                        for (var i = 0 ; i <= 9 ; i++) {
                            for (var j = 1 ; j <= 10 ; j++) {
                                console.log(i,j)
                                if (tab_enemy[i][j] == 1) {
                                    ile_statkow++
                                }
                            }
                        }
                        if (ile_statkow == 0) {
                            $("#canvasDIV").append("<div id='YouWin' style='position: absolute; top: 200px; left: 50%; transform: translate(-50%, 0); z-index: 1000; height: 514px; width: 900px;' ><div>");
                            $("#YouWin").append("<img src='jpg/alerts/win.png' id='ImgLose' alt='logowanie' style='position: absolute; z-index: 999;'/>");
                            clearInterval(intervalTura);
                            $("#tura").remove();
                            net.wygrana()
                        } else {
                            czyj_ruch = !czyj_ruch;
                            net.ruch();
                        }
                        $("#canvasDIV").append("<img src='jpg/alerts/tura1.png' id='tura' alt='tura' style='position: absolute;left: 50%; top: 10vh; transform: translate(-50%, 0); z-index: 1000;'/>")
                        intervalTura = setInterval(function () {
                            if (intervalTuraLicznik == 0) {
                                $("#tura").attr("src", "jpg/alerts/tura1.png");
                                intervalTuraLicznik++;
                            } else if (intervalTuraLicznik == 1) {
                                $("#tura").attr("src", "jpg/alerts/tura2.png");
                                intervalTuraLicznik++;
                                } else if (intervalTuraLicznik == 2){
                                    $("#tura").attr("src", "jpg/alerts/tura3.png");
                                    intervalTuraLicznik = 0;
                                }
                    }, 500);
                    }
                }
            }
        }
        else if (!statek_kolizja) {
            var p = 1;
            if (!obrot) {
                for (var i = 0 ; i < size ; i++) {
                    if ((intersects[zawsze_siatka].object.userData.j + i) >= 11) {
                        statki[intersects[zawsze_siatka].object.userData.i][(intersects[zawsze_siatka].object.userData.j - p)] = 1;
                        p++;
                    } else if ((intersects[zawsze_siatka].object.userData.j + i) <= 10) {
                        statki[intersects[zawsze_siatka].object.userData.i][(intersects[zawsze_siatka].object.userData.j + i)] = 1;
                    }
                }
            } else if (obrot) {
                for (var i = 0 ; i < size ; i++) {
                    if ((intersects[zawsze_siatka].object.userData.i + i) >= 10) {
                        statki[intersects[zawsze_siatka].object.userData.i - p][(intersects[zawsze_siatka].object.userData.j)] = 1;
                        p++;
                    } else if ((intersects[zawsze_siatka].object.userData.i + i) <= 9) {
                        statki[intersects[zawsze_siatka].object.userData.i + i][(intersects[zawsze_siatka].object.userData.j)] = 1;
                    }
                }
            }
            //console.table(statki)
            czy_wybrany_statek = false;
            obrot = false;
        }
        else if (statek_kolizja) {
            //alert("Nie mozesz tutaj postawic statku")
        }
    }
    //
}
function onKeyDown(event) {

    var keyCode = event.which; // kod klawisza

    //console.log(keyCode);

    switch (keyCode) {

        /*case 40:
            // console.log("naciskasz DOWN");
            down = 1;
            break;
        case 38:
            // console.log("naciskasz DOWN");
            up = 1;
            break;
        case 37:
            //console.log("naciskasz DOWN");
            left = 1;
            break;
        case 39:
            //console.log("naciskasz DOWN");
            right = 1;
            break;
        case 87:
            //console.log("naciskasz DOWN");
            plus = 1;
            break;
        case 83:
            //console.log("naciskasz DOWN");
            minus = 1;
            break;
        case 65:
            //console.log("naciskasz DOWN");
            rot1 = 1;
            break;
        case 68:
            //console.log("naciskasz DOWN");
            rot2 = 1;
            break;*/
            //OBRACANIE STATKIEM
        case 81:
            if (czy_wybrany_statek) {
                obrot = !obrot
                scene.remove(statek.getShip())
                //console.log(statek_x, statek_z, obrot)
                //ile_statkow-=1;
                statek = new Ship(size, obrot, statek_x, statek_z)
                if (obrot) { statek_x += (size - 1) * 50;; statek_z -= (size - 1) * 50; } else if (!obrot) { statek_x -= (size - 1) * 50;; statek_z += (size - 1) * 50; }
                scene.add(statek.getShip())
                //console.log(statki_mesh[ile_statkow-1],statek.getShip())
            }
            break;
    }
}


function onKeyUp(event) {

    var keyCode = event.which; // kod klawisza

    //console.log(keyCode);

    switch (keyCode) {

        /*case 40:
            console.log("zwalniasz A");
            down = 0;
            break;
        case 38:
            // console.log("naciskasz DOWN");
            up = 0;
            break;
        case 37:
            //console.log("naciskasz DOWN");
            left = 0;
            break;
        case 39:
            //console.log("naciskasz DOWN");
            right = 0;
            break;
        case 87:
            //console.log("naciskasz DOWN");
            plus = 0;
            break;
        case 83:
            //console.log("naciskasz DOWN");
            minus = 0;
            break;
        case 65:
            //console.log("naciskasz DOWN");
            rot1 = 0;
            break;
        case 68:
            //console.log("naciskasz DOWN");
            rot2 = 0;
            break;*/
    }

}