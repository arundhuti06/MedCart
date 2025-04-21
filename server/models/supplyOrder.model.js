import mongoose from "mongoose";

const supplyOrderSchema = new mongoose.Schema({
    supplierId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Supplier',
        required: true
    },
    products: [
        {
            productId: { type: mongoose.Schema.ObjectId, ref: 'product' },
            quantity: { type: Number },
            batchNumber: { type: String },
            expiryDate: { type: Date }
        }
    ],
    totalCost: {
        type: Number
    },
    status: {
        type: String,
        enum: ['Pending', 'Received', 'Cancelled'],
        default: 'Pending'
    },
    receivedAt: {
        type: Date
    }
}, {
    timestamps: true
});

const SupplyOrderModel = mongoose.model('SupplyOrder', supplyOrderSchema);

export default SupplyOrderModel