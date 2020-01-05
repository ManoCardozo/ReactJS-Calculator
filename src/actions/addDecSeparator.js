import { ActionType } from '../constants/actionType';

export const addDecSeparator = (digit) => {
  return {
    type: ActionType.ADD_DEC_SEPARATOR
  }
};