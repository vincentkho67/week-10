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
}

module.exports = UserRepository