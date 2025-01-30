/* dependency */
const multer = require('multer');
const fs = require('fs');

/* chk upload path */
try {
    fs.readdirSync('uploads');
} catch(err){
    console.error('Error: no "uploads" directory, we will create one for you.');
    fs.mkdirSync('uploads');
}

const storage = multer.diskStorage({
    destination(req, file, done){
        done(null, 'uploads');
    }, filename(req, file, done){
        const ext = path.extname(file.originalname);
        done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    }
});
const uploadStorage = multer({ storage: storage, limits: {fileSize: 100 * 1024 * 1024}});

module.exports = uploadStorage;