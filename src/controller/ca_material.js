const Ca_material = require('../model/ca_material');
const CA = require('../model/c_a_');

module.exports = {

    async create( req, res) {
        try { 
            const ca_material = req.body;
            const newCa_material = await Ca_material.create(ca_material);
            return res.status(201).json(newCa_material);
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ error: error.message });
        }
    },

    async read(req, res) {
        try {
            const ca_material = await Ca_material.findAll({
                include: CA
            });
            return res.status(200).json(ca_material);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
};