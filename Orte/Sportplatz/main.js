/*Main Panorama*/

const panoramaImage = new PANOLENS.ImagePanorama("../../Bilder/Sportplatz.jpg");
const imageContainer = document.querySelector(".image-container");

const viewer = new PANOLENS.Viewer({
    container: imageContainer,
    controlBar: false,
});

viewer.add(panoramaImage);

panoramaImage.addEventListener('load', () => {
    viewer.tweenControlCenter(new THREE.Vector3(5000, -2000, -2500),0);
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
infospot.position.set(-6000, 500, 0);
infospot.addHoverText("Bockhorst", 60);
infospot.addEventListener('click', function() {
    window.open('../../Orte/Ueberblick/index.html', '_self');
})
panoramaImage.add(infospot);

const infospot2 = new PANOLENS.Infospot(500, '../../Bilder/Symbols/Logos_Vereine_TG_Bockhorst_500px.png');
infospot2.position.set(-2000, -2000, 2000);
infospot2.addHoverText("TG Bockhorst", 100);
infospot2.addEventListener('click', function() {
    window.open('https://www.tg-bockhorst.de/', '_self');
})
panoramaImage.add(infospot2);

const infospot3 = new PANOLENS.Infospot(500, '../../Bilder/Symbols/gslobo.png');
infospot3.position.set(5000, -2000, -2500);
infospot3.addHoverText("Grundschule Bockhorst", 60);
infospot3.addEventListener('click', function() {
    window.open('https://grundschule-loxten-bockhorst.de/', '_self');
})
panoramaImage.add(infospot3);