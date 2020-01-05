import { ActionType } from '../constants/actionType';

export const processBackspace = () => {
  return {
    type: ActionType.PROCESS_BACKSPACE
  }
};