import { pick } from '../utils';

const initialState = {	
	isNavbarOpen: false,
	isModalOpen: false,
	loginActiveTab: '1',
	loginForm: {
		username: '',
		password: ''
	},
	signupForm: {
		fullname: '',
		username: '',
		password: '',
		alert: {}
	},
	newItemForm: {
		link: '',
		tags: '',
		rating: ''
	}
};

const misc = (state = initialState, action) => {
  
	switch (action.type) {

		case 'TOGGLE_HEADER': return { ...state, 
				isNavbarOpen: !state.isNavbarOpen 
			};

		case 'TOGGLE_MODAL': return { ...state, 
				isModalOpen: !state.isModalOpen 
			};

		case 'UPDATE_ACTIVE_TAB': return { ...state, 
				loginActiveTab: action.payload 
			};

		case 'UPDATE_NEW_ITEM_FORM': 
	
			{
				const obj = {
					[action.payload.name]: action.payload.value
				};
					
				return { ...state, newItemForm: {...state.newItemForm, ...obj} };
			}

		case 'UPDATE_LOGIN_FORM': 
	
			{
				const obj = {
					[action.payload.name]: action.payload.value
				};
					
				return { ...state, loginForm: {...state.loginForm, ...obj} };
			}

		case 'UPDATE_SIGNUP_FORM': 
	
			{				
				const obj = {
					[action.payload.name]: action.payload.value
				};
					
				return { ...state, signupForm: {...state.signupForm, ...obj} };
			}

		case 'SIGNUP_API_RECEIVED': 

			{			
				const { message } = pick(action.payload.data, ['message']);

				return { ...state, 
					signupForm: { fullname: '', username: '', password: '', alert: { message, type: 'success'} }
				};
			}

		default: return state;
	}
}

export default misc
