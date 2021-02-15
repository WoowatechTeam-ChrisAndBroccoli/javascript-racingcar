const CAR_NAME_SEPERATOR = ',';
const WINNER_TEXT_SEPERATOR = ', ';

const MAX_CAR_NAME_LENGTH_NUMBER = 5;
const CAR_MOVE_THRESHOLD_RANGE_NUMBER = 10;
const CAR_MOVE_THRESHOLD_NUMBER = 4;
const CONGRATULATION_DURATION_SECOND = 2;
const ANIMATION_DURATION_SECOND = 1;

const MAX_CAR_NAME_EXCEEDED_MESSAGE = `차 이름은 ${MAX_CAR_NAME_LENGTH_NUMBER}자 이하로 작성해주십시오`;
const CAR_NAME_EMPTY_MESSAGE = '등록하려는 차의 이름이 비어있습니다.';
const SHOULD_NOT_DECIMAL_MESSAGE = '횟수에 소수점이 포함될 수 없습니다.';
const SHOULD_GREATER_THAN_ZERO_MESSAGE = '1 이상의 횟수를 입력해주세요.';
const SHOULD_REGISTER_CAR_FIRST_MESSAGE = '차를 먼저 등록해주세요.';

const getCongratulationsMessage = (winners) =>
  `${winners.join(' 와 ')} 의 우승입니다! 축하합니다!`;

export {
  CAR_NAME_SEPERATOR,
  WINNER_TEXT_SEPERATOR,
  CAR_MOVE_THRESHOLD_RANGE_NUMBER,
  CAR_MOVE_THRESHOLD_NUMBER,
  MAX_CAR_NAME_LENGTH_NUMBER,
  MAX_CAR_NAME_EXCEEDED_MESSAGE,
  CAR_NAME_EMPTY_MESSAGE,
  SHOULD_NOT_DECIMAL_MESSAGE,
  SHOULD_GREATER_THAN_ZERO_MESSAGE,
  SHOULD_REGISTER_CAR_FIRST_MESSAGE,
  CONGRATULATION_DURATION_SECOND,
  ANIMATION_DURATION_SECOND,
  getCongratulationsMessage,
};
