const initialState = {
  selected: '',
};

export default function menu(state = initialState, action) {
  switch (action.type) {
    case 'SELECT_MENU':
      return {
        ...state,
        selected: action.selected,
      };
    default:
      return state;
  }
}
