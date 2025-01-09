const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './src/assets/images'; // Carpeta de imágenes originales
const outputDir = './dist/images'; // Carpeta de imágenes optimizadas

//const inputDir = 'E:/Master/Workspaces/Proyecto/TFM/pauldarrak-img/2425/staff'; // Carpeta de imágenes originales
//const outputDir = 'E:/Master/Workspaces/Proyecto/TFM/pauldarrak-img/2425/staff'; // Carpeta de imágenes optimizadas

// Asegúrate de que la carpeta de salida exista
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Procesa todas las imágenes en la carpeta de entrada
fs.readdirSync(inputDir).forEach(file => {
    const inputFilePath = path.join(inputDir, file);
    const outputFileBase = path.join(outputDir, path.parse(file).name);

    // Genera múltiples formatos y tamaños
    sharp(inputFilePath)
    .resize(1200) // Redimensiona la imagen
    .toFormat('webp') // Convierte a WebP
    .toFile(`${outputFileBase}-1200.webp`);

    sharp(inputFilePath)
        .resize(800) // Redimensiona la imagen
        .toFormat('webp') // Convierte a WebP
        .toFile(`${outputFileBase}-800.webp`);

    sharp(inputFilePath)
        .resize(400) // Otra resolución
        .toFormat('webp')
        .toFile(`${outputFileBase}-400.webp`);

    sharp(inputFilePath)
        .resize(400) // Otra resolución
        .toFormat('webp')
        .toFile(`${outputFileBase}-100.webp`);

    /*sharp(inputFilePath)
        .resize(800)
        .toFormat('jpeg')
        .toFile(`${outputFileBase}-800.jpeg`);

    sharp(inputFilePath)
        .resize(400)
        .toFormat('jpeg')
        .toFile(`${outputFileBase}-400.jpeg`);*/
});
console.log('Optimización completada.');
