import mongoose from "mongoose";

const cartProductSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.ObjectId,
        ref: 'product'
    },
    quantity: {
        type: Number,
        default: 1
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    },
    prescriptionId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Prescription',
        default: null
    }
}, {
    timestamps: true
})

const CartProductModel = mongoose.model('cartProduct', cartProductSchema)

export default CartProductModel