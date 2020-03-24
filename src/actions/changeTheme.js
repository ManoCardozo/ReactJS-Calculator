import { ActionType } from '../constants/actionType';

export const changeTheme = (theme) => {
  return {
    type: ActionType.CHANGE_THEME,
    theme: theme
  }
};