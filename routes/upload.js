const { Router } = require('express');
const { check } = require('express-validator')

const cors = require('cors');

const multer = require('multer');
const sharp = require('sharp');


const helperImg = (filePath, fileName, size = 700) => {
    return sharp(filePath)
    .resize(size)
    .toFile(`./public/uploads/${fileName}`);
}


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,  './public/uploads'); // TODO: raw!

    },
    filename: (req, file, cb) => {
        const ext =  file.originalname.split('.').pop();   // TODO: ejemplo: nombrearchivo.png ---> png
        cb(null, `${Date.now()}.${ext}`);
    }

})

const upload = multer({ storage });

const router = Router();

router.post('/', upload.single('file'), (req, res) => {

    const fileUploaded = req.file;
    fileNameUploaded = fileUploaded.filename;

    if (fileUploaded.size>500000) {  // TODO: PENDIENTE GENERAR VARIABLE PARA EL TAMAÑO DEL ARCHIVO
        fileNameUploaded = 'resize-'+fileUploaded.filename;
        helperImg(fileUploaded.path,fileNameUploaded);
    }
    res.send({result: 'OK',
                fileName:fileNameUploaded});

})

module.exports = router;