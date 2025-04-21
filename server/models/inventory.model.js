import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.ObjectId,
        ref: 'product',
        required: true
    },
    supplierId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Supplier',
        required: true
    },
    quantityAvailable: {
        type: Number,
        default: 0
    },
    batchNumber: {
        type: String
    },
    expiryDate: {
        type: Date
    }
}, { timestamps: true });

const InventoryModel = mongoose.model('Inventory', inventorySchema);

export default InventoryModel