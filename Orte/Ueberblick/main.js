/*Main Panorama*/

const panoramaImage = new PANOLENS.ImagePanorama("../../Bilder/Ueberblick.jpg");
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
infospot.addHoverText("Versmold", 60);
infospot.addEventListener('click', function() {
    window.open('../../Orte/Versmold/index.html', '_self');
})
panoramaImage.add(infospot);

const infospot2 = new PANOLENS.Infospot(500, '../../Bilder/Symbols/Logos_Vereine_TG_Bockhorst_500px.png');
infospot2.position.set(7000, 200, -500);
infospot2.addHoverText("Sportplatz", 60);
infospot2.addEventListener('click', function() {
    window.open('../../Orte/Sportplatz/index.html', '_self');
})
panoramaImage.add(infospot2);

const infospot3 = new PANOLENS.Infospot(500);
infospot3.position.set(-7000, 200, 500);
infospot3.addHoverText("Blick aus Westen", 60);
infospot3.addEventListener('click', function() {
    window.open('../../Orte/VonWesten/index.html', '_self');
})
panoramaImage.add(infospot3);

const infospot4 = new PANOLENS.Infospot(500);
infospot4.position.set(7000, -4000, -3000);
infospot4.addHoverText("Zentrum", 60);
infospot4.addEventListener('click', function() {
    window.open('../../Orte/Zentrum/index.html', '_self');
})
panoramaImage.add(infospot4);