import mongoose from "mongoose";

const returnRequestSchema = new mongoose.Schema({
    orderId: {
        type: mongoose.Schema.ObjectId,
        ref: 'order',
        required: true
    },
    productId: {
        type: mongoose.Schema.ObjectId,
        ref: 'product',
        required: true
    },
    reason: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Approved', 'Rejected'],
        default: 'Pending'
    },
    processedAt: {
        type: Date
    }
}, {
    timestamps: true
});

const ReturnRequestModel = mongoose.model('ReturnRequest', returnRequestSchema);

export default ReturnRequestModel