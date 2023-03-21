const express=require('express');
const collection = require('./mongo')
const cors=require('cors')
const app=express()
app.use(express.json())
const Model = require('./model')
app.use(express.urlencoded({ extended:true}))
app.use(cors())
const Addproduct = require('./Product')
const AddDealer = require('./Dealers')
const Stock = require('./Stock')

app.get('/',cors(),(req,res) => {


})

app.get("/",(req,res)=>{
    res.send("hi");
})

app.post('/',async(req,res) => {
  
  const{email,password} = req.body
  // const data={
  //   email: email,
  //   password: password,
  // }
  console.log("Received request to log in with email", email, "and password", password);
  try{
       const user = await collection.findOne({email:email})
       console.log("Found user in database:", user);
          if(user && user.password === password){
            res.json("exist")
          }       
          else{
            res.json("notexist")
            
          }
  }
  catch(e){
         res.json("notexist")
             console.log("Error finding user in database:", error);

  }
})


app.post('/addproduct', async (req, res) => {
  const { productName, productDes } = req.body;
  const newProduct = new Addproduct({
    productName,
    productDes,
  });
  try {
    await newProduct.save();
    res.json({status:200,message:'success'});
  } catch (e) {
    console.error(e);
    res.status(500).json( 'Failed to add product' );
  }
});

app.get('/add',(req,res)=>{
  Addproduct.find((err,data)=>{
    if(err){
      res.status(500).send(err)
    }
    else{
      res.status(200).send(data)
    }
  })
   
})

app.get('/viewstock', (req, res) => {
  const { productId } = req.query;
  const productPromise = Addproduct.find().exec();
  const modelPromise = Model.find({ productId }).exec();
  const dealerPromise = AddDealer.find().exec();
  Promise.all([productPromise, modelPromise, dealerPromise])
    .then((results) => {
      const [products, models, dealers] = results;
      res.status(200).send({ products, models, dealers });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});








app.get('/addmodel', async (req, res) => {
  try {
    const models = await Model.find().populate('product', 'productName');
    res.json(models);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});


app.get('/editproduct',(req,res)=>{
  Addproduct.find((err,data)=>{
    if(err){
      res.status(500).send(err)
    }
    else{
      res.status(200).send(data)
    }
  })
   
})

app.put('/editProduct/:id', async (req, res) => {
  const { productName, productDes, status } = req.body;
  const productId = req.params.id;

  try {
    const updatedProduct = await Addproduct.findByIdAndUpdate(productId, {
      productName,
      productDes,
      status,
    }, { new: true });

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ status: 200, message: 'Product updated successfully' });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Failed to update product' });
  }
});


// app.post('/addproduct', async (req, res) => {
//   const { productName, productDes, modelName, modelDes } = req.body;
//   const newProduct = new Addproduct({
//     productName,
//     productDes,
//     model: {
//       name: modelName,
//       description: modelDes,
//     },
//   });
//   try {
//     await newProduct.save();
//     const newModel = new Model({
//       name: modelName,
//       description: modelDes,
//       product: newProduct._id,
//     });
//     await newModel.save();
//     res.json({ status: 200, message: 'success' });
//   } catch (e) {
//     console.error(e);
//     res.status(500).json('Failed to add product');
//   }
// });


// app.post('/add', async (req, res) => {
//   const { product, modelName, modelDes } = req.body;
//   const newModel = new Model({
//     product,
//     modelName,
//     modelDes,
//   });
//   try {
//     await newModel.save();
//     res.json({status:200,message:'success'});
//     console.log(newModel);
//   } catch (e) {
//     console.error(e);
//     res.status(500).json( 'Failed to add model' );
//   }
// });


app.patch('/add/:productName', async (req, res) => {
  const { productName } = req.params;
  const { modelName, modelDes } = req.body;

  try {
    const product = await Addproduct.findOne({ productName });

    if (!product) {
      return res.status(400).json({ message: 'Product not found' });
    }

    const model = new Model({
      modelName,
      modelDes,
      product: product._id,
    });

    await model.save();

    res.json({ status: 200, message: 'Model added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to add model' });
  }
});

// Create a new stock
app.post('/viewstock/:productName/:modelName', async (req, res) => {
  const { productName, modelName, name } = req.params;
  const { serialNumber } = req.body;

  try {
    const product = await Addproduct.findOne({ productName });
    const model = await Model.findOne({ modelName });
    const dealer = await AddDealer.findOne({ name });

    if (!product || !model || !dealer) {
      return res.status(400).json({ message: 'Product not found' });
    }
console.log(product)
console.log(model)
console.log(dealer)
    const stock = new Stock({
      product: product._id,
      model: model._id,
      dealer: dealer._id,
      serialNumber,
    });

    await stock.save();

    res.json({ status: 200, message: 'Model added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to add model' });
  }
});





app.listen(3000,()=>{
  console.log('port connected');
})
