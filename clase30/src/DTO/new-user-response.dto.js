class NewUserResponseDto {
  constructor(userInfo) {
    this.name = userInfo.name
    this.lastname = userInfo.lastname
    this.email = userInfo.email
    this.created_At = userInfo.created_At
  }
}

module.exports = NewUserResponseDto
