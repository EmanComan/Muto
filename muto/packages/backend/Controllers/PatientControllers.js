const PatientServices = require('../Services/PatientServices');

class PatientControllers {
  static async createPatient(req, res, next) {
    try {
      const patientDetails = req.body;

      const patientExists = await PatientServices.findPatientByEmail(req.body.email);
      if (patientExists) {
        return res.status(409).json({
          status: res.statusCode,
          message: 'Patient Already Exists',
        });
      } else {
        
        const createPatient = await PatientServices.addPatient(patientDetails);
        return res.status(201).json({
          staus: res.statusCode,
          message: 'Patient Created Successfully',
          data: createPatient,
        });
      }
    } catch (error) {
      return next(error);
    }
  }

  static async findAllPatients(req, res, next) {
    try {
      const findPatients = await PatientServices.findAllPatients();
      if (findPatients.length === 0) {
        return res.status(404).json({
          status: res.statusCode,
          message: 'No Patients Found',
        });
      } else {
        return res.status(200).json({
          status: res.statusCode,
          message: 'My Patients',
          data: findPatients,
        });
      }
    } catch (error) {
      return next(error);
    }
  }

  static async updatePatient(req, res, next) {
    try {
        const patientDetails = req.body;
      const patientExists = await PatientServices.findPatient(req.params.id);
      if (!patientExists) {
        return res.status(404).json({
          status: res.statusCode,
          message: 'Patient Not found',
        });
      } else {
        const updatedPatient = await PatientServices.updatePatient(
          req.params.id,
          patientDetails
        );
        return res.status(201).json({
          status: res.statusCode,
          message: 'Patient Updated Successfully',
          data: patientDetails,
        });
      }
    } catch (error) {
      return next(error);
    }
  }

  static async deletePatient(req, res, next) {
    try {
      const deletePatient = await PatientServices.deletePatient(req.params.id);
      if (!deletePatient) {
        return res.status(404).json({
          status: res.statusCode,
          message: 'Patient Not Found',
        });
      } else {
        return res.status(200).json({
          status: res.statusCode,
          message: 'Patient Successfully Deleted',
        });
      }
    } catch (error) {
      return next(error);
    }
  }

  static async getOnePatient(req, res, next) {
    try {
      const getOnePatient = await PatientServices.findPatient(req.params.id);
      if (!getOnePatient) {
        return res.status(404).json({
          staus: res.statusCode,
          message: 'Patient Not found',
        });
      } else {
        return res.status(200).json({
          staus: res.statusCode,
          data: getOnePatient,
        });
      }
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = PatientControllers;
