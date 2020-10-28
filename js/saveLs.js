//Saves uploaded images to local storage

var imageInput = document.getElementById('image');
imageInput.addEventListener('change', loadImageFunc);

function loadImageFunc(event) {

  var image = document.getElementById('loadedImg');
  image.src = URL.createObjectURL(event.target.files[0]);
  console.log('2');
}
// Get a reference to the image element
var savedImg = document.getElementById('loadedImg');

// Take action when the image has loaded
savedImg.addEventListener('load', function () {
  var imgCanvas = document.createElement('canvas'),
    imgContext = imgCanvas.getContext('2d');

  // Make sure canvas is as big as the picture
  imgCanvas.width = savedImg.width;
  imgCanvas.height = savedImg.height;

  // Draw image into canvas element
  imgContext.drawImage(savedImg, 0, 0, savedImg.width, savedImg.height);
  console.log(imgContext);
  // Get canvas contents as a data URL
  var imgAsDataURL = imgCanvas.toDataURL('image/png');
  imgFile64 = imgAsDataURL;
  console.log(imgFile64.size);
}, false);
