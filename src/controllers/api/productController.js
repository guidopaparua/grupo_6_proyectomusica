const db = require('../../database/models');


 const controller = {
     getAll: async function(req, res){
        try {
            const products = await db.Product.findAll({}); // para excluir un dato en especifico
            const response = {
                total: products.length,
                data: products,
                status: 200
            };
            return res.send(response);
        } catch (error) {
            return res.send(error);
        }
    },
    
    getById:  async function(req, res){
        try {
            const product = await db.Product.findByPk(req.params.id, {  }); // para excluir un dato en especifico
            if(!product){
                return res.status(404).send({
                    status:404,
                    msg: 'producto no encontrado.'
                }); 
            };
            const response = {
                url: '/api/product/' + req.params.id,
                data: product,
                status: 200
            };
            return res.send(response);
        } catch (error) {
            return res.send(error);
        }
    }

 };

module.exports = controller;


