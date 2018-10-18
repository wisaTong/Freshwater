export class Message {
  constructor(sender, text) {
    this.sender = sender;
    this.text = text;
  }

  getSenderName() {
    return this.sender;
  }

  getText() {
    return this.text;
  }
}