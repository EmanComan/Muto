const express = require('express');
const router = express.Router();
const patientController = require('../Controllers/PatientControllers');


router.post('/createpatient', patientController.createPatient);
router.get('/', patientController.findAllPatients);
router.patch('/updatepatient/:id',patientController.updatePatient);
router.delete('/deletepatient/:id',patientController.deletePatient);
router.get('/:id',patientController.getOnePatient);

module.exports = router;
