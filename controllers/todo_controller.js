const {Todo} = require('../models')

class TodoController { // gerbang / Gateway => request dari client
    static async create(req, res, next) {
        const {title, completed, user_id} = req.body
        const data = await Todo.create(
            {
                title, completed, user_id
            }
        )

        res.status(201).json(data);
    }

    static async get(req, res, next) {
        const { userId } = req.query
        const data = await Todo.findAll({ where : {user_id: userId}})

        res.status(200).json(data)
    }

    static async getOne(req, res, next) {
        const { id } = req.params
        const data = await Todo.findByPk(id)

        res.status(200).json(data)
    }

    static async delete(req, res, next) {
        const {id} = req.params
        await Todo.destroy(
            {where: {
                    id: id
                }
            }
        )

        res.status(200).json(
            {
                message: "successfully delete"
            }
        )
    }
}

module.exports = TodoController