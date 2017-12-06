const initialState = {	
	isNavbarOpen: false,
	loginActiveTab: '1'
};

const misc = (state = initialState, action) => {
  
  switch (action.type) {

  	case 'TOGGLE_HEADER': return { ...state, isNavbarOpen: !state.isNavbarOpen };

  	case 'UPDATE_ACTIVE_TAB': return { ...state, loginActiveTab: action.payload };

    default: return state;
  }
}

export default misc
