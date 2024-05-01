export const carLaneTemplate = (widthPercent: number) => `
  <div class="lane">
    <span style="position: relative; left: ${100 - widthPercent}%">🏎️</span>
  </div>
`;
