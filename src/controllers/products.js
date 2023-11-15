const ProductsModels = require('../models/products')

async function get(req, res) {
    const { id } = req.params

    const obj = id ? { _id: id } : null



    const products = await ProductsModels.find(obj)
    res.send(products)


}

async function post(req, res) {
    const {
        name,
        brand,
        price,
    } = req.body

    const product = new ProductsModels({
        name,
        brand,
        price,
    })

    product.save()

    res.send()

}

async function put(req, res) {
    const { id } = req.params
    const product = await ProductsModels.findOneAndUpdate({ _id: id }, req.body, { new: true })

    res.send({
        message: 'succes',
        product,
    })




    /*
     const product = await ProductsModels.findOne({ _id: id })
  
      await product.updateOne(req.body)
  
      res.send({
          message:'sucess',
          product,
      })
  */



}

async function remove(req, res) {
    const { id } = req.params

    remove = await ProductsModels.deleteOne({ _id: id })

    const message = remove.ok ? 'error' : 'succes'

    res.send({
        message,
    }

)}

module.exports = {
    get,
    post,
    put,
    remove,
}