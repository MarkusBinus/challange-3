const router = require('express').Router();
const page = require("../controllers/pagesController");

router.get('/', page.login)
router.get('/dashboard', page.home)
router.get('/car', page.car)
router.get('/addcar', page.addCar)

module.exports = router;