export const getRandomNumber = () => Math.floor(Math.random() * 10);

export const getInputElementValue = (selector: string): number =>
  +(document.querySelector(selector) as HTMLInputElement).value;
