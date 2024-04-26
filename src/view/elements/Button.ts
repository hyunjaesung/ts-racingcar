class Button {
  private buttonElement: HTMLButtonElement;

  constructor(id: string, type: "reset" | "button" | "submit", text: string) {
    this.buttonElement = document.createElement("button");
    this.buttonElement.id = id;
    this.buttonElement.type = type;
    this.buttonElement.textContent = text;
  }

  public getElement(): HTMLButtonElement {
    return this.buttonElement;
  }
}

export default Button;
