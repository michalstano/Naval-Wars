function Test() {
    var fireTex = THREE.ImageUtils.loadTexture("jpg/fire/THREE.Fire-master/Fire.png");
    var wireframeMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(0xffffff),
        wireframe: true,
        fog: false
    });
    fire = new THREE.Fire(fireTex);
    fire.material.fog = false;
    var wireframe = new THREE.Mesh(fire.geometry, wireframeMat.clone());
    fire.add(wireframe);
    wireframe.visible = false;
    var pomOgien = ogienLicznik - 1;
    fire.name = "ogien" + pomOgien;
    //

    var planeFiregeometry = new THREE.PlaneGeometry(100,100);
    var planeFirematerial = new THREE.MeshBasicMaterial({ color: 0x990000, side: THREE.DoubleSide, fog: false, transparent: true, opacity: 0.4 });
    var planeFire = new THREE.Mesh(planeFiregeometry, planeFirematerial);
    this.getMesh = function () {
        if (czy_traf) {
            ogienLicznik++;
            return fire;
        } else {
            return planeFire;
        }
    }
}