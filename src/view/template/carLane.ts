export const carLaneTemplate = ({
  name,
  widthPercent,
}: {
  name: string;
  widthPercent: number;
}) => `
  <div>
    <div>${name}</div>
    <div class="lane">
      <span style="position: relative; left: ${100 - widthPercent}%">🏎️</span>
    </div>
  </div>
`;
