import { mongoose } from '../services'

const vehicle = [
    {
        _method: 'get',
        _path: '/veiculos',
        _function: async (req, res) => {
            try {        
                const result = await mongoose.find()
                if(!result.length) return res.status(400).send({ error: 'não existe dados' })
                return res.status(200).send({ data: result })            
            } catch (error) {
                console.error(error)
                return res.status(500).send({ error: 'erro interno'})
            }
        }
    },
    {
        _method: 'get',
        _path: '/veiculos/find',
        _function: async (req, res) => {
            try {        
                const result = await mongoose.find(req.query)
                if(!result.length) return res.status(400).send({ error: 'não existe dados' })
                return res.status(200).send({ data: result })            
            } catch (error) {
                console.error(error)
                return res.status(500).send({ error: 'erro interno'})
            }
        }
    },
    {
        _method: 'get',
        _path: '/veiculos/:id',
        _function: async (req, res) => {
            try {
                const { id } = req.params
                const result = await mongoose.findById(id)
                if(!result) return res.status(400).send({ error: 'não existe dados' })
                return res.status(200).send({ data: result })            
            } catch(error){
                console.error(error)
                return res.status(500).send({ error: 'erro interno'})
            }
        }
    },
    {
        _method: 'post',
        _path: '/veiculos',
        _function: async (req, res) => {
            try {
                const { body } = req
                const { veiculo, marca, ano } = body
                
                const errors = []
                if(!veiculo) errors.push('veiculo é obrigatorio')
                if(!marca) errors.push('marca é obrigatorio')
                if(!ano) errors.push('ano é obrigatorio')
                if(errors.length) return res.status(400).send(errors)
                
                const result = await mongoose.create(body)
                return res.status(200).send({ data: result })
            } catch(error) {
                console.error(error)
                return res.status(500).send({ error: 'erro interno'})
            }
        }
    },
    {
        _method: 'put',
        _path: '/veiculos/:id',
        _function: async (req, res) => {
            try {
                const { id } = req.params
                const { body } = req
                const { veiculo, marca, ano } = body
                
                const errors = []
                if(!veiculo) errors.push('veiculo é obrigatorio')
                if(!marca) errors.push('marca é obrigatorio')
                if(!ano) errors.push('ano é obrigatorio')
                if(errors.length) return res.status(400).send(errors)
                
                const result = await mongoose.findByIdAndUpdate(id, body)
                if(!result) return res.status(400).send({ error: 'não existe dados' })
                return res.status(200).send({ data: result })
            } catch(error) {
                console.error(error)
                return res.status(500).send({ error: 'erro interno'})
            }
        }
    },
    {
        _method: 'patch',
        _path: '/veiculos/:id',
        _function: async (req, res) => {
            try {
                const { id } = req.params
                const { body } = req
                
                const result = await mongoose.findByIdAndUpdate(id, body)
                if(!result) return res.status(400).send({ error: 'não existe dados' })
                return res.status(200).send({ data: result })
            } catch(error) {
                console.error(error)
                return res.status(500).send({ error: 'erro interno'})
            }
        }
    },
    {
        _method: 'delete',
        _path: '/veiculos/:id',
        _function: async (req, res) => {
            try {
                const { id } = req.params
                
                const result = await mongoose.findByIdAndDelete(id)
                if(!result) return res.status(400).send({ error: 'não existe dados' })
                return res.status(200).send({ data: result })
            } catch(error) {
                console.error(error)
                return res.status(500).send({ error: 'erro interno'})
            }
        }
    }
]

export { vehicle }
