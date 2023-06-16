const Material = require('../model/material');

module.exports = {
    async create(req, res) {
        const material = req.body;
        try {
            const newMaterial = await Material.create(material);
            res.status(201).json(newMaterial);
        }
        catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }, // Create a new base material

    async read(req, res) {
        try {
            const materials = await Material.findAll();
            res.status(200).json(materials);
        }
        catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }, // Read all base materials

    async readById(req, res) {
        const { id } = req.params;
        try {
            const material = await Material.findByPk(id);
            if (material) {
                res.status(200).json(material);
            }
            else {
                res.status(404).json({ message: 'Material não encontrado' });
            }
        }
        catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }, // Read a base material by id

    async update(req, res) {
        const { id } = req.params;
        const material = req.body;
        try {
            const updatedMaterial = await Material.update(material, { where: { id: id } });
            if (updatedMaterial) {
                res.status(200).json(updatedMaterial);
            }
            else {
                res.status(404).json({ message: 'Material não encontrado' });
            }
        }
        catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }, // Update a base material by id

    async delete(req, res) {
        const { id } = req.params;
        try {
            const deletedMaterial = await Material.destroy({ where: { id: id } });
            if (deletedMaterial) {
                res.status(200).json(deletedMaterial);
            }
            else {
                res.status(404).json({ message: 'Material não encontrado' });
            }
        }
        catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    } // Delete a base material by id
};