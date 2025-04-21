import mongoose from "mongoose";

const medicalEquipmentDetailsSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.ObjectId,
        ref: 'product',
        required: true
    },
    brand: {
        type: String
    },
    warrantyPeriod: {
        type: String
    },
    usageInstructions: {
        type: String
    },
    powerRequirement: {
        type: String
    }
}, {
    timestamps: true
});

const MedicalEquipmentsModel =  mongoose.model('MedicalEquipmentDetails', medicalEquipmentDetailsSchema);

export default MedicalEquipmentsModel