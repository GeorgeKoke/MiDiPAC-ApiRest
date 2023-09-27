import { HistorialEntrega } from "../models/HistorialEntrega.js";

export const createHistorial = async (req, res) => {
    const {
        RUT,
        fechaEntrega,
        ID_GRUPOETAREO,
        ID_ESTADONUTRICIONAL,
        ID_ALIMENTO,
        cantidadEntregada,
        fechaProximaEntrega
    } = req.body;

    try {
        const nuevoHistorial = await HistorialEntrega.create({
            RUT,
            fechaEntrega,
            ID_GRUPOETAREO,
            ID_ESTADONUTRICIONAL,
            ID_ALIMENTO,
            cantidadEntregada,
            fechaProximaEntrega
        });
        res.json(nuevoHistorial);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
export const readHistoriales = async (req, res) => {
    try {
        const historiales = await HistorialEntrega.findAll();
        res.json(historiales);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
export const findHistorialesByRut = async (req, res) => {
    const { rut } = req.params;
    try {
        const historiales = await HistorialEntrega.findAll({
            where: [{
                RUT: rut,
            }]
        });
        res.json(historiales);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
export const readHistorial = async (req, res) => {
    const { id } = req.params;
    try {
        const historial = await HistorialEntrega.findByPk(id);

        if (!historial) { return res.status(404).json({ message: 'Historial no encontrado o no existe' }) };
        res.json(historial);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
export const updateHistorial = async (req, res) => {
    const { id } = req.params;
    const {
        RUT,
        fechaEntrega,
        ID_GRUPOETAREO,
        ID_ESTADONUTRICIONAL,
        ID_ALIMENTO,
        cantidadEntregada,
        fechaProximaEntrega
    } = req.body;

    try {
        const historial = await HistorialEntrega.findByPk(id);
        if (!historial) {
            return res.status(404).json({ message: 'Historial no encontrado o no existe, no se puede actualizar' });
        } else {
            historial.RUT = RUT;
            historial.fechaEntrega = fechaEntrega;
            historial.ID_GRUPOETAREO = ID_GRUPOETAREO;
            historial.ID_ESTADONUTRICIONAL = ID_ESTADONUTRICIONAL;
            historial.ID_ALIMENTO = ID_ALIMENTO;
            historial.cantidadEntregada = cantidadEntregada;
            historial.fechaProximaEntrega = fechaProximaEntrega;

            await historial.save();
            res.sendStatus(204);
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
export const deleteHistorial = async (req, res) => {
    try {
        const { id } = req.params;
        await HistorialEntrega.destroy({
            where: { ID_HISTORIALENTREGA: id },
        });
        return res.status(200).json({ message: 'Historial Eliminado correctamente' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};