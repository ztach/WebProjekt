var express = require('express');
var Dict = require('../models').Dict;
var router = express.Router();
const dictController = require('../controllers/dictController');
const isExistMiddlware = require('../middleware/ifExists');
 
router.get('/', dictController.getAllController);

router.post('/', dictController.postDictController);

router.get('/:id', 
                isExistMiddlware.checkIDInput, 
                isExistMiddlware.checkIDExist,
                dictController.getIdController
);

router.put('/:id', 
                isExistMiddlware.checkIDInput, 
                isExistMiddlware.checkIDExist,
                dictController.putIdController
);

router.delete('/:id',
                isExistMiddlware.checkIDInput, 
                isExistMiddlware.checkIDExist,
                dictController.deleteIdController
);

module.exports = router;