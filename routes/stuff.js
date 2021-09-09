const express = require('express');
const router = express.Router();
const stuffCtrl = require('../controllers/stuff');




router.post('/ ',stuffCtrl.createThing );
router.get('/:id', stuffCtrl.getOneThing);
router.delete('/:id', stuffCtrl.deleteThing);
router.put('/:id', stuffCtrl.modifyThing);
router.use('/', stuffCtrl.getAllThings);


module.exports = router;