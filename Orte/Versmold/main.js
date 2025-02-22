/*Main Panorama*/

const panoramaImage = new PANOLENS.ImagePanorama("../../Bilder/Versmold.jpg");
const imageContainer = document.querySelector(".image-container");

const viewer = new PANOLENS.Viewer({
    container: imageContainer,
    controlBar: false,
    autoHideInfospot: false,
});

viewer.add(panoramaImage);

panoramaImage.addEventListener('load', () => {
    viewer.tweenControlCenter(new THREE.Vector3(4000, -2000, -6000),0);
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
infospot.position.set(4000, 500, -6000);
infospot.addHoverText("Bockhorst", 50);
infospot.addEventListener('click', function() {
    window.open('../../Orte/Ueberblick/index.html', '_self');
})

panoramaImage.add(infospot);