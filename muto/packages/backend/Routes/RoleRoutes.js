const express = require('express');
const router = express.Router();
const roleController = require('../Controllers/RoleControllers');


router.post('/createrole', roleController.createRole);
router.get('/', roleController.findAllRoles);
router.put('/updaterole/:id',roleController.updateRole);
router.delete('/deleterole/:id',roleController.deleteRole);
router.get('/:id',roleController.getOneRole);

module.exports = router;
