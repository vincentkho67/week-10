const { User } = require('../models')
const bcrypt = require('bcrypt');
class UserController {
    static async register(req, res, next) {
        const { name, email, password } = req.body;
        const hashedPassword = bcrypt.hashSync(password, 8);

        try {
            const user = await User.create({
                name,
                email,
                password: hashedPassword
            });

            res.status(201).json(user);
        } catch (error) {
            next(error);
        }
    }

    static async login(req, res, next) {
        const { email, password } = req.body;

        try {
            const user = await User.findOne({ where: { email } });

            if (!user || !bcrypt.compareSync(password, user.password)) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }

            res.status(200).json({ message: 'Login successful' });
        } catch (error) {
            next(error);
        }
    }

    static async create(req, res, next) {
        const { name, email } = req.body
        const data = await User.create({
            name, email
        })

        res.status(201).json(data);
    }

    static async get(req, res, next) {
        const { page = 1, limit = 10 } = req.query;
        const offset = (page - 1) * limit;

        try {
            const data = await User.findAndCountAll({
                limit: parseInt(limit),
                offset: parseInt(offset)
            });

            res.status(200).json({
                totalItems: data.count,
                totalPages: Math.ceil(data.count / limit),
                currentPage: parseInt(page),
                users: data.rows
            });
        } catch (error) {
            next(error);
        }
    }

    static async getOne(req, res, next) {
        const { id } = req.params
        const data = await User.findByPk(id)

        res.status(200).json(data)
    }

    // explore untuk PUT
    
    static async delete(req, res, next) {
        const {id} = req.params
        await User.destroy(
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

module.exports = UserController;