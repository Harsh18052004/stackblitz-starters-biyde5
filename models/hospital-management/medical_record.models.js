import mongoose from 'mongoose';
const myEnum = {
  'High': '7-10',
  'Mild': '4-6',
  'Low': '1-3'
};
const pastMedicalHistory = new mongoose.Schema({
  codition : {
    type : String,
    required : true,
  },
  dateOfDiagonose : {
    type : Date,
    required : true,
  },
  severity : {
    type : Object.values(myEnum), 
  },
  treatment : {
    type : String,
    required : true,
  }
})

const patientVitalsSchema = new mongoose.Schema({
  bloodPressure: {
    systolic: { type: Number, required: true },
    diastolic: { type: Number, required: true }
  },
  heartRate: { type: Number, required: true },
  respiratoryRate: { type: Number, required: true },
  temperature: { type: Number, required: true }, // Assuming temperature in Celsius
  heightAndWeight: {
    height: { type: Number, required: true }, // Height in centimeters
    weight: { type: Number, required: true }  // Weight in kilograms
  }
});

const medicalRecordSchema = new mongoose.Schema({
  patientInfo : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "Patient",
  },
  surgeonDoctor : {
    type : mongoose.Schema.Types.ObjectId,
    ref = "Doctor",
  },
  observation : {
    type : String, 
    required : true,
  },
  medicalHistory : [
    {
      type : pastMedicalHistory,
    }
  ],
  vitalSigns : {
    type : patientVitalsSchema,
  }

}, { timestamps: true });

export const MedicalRecord = mongoose.model(
  'MedicalRecord',
  medicalRecordSchema
);
