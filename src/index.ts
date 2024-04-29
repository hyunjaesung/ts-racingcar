/*
  - 주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.
  - 사용자는 몇 대의 자동차로 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
  - 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
  - 자동차의 상태를 화면에 출력한다. 어느 시점에 출력할 것인지에 대한 제약은 없다.
*/

import { App } from "@/App";
import { DomSelector } from "@/constants";

const {
  CAR_COUNT_INPUT_SELECTOR,
  TRY_COUNT_INPUT_SELECTOR,
  START_BUTTON_SELECTOR,
  RESULT_VIEW_SELECTOR,
} = DomSelector;

const app = new App(
  CAR_COUNT_INPUT_SELECTOR,
  TRY_COUNT_INPUT_SELECTOR,
  START_BUTTON_SELECTOR,
  RESULT_VIEW_SELECTOR
);

app.init();
