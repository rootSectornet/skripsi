const users = require('./../models').users

module.exports = {
    async getList(body) {
        const {email, password} = body
        return await users.findOne({
            where: {
                email: email
            }
        })
    }
}
