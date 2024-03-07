class MessageRepository {
  constructor(adapter) {
    this.adapter = adapter
  }

  async sendMessage(messageInfo) {
    await this.adapter.sendMessage(messageInfo)
  }
}

module.exports = MessageRepository
