const users = require('./../models').users
const rijndael = require('./../controllers/rijndael')

module.exports = {
    async getList(body) {
        let text = rijndael.decrypt(req.body)
        const {email, password} = text
        return await users.findOne({
            where: {
                email: email
            }
        })
    }
}
