export const RaceDomSelector = {
  startButtonSelector: "#startBtn",
  carNameSelector: "#carName",
  carNameAddSelector: "#carNameAdd",
  roundCountSelector: "#roundCount",
  roundResultSelector: "#roundResult",
};

export type RaceDomSelectorType = Record<keyof typeof RaceDomSelector, string>;
