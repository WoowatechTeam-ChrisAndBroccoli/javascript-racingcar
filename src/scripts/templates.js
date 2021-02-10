const getRacingRecordTemplate = (record) => {
  return [...Array(record)].reduce(
    (template) => `${template}<div class="forward-icon mt-2">⬇️️</div>`
  );
};

export const getResultAreaTemplate = (carList) => {
  const resultAreaList = carList.map(
    (car) => `
    <div>
      <div class="car-player mr-2">${car.carName}</div>
      ${getRacingRecordTemplate(car.record)}
    </div>
  `
  );

  return resultAreaList.join("");
};

export const getWinnersTemplate = (winners) => {
  return `🏆 최종 우승자: ${winners.join(", ")} 🏆`;
};

export default {
  getResultAreaTemplate,
  getWinnersTemplate,
};
