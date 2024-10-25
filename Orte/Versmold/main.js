/*Main Panorama*/

const panoramaImage = new PANOLENS.ImagePanorama("../../Bilder/Versmold.jpg");
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

const infospot = new PANOLENS.Infospot(500);
infospot.position.set(4000, 500, -6000);
infospot.addHoverText("Bockhorst", 50);
infospot.addEventListener('click', function() {
    window.open('../../orte/Ueberblick/index.html', '_self');
})

panoramaImage.add(infospot);