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
    /*
    getById:  async function(req, res){
        try {
            const user = await db.User.findByPk(req.params.id, {attributes: {exclude: ['password']}}); // para excluir un dato en especifico
            if(!user){
                return res.status(404).send({
                    status:404,
                    msg: 'usuario no encontrado.'
                }); 
            };
            const response = {
                url: '/api/user/' + req.params.id,
                data: user,
                status: 200
            };
            return res.send(response);
        } catch (error) {
            return res.send(error);
        }
    }
    */
 };

module.exports = controller;


