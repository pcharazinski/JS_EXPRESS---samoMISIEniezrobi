const express = require('express')
const router = express.Router();
const indexController = require ('../controllers/index');
router.get ('/', indexController.getIndex);

router.post ('/addme', indexController.postIndex);
router.delete ('/deleteme/:id', indexController.deleteIndex);
router.get ('/editme/:id', indexController.getEdit);
module.exports = router;