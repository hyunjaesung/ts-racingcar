import InputView from "./view/InputView";

const root = document.querySelector("#app");

if (root) {
  const inputView = new InputView(root);
  inputView.render();
}
