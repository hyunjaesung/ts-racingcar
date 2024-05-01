export type RaceViewStartParam = {
  handleStartButtonClick: (param: RaceStartParam) => void;
};

export type StartButtonClickHandler =
  RaceViewStartParam["handleStartButtonClick"];

export type RaceStartParam = { carNames: string[]; roundCount: number };
