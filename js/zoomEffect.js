// function areaZoom() {
//     const areaBoxes = document.querySelectorAll('.area-box');

//     areaBoxes.forEach(areaBox => {
//         const image = areaBox.querySelector('.image');
//         const zoomInButton = areaBox.querySelector('.zoom-in');
//         const zoomOutButton = areaBox.querySelector('.zoom-out');

//         let scale = 1;
//         const maxScale = 3;
//         const minScale = 1;

//         function updateZoom() {
//             image.style.transform = `scale(${scale})`;
//             // image.style.cursor = scale > 1 ? 'zoom-out' : 'zoom-in';
//             image.style.cursor = "grab";
//         }

//         zoomInButton.addEventListener('click', () => {
//             if (scale < maxScale) {
//                 scale += 0.1;
//                 scale = Math.min(scale, maxScale);
//                 updateZoom();
//             }
//         });

//         zoomOutButton.addEventListener('click', () => {
//             if (scale > minScale) {
//                 scale -= 0.1;
//                 scale = Math.max(scale, minScale);
//                 updateZoom();
//             }
//         });

//         image.addEventListener('wheel', (event) => {
//             event.preventDefault();

//             const delta = Math.sign(event.deltaY);
//             if (delta < 0 && scale < maxScale) {
//                 scale += 0.1;
//             } else if (delta > 0 && scale > minScale) {
//                 scale -= 0.1;
//             }

//             scale = Math.min(Math.max(scale, minScale), maxScale);

//             updateZoom();
//         });
//     });
// }

// areaZoom();


