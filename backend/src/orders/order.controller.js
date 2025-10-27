const Order = require("./order.model")

const createAOrder = async(req,res) =>{

    try{
        const newOrder = await Order(req.body);
        const savedOrder = await newOrder.save();
        resizeBy.status(200).json(savedOrder)
    }
    catch (error){
        console.error('Error in order controller');
        res.status(500).json({message:"failed to create order"})
    }
}
model.exports = {
    createAOrder
}