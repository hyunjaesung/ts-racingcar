export class StartButton {
  el: HTMLButtonElement;
  constructor(selector: string) {
    this.el = document.querySelector(selector) as HTMLButtonElement;
  }

  addEventListener(callback: (param: unknown) => void) {
    this.el.addEventListener("click", callback);
  }
}
