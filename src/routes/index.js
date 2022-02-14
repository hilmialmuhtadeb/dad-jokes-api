const router = require('express').Router();
const controller = require('../controllers');

router.get('', controller.getJoke);
router.post('', controller.createJoke);

module.exports = router;