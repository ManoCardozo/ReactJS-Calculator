import { ActionType } from '../constants/actionType';

export const addOperator = (operator) => {
  return {
    type: ActionType.ADD_OPERATOR,
    inputValue: operator
  }
};