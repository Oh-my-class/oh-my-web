export class Alert {
  id: number;
  title: string;
  message: string;
  type: AlertType;
  duration: number;

  constructor(
    title: string,
    message: string,
    type = AlertType.none,
    duration = 5
  ) {
    this.id = -1;
    this.title = title;
    this.message = message;
    this.type = type;
    this.duration = duration;
  }
}

export enum AlertType {
  none = "",
  info = "info",
  success = "success",
  warning = "warning",
  error = "error",
}
