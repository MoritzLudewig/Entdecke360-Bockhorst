/*Main Panorama*/

const panoramaImage = new PANOLENS.ImagePanorama("../../Bilder/Zentrum.jpg");
const imageContainer = document.querySelector(".image-container");

const viewer = new PANOLENS.Viewer({
    container: imageContainer,
    controlBar: false,
});

viewer.add(panoramaImage);

panoramaImage.addEventListener('load', () => {
    viewer.tweenControlCenter(new THREE.Vector3(6000, -1000, 3000),0);
});

/*Menu*/

const menuIcon = document.querySelector('.menu-icon');
const menuContainer = document.querySelector('.menu-container');

menuIcon.addEventListener('click', () => {
    menuContainer.classList.toggle('open');
});

panoramaImage.addEventListener('click', () => {
    menuContainer.classList.remove('open');
});


/*Infospots*/

const infospot = new PANOLENS.Infospot(500);
infospot.position.set(-5000, 500, -4000);
infospot.addHoverText("Blick aus Westen", 60);
infospot.addEventListener('click', function() {
    window.open('../../Orte/VonWesten/index.html', '_self');
})
panoramaImage.add(infospot);

const infospot2 = new PANOLENS.Infospot(500);
infospot2.position.set(-5000, 1500, -2000);
infospot2.addHoverText("Überblick", 60);
infospot2.addEventListener('click', function() {
    window.open('../../Orte/Ueberblick/index.html', '_self');
})
panoramaImage.add(infospot2);

const infospot3 = new PANOLENS.Infospot(400, '../../Bilder/Symbols/Logos_Vereine_TG_Bockhorst_500px.png');
infospot3.position.set(3000, 400, 3000);
infospot3.addHoverText("Sportplatz", 70);
infospot3.addEventListener('click', function() {
    window.open('../../Orte/Sportplatz/index.html', '_self');
})
panoramaImage.add(infospot3);



// Funktion zur Überprüfung des Blickwinkels
function checkInfospotVisibility() {
    const cameraDirection = viewer.getCamera().getWorldDirection(new THREE.Vector3());
    const infospotDirection = infospot.position.clone().normalize();

    // Winkel zwischen Kamera und Infospot berechnen
    const angle = cameraDirection.angleTo(infospotDirection);

    // Wenn der Winkel kleiner als 10 Grad (in Radiant) ist, zeige den Text an
    if (angle < (10 * Math.PI) / 180) { // 10° in Radiant
        infospot.show(); // Zeigt den Infospot-Text an
    } else {
        infospot.hide(); // Versteckt den Infospot-Text
    }
}

viewer.addUpdateCallback(checkInfospotVisibility);