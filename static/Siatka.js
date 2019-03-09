function Siatka(z) {
    var obj = new THREE.Object3D();
    var lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000, fog: false });
    linie = new THREE.Geometry();
    linie.vertices.push(new THREE.Vector3(0, 0, 0));
    linie.vertices.push(new THREE.Vector3(100, 0, 0));
    linie.vertices.push(new THREE.Vector3(100, 100, 0));
    linie.vertices.push(new THREE.Vector3(0, 100, 0));
    linie.vertices.push(new THREE.Vector3(0, 0, 0));
    renderer.sortObjects = false
    for (var i = -5; i < 6; i++) {
        for (var j = -5; j < 6; j++) {
            lineMaterial.color = new THREE.Color(0, 0, 0);
            var plane2Geometry = new THREE.PlaneGeometry(100, 100);
            if (i == 5) {
                var siatkaLicznik = j + 5;
                var texture = new THREE.ImageUtils.loadTexture('jpg/siatka/' + siatkaLicznik + '.png');
                materialPlane = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: texture, fog: false });
            } else if (j == -5 && i != 5) {
                var siatkaLicznikB = 15 - i;
                var texture = new THREE.ImageUtils.loadTexture('jpg/siatka/' + siatkaLicznikB + '.png');
                materialPlane = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, map: texture, fog: false });
            }
            else {
                materialPlane = new THREE.MeshBasicMaterial({ side: THREE.DoubleSide, wireframe: false });
                materialPlane.color = new THREE.Color(255, 255, 255);
                materialPlane.transparent = true;
                materialPlane.opacity = 0.02;
            }
            plane2 = new THREE.Mesh(plane2Geometry, materialPlane);
            plane2.rotation.z = -Math.PI / 2;
            plane2.rotation.x = Math.PI / 2;
            plane2.position.y = 19;
            plane2.position.x = i * 100 + 1200;
            plane2.position.z = j * 100 + z;
            plane2.userData = { i: i + 5, j: j + 5 };
            //console.log(plane2.userData)
            line2 = new THREE.Line(linie, lineMaterial);
            line2.fog = false;
            line2.rotation.x = Math.PI / 2;
            line2.position.x = -50 + i * 100 + 1200;
            line2.position.z = -50 + j * 100 + z;
            line2.position.y = 20;
            plane2.name = "Siatka";
            line2.material.color = new THREE.Color(255, 255, 255);
            line2.material.transparent = true;
            line2.material.opacity = 0.2;
            obj.add(plane2);
            obj.add(line2);
        }
    }
    this.getSiatka = function () {
        return obj;
    }
}