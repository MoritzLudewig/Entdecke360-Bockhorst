/*Main Panorama*/

const panoramaImage = new PANOLENS.ImagePanorama("../../Bilder/VonWesten.jpg");
const imageContainer = document.querySelector(".image-container");

const viewer = new PANOLENS.Viewer({
    container: imageContainer,
});

viewer.add(panoramaImage);


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

const infospot = new PANOLENS.Infospot(500, '../../Bilder/Symbols/versmoldWappen.png');
infospot.position.set(-4000, 500, -6000);
infospot.addHoverText("Versmold", 50);
infospot.addEventListener('click', function() {
    window.open('../../Orte/Versmold/index.html', '_self');
})
panoramaImage.add(infospot);

const infospot2 = new PANOLENS.Infospot(400);
infospot2.position.set(4000, 0, 0);
infospot2.addHoverText("Überblick", 50);
infospot2.addEventListener('click', function() {
    window.open('../../Orte/Ueberblick/index.html', '_self');
})
panoramaImage.add(infospot2);

const infospot3 = new PANOLENS.Infospot(300);
infospot3.position.set(4000, -800, -800);
infospot3.addHoverText("Zentrum", 50);
infospot3.addEventListener('click', function() {
    window.open('../../Orte/Zentrum/index.html', '_self');
})
panoramaImage.add(infospot3);