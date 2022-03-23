const { connect, disconnect } = require('../config/db.config');
const { User } = require('../model/user.model');
const logger = require('../logger/api.logger');

class UserRepository {

    constructor() {
        connect();
    }

    async getUsers() {
       // const Users = await User.find({}, {limit:10, skip:20});

        const Users = await User.find({}).limit(pageSize).skip(pageSize * page);;
        console.log('Users:::', Users);
        return Users;
    }

    async createUser(user) {
        let data = {};
        try {
            data = await User.create(user);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async updateUser(user) {
        let data = {};
        try {
            data = await User.updateOne(user);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async deleteUser(userId) {
        let data = {};
        try {
            data = await User.deleteOne({_id : userId});
        } catch(err) {
            logger.error('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}

module.exports = new UserRepository();