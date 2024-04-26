import DOM_SELECTOR_ID from "@/constants/domSelector";
import Button from "./elements/Button";
import Input from "./elements/Input";

class InputView {
  private root: Element;
  private carCountInput: Input;
  private tryCountInput: Input;
  private submitButton: Button;

  constructor(root: Element) {
    this.root = root;
    const { CAR_COUNT_INPUT, TRY_COUNT_INPUT, SUBMIT_BUTTON } = DOM_SELECTOR_ID;
    this.carCountInput = new Input(
      CAR_COUNT_INPUT,
      "number",
      "자동차 대수는 몇 대인가요?"
    );
    this.tryCountInput = new Input(
      TRY_COUNT_INPUT,
      "number",
      "시도할 횟수는 몇 회인가요?"
    );
    this.submitButton = new Button(SUBMIT_BUTTON, "submit", "시작");
  }

  public render() {
    const form = document.createElement("form");
    form.id = DOM_SELECTOR_ID.CAR_RACE_FORM;
    form.appendChild(this.carCountInput.getElement());
    form.appendChild(this.tryCountInput.getElement());
    form.appendChild(this.submitButton.getElement());
    this.root.appendChild(form);
  }
}

export default InputView;
