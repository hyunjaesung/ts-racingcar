class Input {
  private inputElement: HTMLInputElement;
  private labelElement: HTMLLabelElement;

  constructor(id: string, type: string, labelText: string) {
    this.inputElement = document.createElement("input");
    this.inputElement.id = id;
    this.inputElement.type = type;
    this.labelElement = document.createElement("label");
    this.labelElement.textContent = labelText;
    this.labelElement.htmlFor = id;
    this.labelElement.appendChild(this.inputElement);
  }

  public getElement(): HTMLLabelElement {
    return this.labelElement;
  }
}

export default Input;
