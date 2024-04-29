export const RaceDomSelector = {
  startButtonSelector: "#startBtn",
  carCountSelector: "#carCount",
  roundCountSelector: "#roundCount",
  roundResultSelector: "#roundResult",
};

export type RaceDomSelectorType = Record<keyof typeof RaceDomSelector, string>;
