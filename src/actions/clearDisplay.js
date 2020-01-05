import { ActionType } from '../constants/actionType';

export const clearDisplay = () => {
  return {
    type: ActionType.CLEAR_DISPLAY
  };
};