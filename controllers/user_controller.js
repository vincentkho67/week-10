const { User } = require('../models') // ini nanti gaperlu
const bcrypt = require('bcrypt'); // ini gaperlu
const user_service = require("../service/user")
class UserController {
    static async register(req, res, next) {
        const { name, email, password } = req.body;

        try {
            const user = await user_service.register(
                {
                    name,
                    email,
                    password
                }
            )


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

    static async upload(req, res, next) {

        const {id} = req.params;
        const file = req.file

        const user = await User.findByPk(id)

        if (!user) {
            return res.status(400).json({
                message: "no user with id = " + id + " found!"
            })
        }

        if (!file) {
            return res.status(400).json({
                message: "no image detected"
            })
        }

        const new_image_url = `http://localhost:3000/upload/${file.filename}`
        user.update({
            image_url: new_image_url
        })

        res.status(201).json({message: "success updating profile picture"})
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