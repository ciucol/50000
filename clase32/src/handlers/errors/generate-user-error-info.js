const generateUserErrorInfo = user => {
  return `One or more properties were incomplete or note valid.
  List of required properties:
  * name   : needs to be a string, received ${user.name},
  * lastname   : needs to be a string, received ${user.lastname},
  * email   : needs to be a string, received ${user.email},
  `
}

module.exports = generateUserErrorInfo
