const sharp = require('sharp');
const Jimp = require("jimp");

let image = 'input.jpg'

sharp(image)
  .metadata()
  .then(function(metadata){
    console.log(metadata.format, metadata.width, metadata.height);
  });


sharp(image)
  .resize(800)
  .toFile('output.jpg', function(err) {
    // output.jpg is a 300 pixels wide and 200 pixels high image
    // containing a scaled and cropped version of input.jpg
    if (err)
        console.log(err);
  });


// Jimp.read('input.jpg')
// .then(function (input) {
//     input.resize(800, Jimp.AUTO)
//         .quality(50)                 // set JPEG quality 
//         .write("updated.jpg"); // save 
// })
// .catch(function (err) {
//     console.error(err);
// });