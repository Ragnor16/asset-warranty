const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://diwaarvind6:Diwa@cluster0.jxw0na0.mongodb.net/Asset?retryWrites=true&w=majority').then(()=>{
    console.log('mongodb connected');

})
.catch(()=>{
    console.log('failed')
})  


const productSchema=new mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    productDes:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        default:true
    }
},{timestamps:true}
)

const Addproduct = mongoose.model('Addproduct',productSchema)


module.exports=Addproduct;


