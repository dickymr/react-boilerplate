const main_state = {
  data: false
};

const main = (state = main_state, action) => {
  switch (action.type) {
    case 'GET_DATA':
      return { ...state, data: action.data };
    default:
      return state;
  }
};

export default main;
