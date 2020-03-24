import { ActionType } from '../constants/actionType';
import { intialState } from '../constants/initialState';
import { appConst } from '../constants/appConst';
import { operator } from '../constants/operator';
import { MenuVisibility } from '../constants/menuVisibility';

let addDigit = (state, action) => {
  let output = state.output;
  let hasMaxLength = output.display.length >= appConst.MaxDisplayLength;
  let newValue = output.display.toString();
  let replaceOperand = output.replaceOperand;

  if (!hasMaxLength)
  {
    let isInitial = output.display === intialState.output.display;
    
    newValue = isInitial
      ? action.inputValue.toString()
      : newValue = newValue.toString() + action.inputValue.toString()
  }

  if (replaceOperand) {
    newValue = action.inputValue.toString();
    replaceOperand = false;
  }

  let newOutput = { 
    ...output,
    display: newValue,
    replaceOperand: replaceOperand,
  };

  return {
    ...state,
    output: newOutput
  };
};

let addOperator = (state, action) => {
  let output = state.output;
  let newValue = output.display;
    let expression = "";
    
    switch(output.operator){
      case operator.addition:
          newValue = output.computed += parseFloat(newValue);
        break;
      case operator.subtraction:
          newValue = output.computed -= parseFloat(newValue);
        break;
      case operator.multiplication:
          newValue = output.computed *= parseFloat(newValue);
          newValue = Math.round(newValue * appConst.CommMulitplier) / appConst.CommMulitplier
        break;
      case operator.division:
          newValue = output.computed /= parseFloat(newValue);
          newValue = Math.round(newValue * appConst.CommMulitplier) / appConst.CommMulitplier
        break;
      default:
        break;
    }

    if (action.inputValue === operator.equals)
    {
      expression = "";
    }
    else {
      expression = output.expression + " " + output.display + " " + action.inputValue;
    }

    let newOutput = { 
      ...output,
      display: newValue,
      computed: parseFloat(newValue),
      expression: expression,
      operator: action.inputValue,
      replaceOperand: true
    };
  
    return {
      ...state,
      output: newOutput
    };
};

let addDecSeparator = (state) => {
  let output = state.output;
  let currentValue = output.display.toString() || intialState.output.display.toString()
  let decSeparator = appConst.DecSeparator;
  let replaceOperand = output.operator !== null && output.replaceOperand;

  let newValue = intialState.output.display;

  if (!replaceOperand)
  {
    newValue = currentValue && currentValue.indexOf(decSeparator) !== -1
      ? currentValue 
      : currentValue + decSeparator;
  }
  else {
    newValue = newValue + decSeparator;
    replaceOperand = false;
  }

  let newOutput = { 
    ...output, 
    display: newValue,
    replaceOperand: replaceOperand 
  };

  return {
    ...state,
    output: newOutput
  };
};

let processBackspace = (state) => {
  let output = state.output;
  let newValue = output.display;
    
  newValue = newValue.length > 1
    ? newValue.slice(0, -1)
    : intialState.output.display 

  let newOutput = { 
    ...output, 
    display: newValue 
  };

  return {
    ...state,
    output: newOutput
  };
};

let calcPercentage = (state) => {
  let output = state.output;
  let newValue = output.display / 100;

  let newOutput = { 
    ...output, 
    display: newValue 
  };

  return {
    ...state,
    output: newOutput
  };
};

let toggleSign = (state) => {
  let output = state.output;
  let newValue = output.display * -1;

  let newOutput = { 
    ...output, 
    display: newValue 
  };

  return {
    ...state,
    output: newOutput
  };
};

let toggleMenu = (state) => {
  let visibility = state.menuVisibility === MenuVisibility.Hidden 
    ? MenuVisibility.Shown 
    : MenuVisibility.Hidden;

  return {
    ...state,
    menuVisibility: visibility
  };
};

let changeTheme = (state, action) => {
  document.documentElement.classList.add('theme-transition')
  document.documentElement.setAttribute('data-theme', action.theme)
  window.setTimeout(function() {
    document.documentElement.classList.remove('theme-transition')
  }, 300);
  
  document.documentElement.setAttribute("data-theme", action.theme);

  return {
    ...state,
    theme: action.theme
  };
};

let clearDisplay = (state) => {
  return {
    ...state,
    output: intialState.output
  }
};

const reducer = (state, action) => {

  if (typeof state === 'undefined') {
    return intialState;
  }

  switch (action.type)
  {
    case (ActionType.ADD_DIGIT): {
      return addDigit(state, action);
    }
    case (ActionType.ADD_OPERATOR): {
      return addOperator(state, action);
    }
    case (ActionType.ADD_DEC_SEPARATOR): {
      return addDecSeparator(state);
    }
    case (ActionType.PROCESS_BACKSPACE): {
      return processBackspace(state);
    }
    case (ActionType.CALC_PERCENTAGE): {
      return calcPercentage(state);
    }
    case (ActionType.TOGGLE_SIGN): {
      return toggleSign(state);
    }
    case (ActionType.CLEAR_DISPLAY): {
      return clearDisplay(state);
    }
    case (ActionType.TOGGLE_MENU): {
      return toggleMenu(state);
    }
    case (ActionType.CHANGE_THEME): {
      return changeTheme(state, action);
    }
    default: {
      return state;
    }
  }
}

export default reducer;