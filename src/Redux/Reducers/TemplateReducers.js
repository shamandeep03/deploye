export const templatesReducers = (state = { data: null }, action) => {
    switch (action.type) {
        case 'GET_PAGE':
            return { ...state, data: null }
        case 'GET_PAGE_SUCCESS':
            return { ...state, data: action.payload }
        default:
            return state
    }
}