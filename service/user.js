const user_repository = require("../repositories/user")
const bcrypt = require("bcrypt")

class UserService {
    static async register(req, res, next) {
        const {name, email, password} = req
        const hashedPassword = bcrypt.hashSync(password, 8)

        const user = await user_repository.register({
            name,
            email,
            hashedPassword
        })

        return user
    }

    static async login(request) {
        const {email, password} = request

        const user = await user_repository.findByEmail(email)

        if (!user || !bcrypt.compareSync(password, user.password)) {
            return null
        }

        return user;
    }
}

module.exports = UserService