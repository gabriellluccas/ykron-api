import { vehicle } from '../models' 

const mongoose = {
    async create({veiculo, marca, ano, descricao = '', vendido = false}) {
        return await vehicle.create({veiculo, marca, ano, descricao, vendido})
    },
    async find(obj = {}) {
        const data = {}
        if (obj.veiculo) data.veiculo = obj.veiculo
        if (obj.marca) data.marca = obj.marca
        if (obj.ano) data.ano = obj.ano
        if (obj.descricao) data.descricao = obj.descricao
        if (obj.vendido) data.vendido = obj.vendido
        return await vehicle.find(data)
    },
    async findById(id) {
        return await vehicle.findById(id)
    },
    async findByIdAndUpdate(id, obj = {}) {
        const data = {}
        if (obj.veiculo) data.veiculo = obj.veiculo
        if (obj.marca) data.marca = obj.marca
        if (obj.ano) data.ano = obj.ano
        if (obj.descricao) data.descricao = obj.descricao
        if (obj.vendido) data.vendido = obj.vendido
        return await vehicle.findByIdAndUpdate(id, {...data, updated: Date.now()}, { new: true, useFindAndModify: false })
    },
    async findByIdAndDelete(id) {
        return await vehicle.findByIdAndDelete(id)
    }
}

export { mongoose }