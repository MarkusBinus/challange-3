var express = require('express');
var router = express.Router();
const pageRouter = require('./pages')

router.use(pageRouter)

module.exports = router;
