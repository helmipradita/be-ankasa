const express = require(`express`);
const router = express.Router();
const { AirlinesController } = require(`../controller/airlines`);
const { protect } = require('../middleware/auth');
const upload = require('../middleware/upload');

router.post('/', upload.single('logo'), protect, AirlinesController.insert);
router.put('/:id', upload.single('logo'), protect, AirlinesController.update);
router.delete('/:id', protect, AirlinesController.deleteData);
router.get('/', AirlinesController.getAllData);
router.get('/detail/:id', AirlinesController.detail);

module.exports = router;
