const initialState = {
    selectedDepartement: null,
    selectedId: null,
    data: {
        'HR' : [1,2,3,4,5],
        'ENGINEERING': [6,7,8,9,10]
    },
    showLoading: false,
    imgUrl: 'http://duncanlock.net/images/posts/better-figures-images-plugin-for-pelican/dummy-250x300.png',
    firstName: '',
    lastName: '',
}

const reducer = (state = initialState, action) => {
    if(action.type === 'SELECT_DEPARTMENT') {
        return {
            ...state,
            selectedDepartement: action.text
        }
    }
    if(action.type === 'SELECT_ID') {
        return {
            ...state,
            selectedId: action.text
        }
    }
    if(action.type === 'CLEAR') {
        return {
            ...state,
            selectedDepartement: null,
            selectedId: null,
            imgUrl: 'http://duncanlock.net/images/posts/better-figures-images-plugin-for-pelican/dummy-250x300.png',
            firstName: '',
            lastName: '',
            showLoading: false
        }
    }
    if(action.type === 'SHOW_LOADING') {
        return {
            ...state,
            showLoading: true
        }
    }
    if(action.type === 'SHOW_PROFILE') {
        return {
            ...state,
            imgUrl: action.data.avatar,
            firstName: action.data.first_name,
            lastName: action.data.last_name,
            showLoading: false
        }
    }
    
    return state;
}

export default reducer;