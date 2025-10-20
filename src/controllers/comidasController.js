import * as ComidasModel from './../models/comidasModel'

export const listarTodos = async (req, res) => {
    try {
        const comidas = await ComidasModel.findAll();

        if (!comidas || comidas.length === 0) {
            res.status(404).json({
                status: 404,
                total: comidas.length,
                message: 'Não há comidas na lista',
                comidas
            })
        }

        res.status(200).json({
            total: comidas.length,
            message: 'Lista de comidas',
            comidas
        })

    } catch (error) {
        res.status(500).json({
            status: 500,
            erro: 'Erro interno de servidor',
            details: error.message
        })
    }
};

export const listarUm = async (req, res) => {
    try {
        const id = req.params.id;
        const comida = await ComidasModel.findById(id);

        if (!comida) {
            return res.status(404).json({
                status: 404,
                erro: 'Comida não encontrada',
                message: 'Verfique se o id da comida existe',
                id: id
            })
        }

        res.status(200).json({
            total: comida.length,
            message: 'Comida encontrada',
            comida
        })

    } catch (error) {
        res.status(500).json({
            status: 500,
            erro: 'Erro ao buscar comida por id',
            details: error.message
        })
    }
};