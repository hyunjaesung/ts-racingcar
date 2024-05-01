export type RaceStartParam = { carNames: string[]; roundCount: number };

export type RaceViewStartParam = {
  handleStartButtonClick: (param: RaceStartParam) => void;
};

export type StartButtonClickHandler =
  RaceViewStartParam["handleStartButtonClick"];
