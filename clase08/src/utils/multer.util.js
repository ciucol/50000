const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, process.cwd() + '/src/images')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  },
})

const uploader = multer({ storage })

module.exports = uploader
