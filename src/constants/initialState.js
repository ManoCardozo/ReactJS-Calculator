import { MenuVisibility } from '../constants/menuVisibility';
import { Theme } from '../constants/theme';

export const intialState = { 
    menuVisibility: MenuVisibility.Hidden,
    theme: Theme.Dark,
    output: {
        display: "0",
        computed: 0,
        expression: "",
        operator: null,
        replaceOperand: false
    }
};