function Ship(size, obrot, x, z) {
    
    if (obrot) {
        var geometry = new THREE.CubeGeometry(100 * size, 100, 100, 1, 1, 1);
    }
    else {
        var geometry = new THREE.CubeGeometry(100, 100, 100 * size, 1, 1, 1);
    }


    var material = new THREE.MeshBasicMaterial({
        color: 0x0000ff, side: THREE.DoubleSide, fog: false, transparent: false, opacity: 0, wireframe: true
    });

    var mesh1 = new THREE.Mesh(geometry, material);
    
    var mesh = new THREE.Object3D();
   // mesh.add(mesh1);
    if (obrot) {
        mesh.position.x = x + (size - 1) * 50;
        mesh.position.z = z - (size - 1) * 50;
    } else {
        mesh.position.x = x - (size - 1) * 50;
        mesh.position.z = z + (size - 1) * 50;
    }

    mesh.position.y = 65
    if (size == 1) {
        loader.load('models/jednomasztowiec.obj', function (geometry5) {
            //var texture = loader.load('models/A_Kuznet.png');
            texture3 = THREE.ImageUtils.loadTexture('models/Project_206MR_Vikhr_IFQ.png');
            material5 = new THREE.MeshBasicMaterial({ map: texture3 });
            geometry5.scale.set(1, 1, 1);
            geometry5.position.y = -57;
            geometry5.position.z = -10;
            geometry5.rotation.x = -Math.PI / 2;
            if (obrot) {
                geometry5.rotation.z = Math.PI / 2;
                geometry5.position.z = 0;
            } else {
            }
            geometry5.traverse(function (child) {

                if (child instanceof THREE.Mesh) {
                    child.material = material5;
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

            mesh.add(geometry5);
            //group.children[0].fog = false;
            // console.log(group);

        });
    }
    else if (size == 2) {
        loader.load('models/admiral.obj', function (geometry3) {
            //var texture = loader.load('models/A_Kuznet.png');
            texture = THREE.ImageUtils.loadTexture('models/admiral.png');
            material3 = new THREE.MeshBasicMaterial({ map: texture });
            geometry3.scale.set(1.2, 0.8, 1.2);
            geometry3.position.y = 140;
            geometry3.position.z = 30;
            geometry3.rotation.x = -Math.PI / 2;
            if (obrot) {
                geometry3.rotation.z = Math.PI / 2;
                geometry3.position.z = 0;
                geometry3.position.x = 15;
            } else {
            }
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

            mesh.add(geometry3);
            //group.children[0].fog = false;
            // console.log(group);

        });
    }
    else if (size == 3) {
        loader.load('models/dwumasztowiec.obj', function (geometry6) {
            //var texture = loader.load('models/A_Kuznet.png');
            texture6 = THREE.ImageUtils.loadTexture('models/Admiral_Sergey_Gorshkov.png');
            material6 = new THREE.MeshBasicMaterial({ map: texture6 });
            geometry6.scale.set(1.5, 1.5, 1.5);
            geometry6.position.y = -315;
            geometry6.position.z = -30;
            geometry6.rotation.x = -Math.PI / 2;
            if (obrot) {
                geometry6.rotation.z = Math.PI / 2;
                geometry6.position.z = 0;
                geometry6.position.x = -40;
            } else {
            }
            geometry6.traverse(function (child) {

                if (child instanceof THREE.Mesh) {
                    child.material = material6;
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

            mesh.add(geometry6);
            //group.children[0].fog = false;
            // console.log(group);

        });
    }
    else if (size == 4) {
        loader.load('models/kuznetsov.obj', function (geometry4) {
            //var texture = loader.load('models/A_Kuznet.png');
            texture2 = THREE.ImageUtils.loadTexture('models/A_kuznetsov.png');
            material4 = new THREE.MeshBasicMaterial({ map: texture2 });
            geometry4.scale.set(43, 43, 43);
            geometry4.position.y = -68;
            geometry4.rotation.x = -Math.PI / 2;
            if (obrot) {
                geometry4.rotation.z = Math.PI / 2;
                geometry4.position.z = 0;
                geometry4.position.x = 15;
            } else {
            }
            geometry4.traverse(function (child) {

                if (child instanceof THREE.Mesh) {
                    child.material = material4;
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

            mesh.add(geometry4);
            //group.children[0].fog = false;
            // console.log(group);

        });
    }
    //statki_mesh[ile_statkow] = mesh;
    //ile_statkow ++
    //console.log(statki_mesh)
    this.getShip = function () {
        return mesh;
    }
}
