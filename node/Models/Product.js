var mongoose         = require('mongoose');

var ProductSchema = mongoose.Schema({
    _id:            {"type" : Number },
    productName:    {"type" : "String"},
    price:          {"type": Number},
    description:    {"type": "String"},
    path:           {"type":String},
},
{ collection : 'products' },
);

var Product    = mongoose.model('Product', ProductSchema);
module.exports = Product;
