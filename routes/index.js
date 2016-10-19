var express = require('express');
var router = express.Router();
var upload = require('multer')({ dest: 'uploads/' });
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'File Metadata Microservice' });
});

router.post('/get-file-size', upload.single('file'), function(req, res, next) {
  res.json({size: req.file.size})
  fs.unlink(req.file.path);
});

module.exports = router;
