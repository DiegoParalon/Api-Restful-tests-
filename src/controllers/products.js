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

module.exports = {
    get,
    post,
}