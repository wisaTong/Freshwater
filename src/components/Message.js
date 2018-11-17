export class Message {
  constructor(sender, destination, text, time) {
    this.sender = sender;
    this.destination = destination;
    this.message = text;
    this.time = time;
  }
}
