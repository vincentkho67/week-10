const {User} = require("../models")

class UserRepository {
    static async register(req, res, next) {
        try {
            const {name, email, hashedPassword} = req
            const user = await User.create({
                name,
                email,
                password: hashedPassword
            });

            return user
        } catch(e) {
            // console.log(e) teasd

        } 
    }

    static async findByEmail(email) {
        try {
            const user = await User.findOne({where: {email}})
            return user;
        } catch(e) {
            throw e
        }
    }
}

module.exports = UserRepository