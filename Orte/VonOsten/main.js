/*Main Panorama*/

const panoramaImage = new PANOLENS.ImagePanorama("../../Bilder/vonOsten.jpg");
const imageContainer = document.querySelector(".image-container");

const viewer = new PANOLENS.Viewer({
    container: imageContainer,
    controlBar: false,
    autoHideInfospot: false,
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

const infospot = new PANOLENS.Infospot(500);
infospot.position.set(4000, 500, -1000);
infospot.addHoverText("Bockhorst", 50);
infospot.addEventListener('click', function() {
    window.open('../../Orte/Ueberblick/index.html', '_self');
})
panoramaImage.add(infospot);

const infospot2 = new PANOLENS.Infospot(500);
infospot2.position.set(6000, 500, 0);
infospot2.addHoverText("Blick aus Westen", 50);
infospot2.addEventListener('click', function() {
    window.open('../../Orte/Versmold/index.html', '_self');
})
panoramaImage.add(infospot2);