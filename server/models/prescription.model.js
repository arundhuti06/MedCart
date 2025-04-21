import mongoose from 'mongoose';

const prescriptionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    prescriptionFile: {
        type: String,
        required: true
    }, // URL or file path
    verifiedByAdmin: {
        type: Boolean,
        default: false
    },
    relatedOrderId: {
        type: mongoose.Schema.ObjectId,
        ref: 'order'
    },
    uploadedAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
})

const PrescriptionModel = mongoose.model('Prescription', prescriptionSchema);

export default PrescriptionModel