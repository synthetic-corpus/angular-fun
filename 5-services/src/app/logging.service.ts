export class LoggingService {
  clicks = 0;
  iterate() {
    this.clicks = this.clicks + 1;
  }
}
