import { ActionType } from '../constants/actionType';

export const addDigit = (digit) => {
  return {
    type: ActionType.ADD_DIGIT,
    inputValue: digit
  }
};