class NewUserDto {
  constructor(newUserInfo) {
    this.first_name = newUserInfo.name
    this.last_name = newUserInfo.lastname
    this.full_name = `${newUserInfo.name} ${newUserInfo.lastname}`
    this.email = newUserInfo.email
    this.role = 'user'
  }
}

module.exports = NewUserDto
