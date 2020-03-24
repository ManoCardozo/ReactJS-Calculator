import { ActionType } from '../constants/actionType';

export const toggleMenu = () => {
  return {
    type: ActionType.TOGGLE_MENU
  }
};