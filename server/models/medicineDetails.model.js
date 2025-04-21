import mongoose from "mongoose";

const medicineDetailsSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.ObjectId,
        ref: 'product',
        required: true
    },
    saltComposition: {
        type: String
    },
    manufacturer: {
        type: String
    },
    expiryDate: {
        type: Date
    },
    dosageInformation: {
        type: String
    },
    sideEffects: {
        type: String
    },
    prescriptionRequired: {
        type: Boolean,
        default: false
    },
    storageInstructions: {
        type: String
    }
}, { timestamps: true });

const MedicineDetailsModel = mongoose.model('MedicineDetails', medicineDetailsSchema);

export default MedicineDetailsModel