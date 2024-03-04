class UsersRepository {
  constructor(usersMongoDao) {
    this.dao = usersMongoDao
  }

  async get() {
    return await this.dao.get()
  }

  async create(newUserInfo) {
    await this.dao.create(newUserInfo)
  }
}

module.exports = UsersRepository
